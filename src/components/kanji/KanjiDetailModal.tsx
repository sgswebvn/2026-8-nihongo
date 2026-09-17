import React from 'react';
import { KanjiItem, UserProfile } from '../../types';
import { X, Volume2, Bookmark } from 'lucide-react';
import { audioService } from '../../services/audioService';
import { soundEffects } from '../../services/soundEffects';

interface KanjiDetailModalProps {
  kanji: KanjiItem;
  activeProfile: UserProfile;
  onClose: () => void;
}

export const KanjiDetailModal: React.FC<KanjiDetailModalProps> = ({
  kanji,
  activeProfile,
  onClose
}) => {
  const handleSpeak = (text: string) => {
    soundEffects.playFlip();
    audioService.speakJapanese(text, activeProfile.settings.speechRate);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 800,
              background: 'var(--accent-primary)',
              color: '#fff',
              padding: '2px 8px',
              borderRadius: 'var(--radius-full)'
            }}
          >
            Kanji {kanji.level} • {kanji.strokes} nét
          </span>
          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-elevated)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '6px',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Big Kanji Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            textAlign: 'center',
            border: '1px solid var(--border-subtle)',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <div
            className="jp-font"
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: 'var(--text-primary)',
              lineHeight: 1
            }}
          >
            {kanji.character}
          </div>

          <div
            style={{
              fontSize: '18px',
              fontWeight: 900,
              color: 'var(--accent-gold)',
              letterSpacing: '2px'
            }}
          >
            {kanji.hanViet}
          </div>

          <div style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: 600 }}>
            {kanji.meaning}
          </div>
        </div>

        {/* Onyomi & Kunyomi */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
          <div
            style={{
              background: 'var(--bg-elevated)',
              padding: '12px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent-secondary)', marginBottom: '4px' }}>
              Âm Onyomi (Âm Hán):
            </div>
            <div className="jp-font" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
              {kanji.onyomi.length > 0 ? kanji.onyomi.join('、 ') : '—'}
            </div>
          </div>

          <div
            style={{
              background: 'var(--bg-elevated)',
              padding: '12px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent-primary)', marginBottom: '4px' }}>
              Âm Kunyomi (Âm Thuần Nhật):
            </div>
            <div className="jp-font" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
              {kanji.kunyomi.length > 0 ? kanji.kunyomi.join('、 ') : '—'}
            </div>
          </div>
        </div>

        {/* Compounds list */}
        <div style={{ fontSize: '13px', fontWeight: 800, marginBottom: '10px' }}>
          Từ ghép thông dụng ({kanji.compounds.length})
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {kanji.compounds.map((comp, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span className="jp-font" style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {comp.word}
                  </span>
                  <span className="jp-font" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    ({comp.reading})
                  </span>
                  {comp.hanViet && (
                    <span style={{ fontSize: '10px', color: 'var(--accent-gold)', fontWeight: 700 }}>
                      [{comp.hanViet}]
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '2px' }}>
                  {comp.meaning}
                </div>
              </div>

              <button
                onClick={() => handleSpeak(comp.word)}
                style={{
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: 'none',
                  color: 'var(--accent-primary)',
                  padding: '8px',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer'
                }}
              >
                <Volume2 size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

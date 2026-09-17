import React from 'react';
import { Lesson, JapaneseWord, UserProfile } from '../../types';
import { MINNA_N5_WORDS } from '../../data/minnaN5';
import { MINNA_N4_WORDS } from '../../data/minnaN4';
import { JLPT_N2_WORDS } from '../../data/jlptN2';
import { X, Volume2, CheckCircle, Circle, Play, Layers } from 'lucide-react';
import { audioService } from '../../services/audioService';
import { soundEffects } from '../../services/soundEffects';

interface LessonDetailModalProps {
  lesson: Lesson;
  activeProfile: UserProfile;
  onClose: () => void;
  onToggleWordMastery: (wordId: string, currentStatus: boolean) => void;
  onPracticeLessonFlashcard: (lessonId: number) => void;
}

export const LessonDetailModal: React.FC<LessonDetailModalProps> = ({
  lesson,
  activeProfile,
  onClose,
  onToggleWordMastery,
  onPracticeLessonFlashcard
}) => {
  const allWords = lesson.level === 'N5' ? MINNA_N5_WORDS : lesson.level === 'N4' ? MINNA_N4_WORDS : JLPT_N2_WORDS;
  const lessonWords = allWords.filter((w) => w.lessonId === lesson.id);

  const handleSpeak = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playFlip();
    audioService.speakJapanese(text, activeProfile.settings.speechRate);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
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
              {lesson.level} - Bài {lesson.id}
            </span>
            <h2 style={{ fontSize: '17px', fontWeight: 800, marginTop: '4px' }}>{lesson.title}</h2>
          </div>
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

        {/* Action button: Practice Flashcards */}
        <button
          onClick={() => onPracticeLessonFlashcard(lesson.id)}
          className="btn-primary"
          style={{ width: '100%', marginBottom: '16px' }}
        >
          <Layers size={16} />
          Luyện Thẻ Flashcard ({lessonWords.length} từ)
        </button>

        {/* Grammar Highlights if available */}
        {lesson.grammarPoints && lesson.grammarPoints.length > 0 && (
          <div
            style={{
              background: 'var(--bg-elevated)',
              padding: '12px 14px',
              borderRadius: 'var(--radius-md)',
              marginBottom: '16px',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-primary)', marginBottom: '6px' }}>
              Trọng tâm ngữ pháp:
            </div>
            <ul style={{ paddingLeft: '18px', fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {lesson.grammarPoints.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Word List */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '13px', fontWeight: 800 }}>Từ vựng trọng tâm ({lessonWords.length})</span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Bấm loa để nghe đọc</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {lessonWords.map((word) => {
            const isMastered = activeProfile.masteredWordIds.includes(word.id);

            return (
              <div
                key={word.id}
                style={{
                  background: 'var(--bg-surface)',
                  border: isMastered ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span className="jp-font" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {word.kanji || word.kana}
                      </span>
                      <span className="jp-font" style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                        {word.kana}
                      </span>
                      {word.hanViet && (
                        <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--accent-gold)', background: 'rgba(245, 158, 11, 0.15)', padding: '1px 6px', borderRadius: '4px' }}>
                          [{word.hanViet}]
                        </span>
                      )}
                    </div>

                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-primary)', marginTop: '2px' }}>
                      {word.meaning}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <button
                      onClick={(e) => handleSpeak(word.kanji || word.kana, e)}
                      style={{
                        background: 'rgba(99, 102, 241, 0.15)',
                        border: 'none',
                        borderRadius: 'var(--radius-full)',
                        padding: '8px',
                        color: 'var(--accent-primary)',
                        cursor: 'pointer'
                      }}
                      title="Nghe phát âm"
                    >
                      <Volume2 size={16} />
                    </button>

                    <button
                      onClick={() => onToggleWordMastery(word.id, isMastered)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: isMastered ? 'var(--accent-emerald)' : 'var(--text-muted)',
                        cursor: 'pointer',
                        padding: '4px'
                      }}
                      title={isMastered ? 'Đã thuộc' : 'Chưa thuộc'}
                    >
                      {isMastered ? <CheckCircle size={20} /> : <Circle size={20} />}
                    </button>
                  </div>
                </div>

                {word.exampleJp && (
                  <div
                    style={{
                      marginTop: '4px',
                      padding: '6px 10px',
                      background: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: '8px',
                      fontSize: '11px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px'
                    }}
                  >
                    <div>
                      <div className="jp-font" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                        {word.exampleJp}
                      </div>
                      <div style={{ color: 'var(--text-muted)', marginTop: '1px' }}>
                        {word.exampleVi}
                      </div>
                    </div>
                    <button
                      onClick={(e) => handleSpeak(word.exampleJp || '', e)}
                      style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', flexShrink: 0 }}
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

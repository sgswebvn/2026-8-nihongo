import React from 'react';
import { UserProfile, MistakeItem } from '../../types';
import { X, AlertCircle, CheckCircle2, Layers, Trash2, ArrowRight } from 'lucide-react';
import { soundEffects } from '../../services/soundEffects';

interface MistakeNotebookModalProps {
  activeProfile: UserProfile;
  onClose: () => void;
  onResolveMistake: (mistakeId: string) => void;
  onDrillMistakesInFlashcard: () => void;
}

export const MistakeNotebookModal: React.FC<MistakeNotebookModalProps> = ({
  activeProfile,
  onClose,
  onResolveMistake,
  onDrillMistakesInFlashcard
}) => {
  const unresolved = activeProfile.mistakeBank.filter((m) => !m.resolved);
  const resolved = activeProfile.mistakeBank.filter((m) => m.resolved);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()} style={{ height: '85vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.2)', padding: '6px', borderRadius: 'var(--radius-full)', color: 'var(--accent-ruby)' }}>
              <AlertCircle size={18} />
            </div>
            <h2 style={{ fontSize: '17px', fontWeight: 800 }}>Sổ Tay Sai Sót & Điểm Yếu</h2>
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

        {/* Action Button: Drill Flashcards */}
        {unresolved.length > 0 && (
          <button
            onClick={() => {
              soundEffects.playVictory();
              onDrillMistakesInFlashcard();
            }}
            className="btn-primary"
            style={{ width: '100%', marginBottom: '16px', background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', boxShadow: '0 4px 14px rgba(239, 68, 68, 0.35)' }}
          >
            <Layers size={16} />
            Ôn tập riêng {unresolved.length} câu sai này qua Flashcard
          </button>
        )}

        {/* Unresolved Mistakes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--accent-ruby)' }}>
            Chưa khắc phục ({unresolved.length})
          </div>

          {unresolved.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '24px',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-secondary)',
                fontSize: '13px'
              }}
            >
              🎉 Bạn không có lỗi sai nào tồn đọng! Tiếp tục giữ phong độ nhé!
            </div>
          ) : (
            unresolved.map((item) => (
              <div
                key={item.id}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', maxWidth: '85%' }}>
                    {item.question}
                  </div>
                  <button
                    onClick={() => {
                      soundEffects.playCorrect();
                      onResolveMistake(item.id);
                    }}
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid var(--accent-emerald)',
                      color: 'var(--accent-emerald)',
                      padding: '4px 8px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '10px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                    title="Đánh dấu đã hiểu"
                  >
                    ✓ Đã thuộc
                  </button>
                </div>

                <div style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ color: 'var(--accent-ruby)' }}>
                    Bạn đã chọn: <b>{item.userAnswer}</b>
                  </span>
                  <span style={{ color: 'var(--accent-emerald)' }}>
                    Đáp án đúng: <b>{item.correctAnswer}</b>
                  </span>
                </div>
              </div>
            ))
          )}

          {/* Resolved Mistakes list */}
          {resolved.length > 0 && (
            <>
              <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--accent-emerald)', marginTop: '16px' }}>
                Đã khắc phục xong ({resolved.length})
              </div>
              {resolved.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: 'var(--radius-md)',
                    padding: '10px 12px',
                    opacity: 0.7,
                    fontSize: '12px'
                  }}
                >
                  <div style={{ fontWeight: 600, color: 'var(--text-muted)' }}>{item.question}</div>
                  <div style={{ color: 'var(--accent-emerald)', fontSize: '11px', marginTop: '2px' }}>
                    ✓ {item.correctAnswer}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

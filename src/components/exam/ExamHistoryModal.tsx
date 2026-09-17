import React from 'react';
import { UserProfile } from '../../types';
import { X, Award, CheckCircle2, XCircle, Clock, Calendar } from 'lucide-react';

interface ExamHistoryModalProps {
  activeProfile: UserProfile;
  onClose: () => void;
}

export const ExamHistoryModal: React.FC<ExamHistoryModalProps> = ({
  activeProfile,
  onClose
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()} style={{ height: '80vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={20} color="var(--accent-gold)" />
            <h2 style={{ fontSize: '17px', fontWeight: 800 }}>Lịch Sử Thi Cột Mốc ({activeProfile.examHistory.length})</h2>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {activeProfile.examHistory.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-secondary)', fontSize: '13px' }}>
              Bạn chưa làm bài kiểm tra cột mốc nào. Hãy hoàn thành 5 bài học đầu tiên và khiêu chiến Boss Exam nhé!
            </div>
          ) : (
            activeProfile.examHistory.map((item) => {
              const formattedDate = new Date(item.completedAt).toLocaleDateString('vi-VN', {
                hour: '2-digit',
                minute: '2-digit',
                day: '2-digit',
                month: '2-digit'
              });

              return (
                <div
                  key={item.id}
                  style={{
                    background: 'var(--bg-surface)',
                    border: item.passed ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {item.examTitle}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <Calendar size={12} /> {formattedDate}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <Clock size={12} /> {item.timeSpentSeconds}s
                        </span>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          background: item.passed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                          color: item.passed ? 'var(--accent-emerald)' : 'var(--accent-ruby)',
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-full)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        {item.passed ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                        {item.percentage}% ({item.score}/{item.totalQuestions})
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

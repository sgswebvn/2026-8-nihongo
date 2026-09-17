import React from 'react';
import { UserProfile, JLPTLevel } from '../../types';
import { Trophy, Flame, Award, AlertCircle, History, Settings, Users, Sparkles, Swords } from 'lucide-react';
import { soundEffects } from '../../services/soundEffects';

interface TeamLeaderboardProps {
  activeProfile: UserProfile;
  allProfiles: UserProfile[];
  currentLevel: JLPTLevel;
  onOpenMistakeBank: () => void;
  onOpenExamHistory: () => void;
  onOpenProfileManager: () => void;
}

export const TeamLeaderboard: React.FC<TeamLeaderboardProps> = ({
  activeProfile,
  allProfiles,
  currentLevel,
  onOpenMistakeBank,
  onOpenExamHistory,
  onOpenProfileManager
}) => {
  // Sort profiles by streak descending, then by words mastered
  const sortedProfiles = [...allProfiles].sort(
    (a, b) => b.streak - a.streak || b.masteredWordIds.length - a.masteredWordIds.length
  );

  const unresolvedMistakes = activeProfile.mistakeBank.filter((m) => !m.resolved);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 800 }}>Thi Đua Nhóm & Hồ Sơ</h2>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          Kỷ luật học tập nội bộ 2-3 người cùng tiến bộ
        </p>
      </div>

      {/* Leaderboard Podium Cards */}
      <div className="glass-panel" style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Trophy size={18} color="var(--accent-gold)" />
          <span style={{ fontSize: '14px', fontWeight: 800 }}>Bảng Vàng Thành Tích</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {sortedProfiles.map((p, idx) => {
            const isMe = p.id === activeProfile.id;
            const passedExams = p.examHistory.filter((h) => h.passed).length;

            return (
              <div
                key={p.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  background: isMe ? 'rgba(99, 102, 241, 0.15)' : 'var(--bg-elevated)',
                  border: isMe ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: 'var(--radius-full)',
                      background:
                        idx === 0
                          ? 'var(--accent-gold)'
                          : idx === 1
                          ? '#94a3b8'
                          : '#b45309',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {idx + 1}
                  </div>

                  <span style={{ fontSize: '26px' }}>{p.avatar}</span>

                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {p.name} {isMe && <span style={{ fontSize: '10px', color: 'var(--accent-primary)' }}>(Bạn)</span>}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                      {p.masteredWordIds.length} từ thuộc • {passedExams} Boss Cleared
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-gold)', fontWeight: 800, fontSize: '14px' }}>
                  <Flame size={16} fill="currentColor" />
                  <span>{p.streak}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Action Navigation Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-secondary)' }}>
          Công cụ cá nhân:
        </div>

        {/* Mistake Notebook link */}
        <div
          onClick={onOpenMistakeBank}
          className="glass-panel"
          style={{
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            border: unresolvedMistakes.length > 0 ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.2)', padding: '8px', borderRadius: 'var(--radius-full)', color: 'var(--accent-ruby)' }}>
              <AlertCircle size={20} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Sổ tay sai sót & Điểm yếu
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                {unresolvedMistakes.length > 0
                  ? `${unresolvedMistakes.length} câu cần khắc phục ngay`
                  : 'Tất cả câu hỏi đã được giải quyết'}
              </div>
            </div>
          </div>

          <span
            style={{
              fontSize: '12px',
              fontWeight: 800,
              background: unresolvedMistakes.length > 0 ? 'var(--accent-ruby)' : 'var(--bg-elevated)',
              color: '#fff',
              padding: '2px 8px',
              borderRadius: 'var(--radius-full)'
            }}
          >
            {unresolvedMistakes.length}
          </span>
        </div>

        {/* Exam History link */}
        <div
          onClick={onOpenExamHistory}
          className="glass-panel"
          style={{
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '8px', borderRadius: 'var(--radius-full)', color: 'var(--accent-gold)' }}>
              <History size={20} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Lịch sử thi Boss Exam
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                Đã thực hiện {activeProfile.examHistory.length} lần thi
              </div>
            </div>
          </div>

          <span style={{ fontSize: '12px', color: 'var(--accent-primary)', fontWeight: 700 }}>
            Xem lại →
          </span>
        </div>

        {/* Profile Manager link */}
        <div
          onClick={onOpenProfileManager}
          className="glass-panel"
          style={{
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(99, 102, 241, 0.2)', padding: '8px', borderRadius: 'var(--radius-full)', color: 'var(--accent-primary)' }}>
              <Settings size={20} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Cài đặt & Đổi tài khoản
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                Sao lưu dữ liệu JSON, tùy chỉnh tốc độ đọc, kỷ luật mở khóa
              </div>
            </div>
          </div>

          <span style={{ fontSize: '12px', color: 'var(--accent-primary)', fontWeight: 700 }}>
            Mở →
          </span>
        </div>
      </div>

      {/* Social Motivation Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)',
          borderRadius: 'var(--radius-md)',
          padding: '14px 16px',
          textAlign: 'center',
          border: '1px solid rgba(99, 102, 241, 0.2)'
        }}
      >
        <Sparkles size={20} color="var(--accent-gold)" style={{ margin: '0 auto 6px auto' }} />
        <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)' }}>
          "Một mình có thể đi nhanh, nhưng cùng nhau sẽ đi xa!"
        </div>
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
          Hãy nhắc nhở bạn học của mình ôn bài mỗi ngày để không bị đứt chuỗi Streak nhé 🔥
        </div>
      </div>
    </div>
  );
};

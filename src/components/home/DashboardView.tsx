import React from 'react';
import { UserProfile, JLPTLevel, ActiveTab } from '../../types';
import { MINNA_N5_LESSONS, MINNA_N5_WORDS } from '../../data/minnaN5';
import { MINNA_N4_LESSONS, MINNA_N4_WORDS } from '../../data/minnaN4';
import { JLPT_N2_LESSONS, JLPT_N2_WORDS } from '../../data/jlptN2';
import { MILESTONE_EXAMS } from '../../data/milestoneExams';
import { Flame, Award, BookOpen, Layers, AlertCircle, ArrowRight, ShieldCheck, Swords } from 'lucide-react';
import { soundEffects } from '../../services/soundEffects';

interface DashboardViewProps {
  activeProfile: UserProfile;
  allProfiles: UserProfile[];
  currentLevel: JLPTLevel;
  onNavigate: (tab: ActiveTab) => void;
  onOpenExam: (examId: string) => void;
  onOpenMistakeBank: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  activeProfile,
  allProfiles,
  currentLevel,
  onNavigate,
  onOpenExam,
  onOpenMistakeBank
}) => {
  const currentLessons = currentLevel === 'N5' ? MINNA_N5_LESSONS : currentLevel === 'N4' ? MINNA_N4_LESSONS : JLPT_N2_LESSONS;
  const currentWords = currentLevel === 'N5' ? MINNA_N5_WORDS : currentLevel === 'N4' ? MINNA_N4_WORDS : JLPT_N2_WORDS;

  // Find next milestone / boss exam
  const currentStage = Math.max(...activeProfile.unlockedStages);
  const nextExam = MILESTONE_EXAMS.find((e) => e.stageId === currentStage && e.level === currentLevel) || MILESTONE_EXAMS[0];

  const masteredCount = activeProfile.masteredWordIds.filter((id) =>
    currentWords.some((w) => w.id === id)
  ).length;
  const progressPercent = Math.min(100, Math.round((masteredCount / Math.max(1, currentWords.length)) * 100));

  const unresolvedMistakes = activeProfile.mistakeBank.filter((m) => !m.resolved);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Welcome Banner */}
      <div
        className="glass-panel"
        style={{
          padding: '20px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(236, 72, 153, 0.15) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '32px' }}>{activeProfile.avatar}</span>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Konnichiwa, {activeProfile.name}! 👋
              </h2>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Hôm nay bạn đang ôn luyện cấp độ <b style={{ color: 'var(--accent-primary)' }}>{currentLevel}</b>
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, marginBottom: '6px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Tiến độ từ vựng {currentLevel}</span>
              <span style={{ color: 'var(--accent-primary)' }}>{masteredCount} / {currentWords.length} từ ({progressPercent}%)</span>
            </div>
            <div style={{ height: '8px', background: 'rgba(0, 0, 0, 0.3)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${progressPercent}%`,
                  background: 'linear-gradient(90deg, #6366f1, #ec4899)',
                  borderRadius: 'var(--radius-full)',
                  transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mistake Bank Urgent Alert (Behavioral feedback) */}
      {unresolvedMistakes.length > 0 && (
        <div
          onClick={onOpenMistakeBank}
          style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.18) 0%, rgba(220, 38, 38, 0.08) 100%)',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.25)',
                padding: '8px',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AlertCircle size={20} color="var(--accent-ruby)" />
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#fca5a5' }}>
                Sổ tay sai sót: {unresolvedMistakes.length} câu chưa nhớ
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                Khắc phục ngay để tăng điểm bài thi lớn
              </div>
            </div>
          </div>
          <span style={{ fontSize: '12px', color: '#fca5a5', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            Ôn ngay <ArrowRight size={14} />
          </span>
        </div>
      )}

      {/* Milestone Boss Challenge Card */}
      {nextExam && (
        <div
          className="glass-panel"
          style={{
            padding: '18px',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(30, 41, 59, 0.6) 100%)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Swords size={20} color="var(--accent-gold)" />
              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Thử thách Cột mốc
              </span>
            </div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                background: 'rgba(245, 158, 11, 0.2)',
                color: 'var(--accent-gold)',
                padding: '3px 8px',
                borderRadius: 'var(--radius-full)'
              }}
            >
              Cần ≥ 80% để mở khóa
            </span>
          </div>

          <h3 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '4px', color: 'var(--text-primary)' }}>
            {nextExam.title}
          </h3>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '14px' }}>
            {nextExam.subtitle} • {nextExam.questions.length} câu hỏi • {Math.round(nextExam.timeLimitSeconds / 60)} phút
          </p>

          <button
            onClick={() => {
              soundEffects.playVictory();
              onOpenExam(nextExam.id);
            }}
            className="btn-primary"
            style={{ width: '100%', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)' }}
          >
            <Swords size={16} />
            Khiêu chiến Boss Exam ngay
          </button>
        </div>
      )}

      {/* Quick Access Menu */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div
          onClick={() => onNavigate('lessons')}
          className="glass-panel"
          style={{
            padding: '16px',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ background: 'rgba(99, 102, 241, 0.2)', padding: '8px', borderRadius: '12px', color: 'var(--accent-primary)' }}>
              <BookOpen size={20} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent-primary)' }}>{currentLessons.length} Bài</span>
          </div>
          <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)' }}>Giáo trình Minna</div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Bài 1 đến 50 chi tiết</div>
        </div>

        <div
          onClick={() => onNavigate('flashcard')}
          className="glass-panel"
          style={{
            padding: '16px',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ background: 'rgba(236, 72, 153, 0.2)', padding: '8px', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
              <Layers size={20} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent-secondary)' }}>Vuốt 60fps</span>
          </div>
          <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)' }}>Luyện Flashcard</div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Cử chỉ chạm vuốt Tinder</div>
        </div>
      </div>

      {/* Mini Group Leaderboard (2-3 friends social accountability) */}
      <div className="glass-panel" style={{ padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Award size={18} color="var(--accent-gold)" />
            <span style={{ fontSize: '13px', fontWeight: 800 }}>Bảng thi đua nhóm ({allProfiles.length} thành viên)</span>
          </div>
          <button
            onClick={() => onNavigate('team')}
            style={{ background: 'transparent', border: 'none', color: 'var(--accent-primary)', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
          >
            Chi tiết
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {allProfiles
            .sort((a, b) => b.streak - a.streak || b.masteredWordIds.length - a.masteredWordIds.length)
            .map((p, idx) => (
              <div
                key={p.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: p.id === activeProfile.id ? 'rgba(99, 102, 241, 0.15)' : 'var(--bg-elevated)',
                  border: p.id === activeProfile.id ? '1px solid var(--border-active)' : '1px solid transparent'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: idx === 0 ? 'var(--accent-gold)' : 'var(--text-muted)', width: '16px' }}>
                    #{idx + 1}
                  </span>
                  <span style={{ fontSize: '20px' }}>{p.avatar}</span>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {p.name} {p.id === activeProfile.id && <span style={{ fontSize: '10px', color: 'var(--accent-primary)' }}>(Bạn)</span>}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                      Đã thuộc {p.masteredWordIds.length} từ
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-gold)', fontWeight: 800, fontSize: '12px' }}>
                  <Flame size={14} fill="currentColor" />
                  <span>{p.streak} ngày</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

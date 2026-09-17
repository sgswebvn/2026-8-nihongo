import React, { useState } from 'react';
import { UserProfile, JLPTLevel, Lesson } from '../../types';
import { MINNA_N5_LESSONS } from '../../data/minnaN5';
import { MINNA_N4_LESSONS } from '../../data/minnaN4';
import { MILESTONE_EXAMS } from '../../data/milestoneExams';
import { Lock, CheckCircle2, ChevronRight, Swords, Sparkles, BookOpen } from 'lucide-react';
import { soundEffects } from '../../services/soundEffects';

interface LessonsCatalogProps {
  activeProfile: UserProfile;
  currentLevel: JLPTLevel;
  onSelectLesson: (lesson: Lesson) => void;
  onOpenExam: (examId: string) => void;
}

export const LessonsCatalog: React.FC<LessonsCatalogProps> = ({
  activeProfile,
  currentLevel,
  onSelectLesson,
  onOpenExam
}) => {
  const allLessons = currentLevel === 'N5' ? MINNA_N5_LESSONS : MINNA_N4_LESSONS;

  // Group into stages (5 lessons per stage)
  const stages = [
    { stageId: currentLevel === 'N5' ? 1 : 6, title: currentLevel === 'N5' ? 'Chặng 1: Nhập môn & Làm quen' : 'Chặng 6: Khởi đầu N4', range: currentLevel === 'N5' ? [1, 5] : [26, 30] },
    { stageId: currentLevel === 'N5' ? 2 : 7, title: currentLevel === 'N5' ? 'Chặng 2: Hành động & Tính từ' : 'Chặng 7: Thể Ý chí & Mệnh lệnh', range: currentLevel === 'N5' ? [6, 10] : [31, 35] },
    { stageId: currentLevel === 'N5' ? 3 : 8, title: currentLevel === 'N5' ? 'Chặng 3: Thể て & Nhờ vả' : 'Chặng 8: Bị động & Gián tiếp', range: currentLevel === 'N5' ? [11, 15] : [36, 40] },
    { stageId: currentLevel === 'N5' ? 4 : 9, title: currentLevel === 'N5' ? 'Chặng 4: Thể ない & Thể た' : 'Chặng 9: Kính ngữ Cho-Nhận', range: currentLevel === 'N5' ? [16, 20] : [41, 45] },
    { stageId: currentLevel === 'N5' ? 5 : 10, title: currentLevel === 'N5' ? 'Chặng 5: ĐẠI CHIẾN N5 MOCK' : 'Chặng 10: ĐẠI CHIẾN N4 MOCK', range: currentLevel === 'N5' ? [21, 25] : [46, 50] }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 800 }}>Giáo trình Minna {currentLevel}</h2>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
            Chu kỳ 5 bài / 1 Boss Exam mở khóa chặng tiếp
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {stages.map((stage) => {
          const isUnlocked = !activeProfile.settings.gatekeeperEnabled || activeProfile.unlockedStages.includes(stage.stageId);
          const stageLessons = allLessons.filter(
            (l) => l.id >= stage.range[0] && l.id <= stage.range[1]
          );
          const exam = MILESTONE_EXAMS.find((e) => e.stageId === stage.stageId);
          const isExamPassed = activeProfile.examHistory.some((h) => h.stageId === stage.stageId && h.passed);

          return (
            <div
              key={stage.stageId}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                opacity: isUnlocked ? 1 : 0.65,
                transition: 'opacity 0.2s ease'
              }}
            >
              {/* Stage Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '6px 4px',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      background: isUnlocked ? 'var(--accent-primary)' : 'var(--bg-elevated)',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    Chặng {stage.stageId}
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: 800 }}>{stage.title}</span>
                </div>

                {!isUnlocked && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--accent-gold)', fontWeight: 700 }}>
                    <Lock size={13} /> Khóa
                  </span>
                )}
              </div>

              {/* Stage Lessons List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {stageLessons.map((lesson) => {
                  const isDone = activeProfile.completedLessons.includes(lesson.id);
                  return (
                    <div
                      key={lesson.id}
                      onClick={() => {
                        if (isUnlocked) {
                          soundEffects.playFlip();
                          onSelectLesson(lesson);
                        } else {
                          soundEffects.playIncorrect();
                        }
                      }}
                      className="glass-panel"
                      style={{
                        padding: '12px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: isUnlocked ? 'pointer' : 'not-allowed',
                        border: isDone ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-subtle)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            background: isDone ? 'rgba(16, 185, 129, 0.2)' : 'var(--bg-elevated)',
                            color: isDone ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '13px',
                            fontWeight: 800
                          }}
                        >
                          {isDone ? <CheckCircle2 size={18} /> : `${lesson.id}`}
                        </div>

                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
                            {lesson.title}
                          </div>
                          <div style={{ fontSize: '11px', color: 'var(--text-muted)', maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {lesson.description}
                          </div>
                        </div>
                      </div>

                      <ChevronRight size={16} color="var(--text-muted)" />
                    </div>
                  );
                })}
              </div>

              {/* Boss Exam Gated Card at the end of every 5 lessons */}
              {exam && (
                <div
                  onClick={() => {
                    if (isUnlocked) {
                      soundEffects.playVictory();
                      onOpenExam(exam.id);
                    } else {
                      soundEffects.playIncorrect();
                    }
                  }}
                  style={{
                    background: isExamPassed
                      ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(30, 41, 59, 0.8) 100%)'
                      : 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(30, 41, 59, 0.8) 100%)',
                    border: isExamPassed ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(245, 158, 11, 0.4)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: isUnlocked ? 'pointer' : 'not-allowed'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        background: isExamPassed ? 'rgba(16, 185, 129, 0.25)' : 'rgba(245, 158, 11, 0.25)',
                        padding: '8px',
                        borderRadius: 'var(--radius-full)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isExamPassed ? 'var(--accent-emerald)' : 'var(--accent-gold)'
                      }}
                    >
                      <Swords size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {exam.title}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                        {isExamPassed ? '✓ Đã vượt ải (Đạt yêu cầu mở khóa)' : 'Cần đạt ≥ 80% để mở chặng tiếp theo'}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      background: isExamPassed ? 'var(--accent-emerald)' : 'var(--accent-gold)',
                      color: '#fff',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {isExamPassed ? 'Đã đỗ' : 'Thi ngay'}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

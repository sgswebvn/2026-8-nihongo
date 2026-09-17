import React, { useState, useEffect } from 'react';
import { MilestoneExam, UserProfile, ExamScorecard } from '../../types';
import { X, Clock, Swords, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../services/soundEffects';
import { storageService } from '../../services/storageService';

interface BossExamModalProps {
  exam: MilestoneExam;
  activeProfile: UserProfile;
  onClose: () => void;
  onExamCompleted: (scorecard: ExamScorecard, newlyUnlockedStage?: number) => void;
}

export const BossExamModal: React.FC<BossExamModalProps> = ({
  exam,
  activeProfile,
  onClose,
  onExamCompleted
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: string]: number }>({});
  const [timeLeft, setTimeLeft] = useState(exam.timeLimitSeconds);
  const [isFinished, setIsFinished] = useState(false);
  const [resultScorecard, setResultScorecard] = useState<ExamScorecard | null>(null);
  const [newlyUnlocked, setNewlyUnlocked] = useState<number | undefined>(undefined);

  // Timer countdown
  useEffect(() => {
    if (isFinished) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isFinished, selectedAnswers]);

  const currentQuestion = exam.questions[currentIndex];

  const handleSelectOption = (index: number) => {
    soundEffects.playFlip();
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: index
    }));
  };

  const handleNext = () => {
    if (currentIndex < exam.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    setIsFinished(true);

    let correctCount = 0;
    const mistakes: { wordId: string; question: string; userAnswer: string; correctAnswer: string }[] = [];
    const mistakeWordIds: string[] = [];

    exam.questions.forEach((q) => {
      const selected = selectedAnswers[q.id];
      if (selected === q.correctIndex) {
        correctCount += 1;
      } else {
        const userChoice = selected !== undefined ? q.options[selected] : 'Chưa trả lời';
        const correctChoice = q.options[q.correctIndex];
        if (q.wordId) {
          mistakeWordIds.push(q.wordId);
          mistakes.push({
            wordId: q.wordId,
            question: q.question,
            userAnswer: userChoice,
            correctAnswer: correctChoice
          });
        }
      }
    });

    const percentage = Math.round((correctCount / exam.questions.length) * 100);
    const passed = percentage >= exam.minPassScore;
    const timeSpent = exam.timeLimitSeconds - timeLeft;

    // Automatically record mistakes into the Mistake Bank
    if (mistakes.length > 0) {
      storageService.recordExamMistakes(activeProfile.id, mistakes);
    }

    const scorecard: ExamScorecard = {
      id: 'score_' + Date.now(),
      examId: exam.id,
      stageId: exam.stageId,
      level: exam.level,
      examTitle: exam.title,
      score: correctCount,
      totalQuestions: exam.questions.length,
      percentage,
      passed,
      timeSpentSeconds: timeSpent,
      completedAt: new Date().toISOString(),
      mistakeWordIds
    };

    const { newlyUnlockedStage } = storageService.recordExamResult(activeProfile.id, scorecard);
    setResultScorecard(scorecard);
    setNewlyUnlocked(newlyUnlockedStage);

    if (passed) {
      soundEffects.playVictory();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else {
      soundEffects.playIncorrect();
    }

    onExamCompleted(scorecard, newlyUnlockedStage);
  };

  // Format time (mm:ss)
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-sheet" style={{ height: '90vh' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Swords size={20} color="var(--accent-gold)" />
            <span style={{ fontSize: '13px', fontWeight: 800 }}>{exam.title}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {!isFinished && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: timeLeft <= 60 ? 'rgba(239, 68, 68, 0.2)' : 'var(--bg-elevated)',
                  color: timeLeft <= 60 ? 'var(--accent-ruby)' : 'var(--text-primary)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '12px',
                  fontWeight: 800
                }}
              >
                <Clock size={14} />
                <span>{formatTime(timeLeft)}</span>
              </div>
            )}
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
        </div>

        {/* Exam Running State */}
        {!isFinished ? (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
            <div>
              {/* Progress bar */}
              <div style={{ height: '6px', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-full)', overflow: 'hidden', marginBottom: '16px' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${((currentIndex + 1) / exam.questions.length) * 100}%`,
                    background: 'var(--accent-primary)',
                    borderRadius: 'var(--radius-full)',
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>

              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 700, marginBottom: '6px' }}>
                Câu hỏi {currentIndex + 1} / {exam.questions.length}
              </div>

              {/* Question Text */}
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 800,
                  lineHeight: 1.4,
                  marginBottom: '20px',
                  color: 'var(--text-primary)'
                }}
              >
                {currentQuestion.question}
              </div>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      style={{
                        padding: '14px 16px',
                        borderRadius: 'var(--radius-md)',
                        background: isSelected ? 'rgba(99, 102, 241, 0.2)' : 'var(--bg-elevated)',
                        border: isSelected ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)',
                        textAlign: 'left',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{opt}</span>
                      {isSelected && <CheckCircle2 size={18} color="var(--accent-primary)" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Next / Submit Button */}
            <div style={{ paddingTop: '20px' }}>
              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion.id] === undefined}
                className="btn-primary"
                style={{
                  width: '100%',
                  opacity: selectedAnswers[currentQuestion.id] === undefined ? 0.5 : 1,
                  cursor: selectedAnswers[currentQuestion.id] === undefined ? 'not-allowed' : 'pointer'
                }}
              >
                {currentIndex < exam.questions.length - 1 ? (
                  <>
                    Câu tiếp theo <ArrowRight size={16} />
                  </>
                ) : (
                  'Nộp bài & Chấm điểm 🎯'
                )}
              </button>
            </div>
          </div>
        ) : (
          /* Result Scorecard State */
          resultScorecard && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
              <div
                style={{
                  padding: '24px 16px',
                  borderRadius: 'var(--radius-lg)',
                  background: resultScorecard.passed
                    ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(30, 41, 59, 0.8) 100%)',
                  border: resultScorecard.passed ? '2px solid var(--accent-emerald)' : '2px solid var(--accent-ruby)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                {resultScorecard.passed ? (
                  <Award size={48} color="var(--accent-gold)" />
                ) : (
                  <AlertTriangle size={48} color="var(--accent-ruby)" />
                )}

                <h3 style={{ fontSize: '20px', fontWeight: 900 }}>
                  {resultScorecard.passed ? 'XUẤT SẮC! VƯỢT CỘT MỐC THÀNH CÔNG!' : 'CHƯA ĐẠT CHỈ TIÊU VƯỢT ẢI'}
                </h3>

                <div style={{ fontSize: '36px', fontWeight: 900, color: resultScorecard.passed ? 'var(--accent-emerald)' : 'var(--accent-ruby)' }}>
                  {resultScorecard.score} / {resultScorecard.totalQuestions} ({resultScorecard.percentage}%)
                </div>

                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '320px' }}>
                  {resultScorecard.passed
                    ? `Bạn đã đạt yêu cầu ≥ ${exam.minPassScore}%. Chúc mừng bạn đã mở khóa chặng học tiếp theo!`
                    : `Cần đạt tối thiểu ${exam.minPassScore}% để mở khóa. Đừng nản lòng, hãy xem lại các câu sai và thi lại nhé!`}
                </p>

                {newlyUnlocked && (
                  <div
                    style={{
                      background: 'rgba(16, 185, 129, 0.25)',
                      border: '1px solid var(--accent-emerald)',
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--accent-emerald)',
                      fontSize: '12px',
                      fontWeight: 800
                    }}
                  >
                    🎉 Đã mở khóa Chặng {newlyUnlocked}!
                  </div>
                )}
              </div>

              {/* Review Mistakes Section */}
              {resultScorecard.mistakeWordIds.length > 0 && (
                <div style={{ textAlign: 'left', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', padding: '14px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--accent-ruby)', marginBottom: '8px' }}>
                    ⚠️ Đã tự động lưu {resultScorecard.mistakeWordIds.length} câu sai vào "Sổ tay sai sót":
                  </div>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    Bạn có thể vào mục "Sổ tay sai sót" để luyện riêng các từ vựng này bất cứ lúc nào.
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => {
                    setIsFinished(false);
                    setCurrentIndex(0);
                    setSelectedAnswers({});
                    setTimeLeft(exam.timeLimitSeconds);
                    setResultScorecard(null);
                  }}
                  className="btn-secondary"
                  style={{ flex: 1 }}
                >
                  <RotateCcw size={16} /> Thi lại
                </button>
                <button onClick={onClose} className="btn-primary" style={{ flex: 1 }}>
                  Hoàn tất
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

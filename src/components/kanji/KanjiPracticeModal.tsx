import React, { useState } from 'react';
import { KanjiExerciseQuestion, UserProfile } from '../../types';
import { X, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, Volume2, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../services/soundEffects';
import { audioService } from '../../services/audioService';

interface KanjiPracticeModalProps {
  title: string;
  subtitle?: string;
  questions: KanjiExerciseQuestion[];
  activeProfile: UserProfile;
  onClose: () => void;
  onCompleted: (score: number, total: number, masteredChars: string[]) => void;
}

export const KanjiPracticeModal: React.FC<KanjiPracticeModalProps> = ({
  title,
  subtitle,
  questions,
  activeProfile,
  onClose,
  onCompleted
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [wrongQuestions, setWrongQuestions] = useState<KanjiExerciseQuestion[]>([]);
  const [correctChars, setCorrectChars] = useState<string[]>([]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correctIndex;

    if (isCorrect) {
      soundEffects.playCorrect();
      setScore((prev) => prev + 1);
      setCorrectChars((prev) => [...new Set([...prev, currentQ.kanjiChar])]);
    } else {
      soundEffects.playIncorrect();
      setWrongQuestions((prev) => [...prev, currentQ]);
    }

    // Speak character or reading if available
    audioService.speakJapanese(currentQ.kanjiChar, activeProfile.settings.speechRate);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      finishPractice();
    }
  };

  const finishPractice = () => {
    setIsFinished(true);
    const finalScore = score + (selectedAnswer === currentQ.correctIndex ? 1 : 0);
    const percentage = Math.round((finalScore / questions.length) * 100);

    if (percentage >= 70) {
      soundEffects.playVictory();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    onCompleted(finalScore, questions.length, correctChars);
  };

  const percentage = Math.round((score / Math.max(1, questions.length)) * 100);

  return (
    <div className="modal-overlay">
      <div className="modal-sheet" style={{ height: '88vh' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                background: 'rgba(99, 102, 241, 0.2)',
                color: 'var(--accent-primary)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)'
              }}
            >
              Luyện Tập Kanji
            </span>
            <h2 style={{ fontSize: '16px', fontWeight: 800, marginTop: '2px' }}>{title}</h2>
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

        {!isFinished ? (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
            <div>
              {/* Progress bar */}
              <div style={{ height: '6px', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-full)', overflow: 'hidden', marginBottom: '16px' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${((currentIndex + 1) / questions.length) * 100}%`,
                    background: 'linear-gradient(90deg, #6366f1, #ec4899)',
                    borderRadius: 'var(--radius-full)',
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 700, marginBottom: '8px' }}>
                <span>Câu {currentIndex + 1} / {questions.length}</span>
                <span style={{ color: 'var(--accent-emerald)' }}>Đúng: {score}</span>
              </div>

              {/* Central Kanji Focus Box */}
              <div
                style={{
                  background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '20px 16px',
                  textAlign: 'center',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '16px',
                  position: 'relative'
                }}
              >
                <div
                  className="jp-font"
                  style={{
                    fontSize: '56px',
                    fontWeight: 900,
                    color: 'var(--text-primary)',
                    lineHeight: 1.1,
                    marginBottom: '6px'
                  }}
                >
                  {currentQ.kanjiChar}
                </div>

                <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {currentQ.question}
                </div>

                {currentQ.subPrompt && (
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {currentQ.subPrompt}
                  </div>
                )}
              </div>

              {/* 4 Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentQ.options.map((opt, idx) => {
                  let btnBg = 'var(--bg-elevated)';
                  let btnBorder = 'var(--border-subtle)';
                  let btnColor = 'var(--text-primary)';

                  if (isAnswered) {
                    if (idx === currentQ.correctIndex) {
                      btnBg = 'rgba(16, 185, 129, 0.2)';
                      btnBorder = 'var(--accent-emerald)';
                      btnColor = 'var(--accent-emerald)';
                    } else if (idx === selectedAnswer) {
                      btnBg = 'rgba(239, 68, 68, 0.2)';
                      btnBorder = 'var(--accent-ruby)';
                      btnColor = 'var(--accent-ruby)';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      style={{
                        padding: '13px 16px',
                        borderRadius: 'var(--radius-md)',
                        background: btnBg,
                        border: `1.5px solid ${btnBorder}`,
                        color: btnColor,
                        fontSize: '14px',
                        fontWeight: 700,
                        textAlign: 'left',
                        cursor: isAnswered ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <span className="jp-font">{opt}</span>
                      {isAnswered && idx === currentQ.correctIndex && (
                        <CheckCircle2 size={18} color="var(--accent-emerald)" />
                      )}
                      {isAnswered && idx === selectedAnswer && idx !== currentQ.correctIndex && (
                        <XCircle size={18} color="var(--accent-ruby)" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Card after answer */}
              {isAnswered && (
                <div
                  style={{
                    marginTop: '14px',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: selectedAnswer === currentQ.correctIndex ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    border: selectedAnswer === currentQ.correctIndex ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
                    fontSize: '12px',
                    color: 'var(--text-secondary)'
                  }}
                >
                  💡 <b>Giải thích:</b> {currentQ.explanation}
                </div>
              )}
            </div>

            {/* Bottom Next Button */}
            {isAnswered && (
              <div style={{ paddingTop: '16px' }}>
                <button onClick={handleNext} className="btn-primary" style={{ width: '100%' }}>
                  {currentIndex < questions.length - 1 ? (
                    <>
                      Câu tiếp theo <ArrowRight size={16} />
                    </>
                  ) : (
                    'Xem kết quả luyện tập 🏁'
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Result Screen */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
            <div
              style={{
                padding: '24px 16px',
                borderRadius: 'var(--radius-lg)',
                background: percentage >= 70 ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)' : 'var(--bg-elevated)',
                border: percentage >= 70 ? '2px solid var(--accent-emerald)' : '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Award size={46} color="var(--accent-gold)" />
              <h3 style={{ fontSize: '18px', fontWeight: 900 }}>
                {percentage >= 90 ? 'SIÊU ĐẲNG! BẠN NHỚ KANJI CỰC TỐT!' : percentage >= 70 ? 'RẤT TỐT! ĐÃ NẮM VỮNG BÀI HỌC' : 'CẦN ÔN LẠI MỘT CHÚT NHÉ!'}
              </h3>
              <div style={{ fontSize: '36px', fontWeight: 900, color: percentage >= 70 ? 'var(--accent-emerald)' : 'var(--accent-ruby)' }}>
                {score} / {questions.length} ({percentage}%)
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Bạn đã ghi nhớ được {correctChars.length} chữ Kanji trong lượt luyện tập này!
              </p>
            </div>

            {/* Wrong questions review */}
            {wrongQuestions.length > 0 && (
              <div style={{ textAlign: 'left', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', padding: '12px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-ruby)', marginBottom: '8px' }}>
                  Các chữ Kanji bạn cần chú ý:
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[...new Set(wrongQuestions.map((q) => q.kanjiChar))].map((char, i) => (
                    <span
                      key={i}
                      className="jp-font"
                      style={{
                        background: 'rgba(239, 68, 68, 0.2)',
                        border: '1px solid var(--accent-ruby)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '18px',
                        fontWeight: 800,
                        color: 'var(--text-primary)'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => {
                  setCurrentIndex(0);
                  setSelectedAnswer(null);
                  setIsAnswered(false);
                  setScore(0);
                  setIsFinished(false);
                  setWrongQuestions([]);
                }}
                className="btn-secondary"
                style={{ flex: 1 }}
              >
                <RotateCcw size={16} /> Luyện lại
              </button>
              <button onClick={onClose} className="btn-primary" style={{ flex: 1 }}>
                Hoàn tất
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { UserProfile, JLPTLevel, JapaneseWord } from '../../types';
import { MINNA_N5_WORDS } from '../../data/minnaN5';
import { MINNA_N4_WORDS } from '../../data/minnaN4';
import { Volume2, RotateCw, Check, X, Sparkles, Filter, AlertCircle, ArrowLeft } from 'lucide-react';
import { audioService } from '../../services/audioService';
import { soundEffects } from '../../services/soundEffects';

interface FlashcardViewProps {
  activeProfile: UserProfile;
  currentLevel: JLPTLevel;
  filterLessonId?: number;
  initialMistakeOnly?: boolean;
  onClearFilter?: () => void;
  onRecordWordMastery: (wordId: string, mastered: boolean) => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  activeProfile,
  currentLevel,
  filterLessonId,
  initialMistakeOnly = false,
  onClearFilter,
  onRecordWordMastery
}) => {
  const allWords = currentLevel === 'N5' ? MINNA_N5_WORDS : MINNA_N4_WORDS;

  const [selectedLesson, setSelectedLesson] = useState<number | 'all'>(
    filterLessonId || 'all'
  );
  const [mistakeOnly, setMistakeOnly] = useState<boolean>(initialMistakeOnly);

  // Filter words
  const filteredWords = React.useMemo(() => {
    let list = allWords;

    if (mistakeOnly) {
      const mistakeIds = activeProfile.mistakeBank
        .filter((m) => !m.resolved)
        .map((m) => m.wordId);
      list = list.filter((w) => mistakeIds.includes(w.id));
    } else if (selectedLesson !== 'all') {
      list = list.filter((w) => w.lessonId === selectedLesson);
    }

    return list;
  }, [allWords, selectedLesson, mistakeOnly, activeProfile.mistakeBank]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [swipeState, setSwipeState] = useState<'left' | 'right' | null>(null);

  // Touch gesture state
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [dragOffset, setDragOffset] = useState<number>(0);

  const currentWord: JapaneseWord | undefined = filteredWords[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setSwipeState(null);
  }, [selectedLesson, mistakeOnly, currentLevel]);

  // Handle automatic audio when flipped if enabled
  useEffect(() => {
    if (isFlipped && currentWord && activeProfile.settings.autoPlayAudio) {
      audioService.speakJapanese(currentWord.kanji || currentWord.kana, activeProfile.settings.speechRate);
    }
  }, [isFlipped, currentWord]);

  const handleFlip = () => {
    soundEffects.playFlip();
    setIsFlipped((prev) => !prev);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (!currentWord) return;

    setSwipeState(direction);
    soundEffects.playSwipe();

    if (direction === 'right') {
      soundEffects.playCorrect();
      onRecordWordMastery(currentWord.id, true);
    } else {
      soundEffects.playIncorrect();
      onRecordWordMastery(currentWord.id, false);
    }

    setTimeout(() => {
      setSwipeState(null);
      setIsFlipped(false);
      setDragOffset(0);
      if (currentIndex < filteredWords.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0); // Loop back or done
      }
    }, 280);
  };

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - touchStart.x;
    setDragOffset(diffX);
  };

  const handleTouchEnd = () => {
    if (dragOffset > 75) {
      handleSwipe('right');
    } else if (dragOffset < -75) {
      handleSwipe('left');
    }
    setTouchStart(null);
    setDragOffset(0);
  };

  const speakCurrent = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentWord) {
      soundEffects.playFlip();
      audioService.speakJapanese(currentWord.kanji || currentWord.kana, activeProfile.settings.speechRate);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Top Filter Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '4px', maxWidth: '80%' }}>
          <button
            onClick={() => {
              setMistakeOnly(false);
              setSelectedLesson('all');
              if (onClearFilter) onClearFilter();
            }}
            style={{
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: !mistakeOnly && selectedLesson === 'all' ? 'var(--accent-primary)' : 'var(--bg-elevated)',
              color: !mistakeOnly && selectedLesson === 'all' ? '#fff' : 'var(--text-secondary)',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Tất cả ({allWords.length})
          </button>

          {/* Filter by Mistake Notebook button */}
          <button
            onClick={() => {
              setMistakeOnly(true);
              setSelectedLesson('all');
            }}
            style={{
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: mistakeOnly ? 'var(--accent-ruby)' : 'var(--bg-elevated)',
              color: mistakeOnly ? '#fff' : 'var(--text-secondary)',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <AlertCircle size={12} />
            Sổ tay câu sai ({activeProfile.mistakeBank.filter((m) => !m.resolved).length})
          </button>
        </div>

        {/* Counter */}
        <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-primary)', flexShrink: 0 }}>
          {filteredWords.length > 0 ? `${currentIndex + 1} / ${filteredWords.length}` : '0 / 0'}
        </span>
      </div>

      {/* Empty State */}
      {filteredWords.length === 0 ? (
        <div
          className="glass-panel"
          style={{
            padding: '40px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <Sparkles size={40} color="var(--accent-emerald)" />
          <h3 style={{ fontSize: '16px', fontWeight: 800 }}>Tuyệt vời! Không có từ nào cần ôn</h3>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
            {mistakeOnly
              ? 'Sổ tay câu sai của bạn đã được giải quyết sạch sẽ!'
              : 'Hãy chọn bài học khác để bắt đầu ôn luyện.'}
          </p>
          <button
            onClick={() => {
              setMistakeOnly(false);
              setSelectedLesson('all');
            }}
            className="btn-primary"
            style={{ marginTop: '8px' }}
          >
            Xem tất cả từ vựng
          </button>
        </div>
      ) : (
        <>
          {/* Flashcard Stage */}
          <div
            className="flashcard-stage"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(${dragOffset}px) rotate(${dragOffset * 0.04}deg)`,
              transition: touchStart ? 'none' : 'transform 0.3s ease'
            }}
          >
            {/* Visual feedback pill on drag */}
            {dragOffset > 30 && (
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'var(--accent-emerald)',
                  color: '#fff',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 800,
                  fontSize: '12px',
                  zIndex: 20,
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
                }}
              >
                ĐÃ THUỘC ✓
              </div>
            )}
            {dragOffset < -30 && (
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'var(--accent-ruby)',
                  color: '#fff',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 800,
                  fontSize: '12px',
                  zIndex: 20,
                  boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)'
                }}
              >
                CHƯA NHỚ ✕
              </div>
            )}

            <div
              className={`flashcard-inner ${isFlipped ? 'flipped' : ''} ${
                swipeState === 'left' ? 'swipe-left' : swipeState === 'right' ? 'swipe-right' : ''
              }`}
              onClick={handleFlip}
            >
              {/* Mặt trước (Front) */}
              <div className="flashcard-face front">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      background: 'rgba(99, 102, 241, 0.2)',
                      color: 'var(--accent-primary)',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    Bài {currentWord?.lessonId}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Chạm thẻ để lật</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div
                    className="jp-font"
                    style={{
                      fontSize: currentWord?.kanji ? '46px' : '38px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '1px'
                    }}
                  >
                    {currentWord?.kanji || currentWord?.kana}
                  </div>

                  {currentWord?.hanViet && (
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 800,
                        color: 'var(--accent-gold)',
                        background: 'rgba(245, 158, 11, 0.15)',
                        padding: '3px 12px',
                        borderRadius: 'var(--radius-full)',
                        letterSpacing: '1px'
                      }}
                    >
                      Hán Việt: {currentWord.hanViet}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '12px' }}>
                  <RotateCw size={14} /> Chạm để xem nghĩa & Furigana
                </div>
              </div>

              {/* Mặt sau (Back) */}
              <div className="flashcard-face back">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="jp-font" style={{ fontSize: '16px', color: 'var(--accent-primary)', fontWeight: 700 }}>
                    {currentWord?.kana}
                  </span>
                  <button
                    onClick={speakCurrent}
                    style={{
                      background: 'var(--accent-primary)',
                      border: 'none',
                      color: '#fff',
                      padding: '6px',
                      borderRadius: 'var(--radius-full)',
                      cursor: 'pointer'
                    }}
                    title="Phát âm"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {currentWord?.meaning}
                  </div>

                  {currentWord?.exampleJp && (
                    <div
                      style={{
                        marginTop: '8px',
                        padding: '10px 14px',
                        background: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: 'var(--radius-sm)',
                        textAlign: 'left'
                      }}
                    >
                      <div className="jp-font" style={{ fontSize: '13px', color: '#e2e8f0', fontWeight: 500 }}>
                        {currentWord.exampleJp}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {currentWord.exampleVi}
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Vuốt Trái ✕: Chưa nhớ | Vuốt Phải ✓: Đã thuộc
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
            {/* Fail button (Swipe Left) */}
            <button
              onClick={() => handleSwipe('left')}
              style={{
                width: '54px',
                height: '54px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '2px solid rgba(239, 68, 68, 0.4)',
                color: 'var(--accent-ruby)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.15s ease'
              }}
              title="Chưa nhớ (Vuốt trái)"
            >
              <X size={24} />
            </button>

            {/* Flip button */}
            <button
              onClick={handleFlip}
              style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Lật thẻ"
            >
              <RotateCw size={20} />
            </button>

            {/* Speaker button */}
            <button
              onClick={speakCurrent}
              style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Nghe phát âm"
            >
              <Volume2 size={20} />
            </button>

            {/* Success button (Swipe Right) */}
            <button
              onClick={() => handleSwipe('right')}
              style={{
                width: '54px',
                height: '54px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '2px solid rgba(16, 185, 129, 0.4)',
                color: 'var(--accent-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.15s ease'
              }}
              title="Đã thuộc (Vuốt phải)"
            >
              <Check size={24} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { UserProfile, JLPTLevel, KanjiItem, KanjiExerciseQuestion } from '../../types';
import { KANJI_N5_LIST } from '../../data/kanjiN5';
import { KANJI_N4_LIST } from '../../data/kanjiN4';
import { KANJI_N5_LESSONS, KANJI_N4_LESSONS, generateKanjiExercises } from '../../data/kanjiLessons';
import { KanjiDetailModal } from './KanjiDetailModal';
import { KanjiPracticeModal } from './KanjiPracticeModal';
import { Search, BookOpen, Dumbbell, Sparkles, CheckCircle, ChevronRight, Award, Play } from 'lucide-react';
import { soundEffects } from '../../services/soundEffects';
import { storageService } from '../../services/storageService';

interface KanjiCatalogProps {
  activeProfile: UserProfile;
  currentLevel: JLPTLevel;
}

export const KanjiCatalog: React.FC<KanjiCatalogProps> = ({
  activeProfile,
  currentLevel
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'lessons' | 'lookup'>('lessons');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null);

  // Practice modal state
  const [practiceSession, setPracticeSession] = useState<{
    title: string;
    questions: KanjiExerciseQuestion[];
  } | null>(null);

  const kanjiList = currentLevel === 'N5' ? KANJI_N5_LIST : KANJI_N4_LIST;
  const kanjiLessons = currentLevel === 'N5' ? KANJI_N5_LESSONS : KANJI_N4_LESSONS;

  const filtered = kanjiList.filter((k) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    return (
      k.character.includes(term) ||
      k.hanViet.toLowerCase().includes(term) ||
      k.meaning.toLowerCase().includes(term) ||
      k.onyomi.some((on) => on.toLowerCase().includes(term)) ||
      k.kunyomi.some((kun) => kun.toLowerCase().includes(term))
    );
  });

  // Start practice for a specific lesson
  const handleStartLessonPractice = (lessonChars: string[], lessonTitle: string) => {
    soundEffects.playVictory();
    const lessonKanjiItems = kanjiList.filter((k) => lessonChars.includes(k.character));
    const questions = generateKanjiExercises(lessonKanjiItems, 10);
    setPracticeSession({
      title: lessonTitle,
      questions
    });
  };

  // Start comprehensive practice across all learned Kanji
  const handleStartComprehensivePractice = () => {
    soundEffects.playVictory();
    const questions = generateKanjiExercises(kanjiList, 12);
    setPracticeSession({
      title: `Tổng Hợp Bài Tập Kanji ${currentLevel}`,
      questions
    });
  };

  const handlePracticeCompleted = (score: number, total: number, masteredChars: string[]) => {
    // Record mastered kanji
    const currentMastered = activeProfile.masteredKanjiIds || [];
    const updatedMastered = [...new Set([...currentMastered, ...masteredChars])];

    const updatedProfile: UserProfile = {
      ...activeProfile,
      masteredKanjiIds: updatedMastered
    };
    storageService.updateProfile(updatedProfile);
  };

  const masteredKanjiCount = (activeProfile.masteredKanjiIds || []).filter((char) =>
    kanjiList.some((k) => k.character === char)
  ).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Header */}
      <div>
        <h2 style={{ fontSize: '18px', fontWeight: 800 }}>Học & Luyện Tập Kanji ({currentLevel})</h2>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          Học theo cụm chủ đề + làm bài tập kiểm tra phản xạ tức thì
        </p>
      </div>

      {/* Sub tabs: Bài học + Bài tập VS Tra cứu */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          background: 'var(--bg-elevated)',
          padding: '4px',
          borderRadius: 'var(--radius-md)',
          gap: '4px'
        }}
      >
        <button
          onClick={() => {
            soundEffects.playFlip();
            setActiveSubTab('lessons');
          }}
          style={{
            padding: '8px 12px',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            background: activeSubTab === 'lessons' ? 'var(--accent-primary)' : 'transparent',
            color: activeSubTab === 'lessons' ? '#fff' : 'var(--text-secondary)',
            fontSize: '12px',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          <BookOpen size={15} /> Bài Học & Bài Tập
        </button>

        <button
          onClick={() => {
            soundEffects.playFlip();
            setActiveSubTab('lookup');
          }}
          style={{
            padding: '8px 12px',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            background: activeSubTab === 'lookup' ? 'var(--accent-primary)' : 'transparent',
            color: activeSubTab === 'lookup' ? '#fff' : 'var(--text-secondary)',
            fontSize: '12px',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          <Search size={15} /> Tra Cứu ({kanjiList.length})
        </button>
      </div>

      {/* TAB 1: BÀI HỌC VÀ BÀI TẬP KANJI */}
      {activeSubTab === 'lessons' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Quick Practice Banner */}
          <div
            className="glass-panel"
            style={{
              padding: '16px',
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(99, 102, 241, 0.15) 100%)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Dumbbell size={18} color="var(--accent-gold)" />
                <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Luyện Tập Tổng Hợp {currentLevel}
                </span>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--accent-emerald)', fontWeight: 800 }}>
                Đã nhớ: {masteredKanjiCount}/{kanjiList.length} chữ
              </span>
            </div>

            <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
              Luyện ngẫu nhiên 12 câu hỏi trắc nghiệm (âm Hán Việt, từ ghép và nghĩa) để củng cố phản xạ ghi nhớ sâu.
            </p>

            <button
              onClick={handleStartComprehensivePractice}
              className="btn-primary"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)',
                padding: '10px'
              }}
            >
              <Play size={15} fill="currentColor" />
              Làm bài tập tổng hợp ngay
            </button>
          </div>

          {/* Lessons List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {kanjiLessons.map((lesson) => {
              const lessonKanjiItems = kanjiList.filter((k) =>
                lesson.kanjiCharacters.includes(k.character)
              );

              return (
                <div
                  key={lesson.id}
                  className="glass-panel"
                  style={{
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {lesson.title}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {lesson.subtitle}
                      </div>
                    </div>

                    <button
                      onClick={() => handleStartLessonPractice(lesson.kanjiCharacters, lesson.title)}
                      style={{
                        background: 'rgba(99, 102, 241, 0.15)',
                        border: '1px solid var(--accent-primary)',
                        color: 'var(--accent-primary)',
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '11px',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Dumbbell size={13} /> Làm bài tập
                    </button>
                  </div>

                  {/* Character chips in this lesson */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {lessonKanjiItems.map((k) => (
                      <button
                        key={k.id}
                        onClick={() => {
                          soundEffects.playFlip();
                          setSelectedKanji(k);
                        }}
                        style={{
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '10px',
                          padding: '6px 10px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '2px',
                          cursor: 'pointer',
                          minWidth: '46px'
                        }}
                        title={`Xem chi tiết chữ ${k.character} (${k.hanViet})`}
                      >
                        <span className="jp-font" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                          {k.character}
                        </span>
                        <span style={{ fontSize: '9px', fontWeight: 800, color: 'var(--accent-gold)' }}>
                          {k.hanViet}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: TRA CỨU TOÀN BỘ KHO KANJI */}
      {activeSubTab === 'lookup' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Search Input */}
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Tìm theo chữ Hán, Hán Việt (vd: NHẬT), nghĩa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 40px',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--text-primary)',
                fontSize: '13px',
                outline: 'none'
              }}
            />
            <Search
              size={16}
              color="var(--text-muted)"
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
            />
          </div>

          {/* Kanji Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {filtered.map((kanji) => (
              <div
                key={kanji.id}
                onClick={() => {
                  soundEffects.playFlip();
                  setSelectedKanji(kanji);
                }}
                className="glass-panel"
                style={{
                  padding: '14px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.15s ease',
                  textAlign: 'center'
                }}
              >
                <div className="jp-font" style={{ fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1 }}>
                  {kanji.character}
                </div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent-gold)', marginTop: '4px' }}>
                  {kanji.hanViet}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {kanji.meaning}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)', fontSize: '13px' }}>
              Không tìm thấy Kanji nào phù hợp với "{searchTerm}"
            </div>
          )}
        </div>
      )}

      {/* Detail Modal */}
      {selectedKanji && (
        <KanjiDetailModal
          kanji={selectedKanji}
          activeProfile={activeProfile}
          onClose={() => setSelectedKanji(null)}
        />
      )}

      {/* Practice Quiz Modal */}
      {practiceSession && (
        <KanjiPracticeModal
          title={practiceSession.title}
          questions={practiceSession.questions}
          activeProfile={activeProfile}
          onClose={() => setPracticeSession(null)}
          onCompleted={handlePracticeCompleted}
        />
      )}
    </div>
  );
};

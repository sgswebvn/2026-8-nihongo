import React, { useState, useEffect } from 'react';
import { UserProfile, JLPTLevel, ActiveTab, Lesson, MilestoneExam, ExamScorecard } from './types';
import { storageService } from './services/storageService';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { DashboardView } from './components/home/DashboardView';
import { LessonsCatalog } from './components/lessons/LessonsCatalog';
import { LessonDetailModal } from './components/lessons/LessonDetailModal';
import { FlashcardView } from './components/flashcard/FlashcardView';
import { KanjiCatalog } from './components/kanji/KanjiCatalog';
import { TeamLeaderboard } from './components/social/TeamLeaderboard';
import { BossExamModal } from './components/exam/BossExamModal';
import { MistakeNotebookModal } from './components/exam/MistakeNotebookModal';
import { ExamHistoryModal } from './components/exam/ExamHistoryModal';
import { ProfileManagerModal } from './components/profile/ProfileManagerModal';
import { MILESTONE_EXAMS } from './data/milestoneExams';
import { soundEffects } from './services/soundEffects';

export function App() {
  const [activeProfile, setActiveProfile] = useState<UserProfile>(() =>
    storageService.getActiveProfile()
  );
  const [allProfiles, setAllProfiles] = useState<UserProfile[]>(() =>
    storageService.getProfiles()
  );
  const [currentLevel, setCurrentLevel] = useState<JLPTLevel>(activeProfile.currentLevel || 'N5');
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  // Modals state
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeExam, setActiveExam] = useState<MilestoneExam | null>(null);
  const [isMistakeBankOpen, setIsMistakeBankOpen] = useState(false);
  const [isExamHistoryOpen, setIsExamHistoryOpen] = useState(false);
  const [isProfileManagerOpen, setIsProfileManagerOpen] = useState(false);

  // Flashcard direct navigation state
  const [flashcardLessonFilter, setFlashcardLessonFilter] = useState<number | undefined>(undefined);
  const [flashcardMistakeOnly, setFlashcardMistakeOnly] = useState<boolean>(false);

  // Dark/Light Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(activeProfile.settings.darkMode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const refreshProfiles = () => {
    const profiles = storageService.getProfiles();
    setAllProfiles(profiles);
    const curr = storageService.getActiveProfile();
    setActiveProfile(curr);
  };

  const handleLevelChange = (lvl: JLPTLevel) => {
    soundEffects.playFlip();
    setCurrentLevel(lvl);
    const updated = { ...activeProfile, currentLevel: lvl };
    storageService.updateProfile(updated);
    setActiveProfile(updated);
  };

  const handleToggleTheme = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    const updated = {
      ...activeProfile,
      settings: { ...activeProfile.settings, darkMode: nextTheme }
    };
    storageService.updateProfile(updated);
    setActiveProfile(updated);
  };

  const handleRecordWordMastery = (wordId: string, mastered: boolean) => {
    const updated = storageService.recordWordMastery(activeProfile.id, wordId, mastered);
    setActiveProfile(updated);
    refreshProfiles();
  };

  const handlePracticeLessonFlashcard = (lessonId: number) => {
    setSelectedLesson(null);
    setFlashcardLessonFilter(lessonId);
    setFlashcardMistakeOnly(false);
    setActiveTab('flashcard');
  };

  const handleDrillMistakesInFlashcard = () => {
    setIsMistakeBankOpen(false);
    setFlashcardLessonFilter(undefined);
    setFlashcardMistakeOnly(true);
    setActiveTab('flashcard');
  };

  const handleOpenExam = (examId: string) => {
    const found = MILESTONE_EXAMS.find((e) => e.id === examId);
    if (found) {
      setActiveExam(found);
    }
  };

  const handleExamCompleted = (scorecard: ExamScorecard, newlyUnlockedStage?: number) => {
    refreshProfiles();
  };

  const handleResolveMistake = (mistakeId: string) => {
    storageService.resolveMistake(activeProfile.id, mistakeId);
    refreshProfiles();
  };

  const unresolvedMistakesCount = activeProfile.mistakeBank.filter((m) => !m.resolved).length;

  return (
    <div className="mobile-viewport">
      {/* Top Header */}
      <Header
        activeProfile={activeProfile}
        currentLevel={currentLevel}
        onLevelChange={handleLevelChange}
        onOpenProfileManager={() => setIsProfileManagerOpen(true)}
        onToggleTheme={handleToggleTheme}
        isDarkMode={isDarkMode}
      />

      {/* Main Scrollable Content */}
      <main className="main-content">
        {activeTab === 'home' && (
          <DashboardView
            activeProfile={activeProfile}
            allProfiles={allProfiles}
            currentLevel={currentLevel}
            onNavigate={(tab) => {
              soundEffects.playFlip();
              setActiveTab(tab);
            }}
            onOpenExam={handleOpenExam}
            onOpenMistakeBank={() => setIsMistakeBankOpen(true)}
          />
        )}

        {activeTab === 'lessons' && (
          <LessonsCatalog
            activeProfile={activeProfile}
            currentLevel={currentLevel}
            onSelectLesson={(lesson) => setSelectedLesson(lesson)}
            onOpenExam={handleOpenExam}
          />
        )}

        {activeTab === 'flashcard' && (
          <FlashcardView
            activeProfile={activeProfile}
            currentLevel={currentLevel}
            filterLessonId={flashcardLessonFilter}
            initialMistakeOnly={flashcardMistakeOnly}
            onClearFilter={() => {
              setFlashcardLessonFilter(undefined);
              setFlashcardMistakeOnly(false);
            }}
            onRecordWordMastery={handleRecordWordMastery}
          />
        )}

        {activeTab === 'kanji' && (
          <KanjiCatalog
            activeProfile={activeProfile}
            currentLevel={currentLevel}
          />
        )}

        {activeTab === 'team' && (
          <TeamLeaderboard
            activeProfile={activeProfile}
            allProfiles={allProfiles}
            currentLevel={currentLevel}
            onOpenMistakeBank={() => setIsMistakeBankOpen(true)}
            onOpenExamHistory={() => setIsExamHistoryOpen(true)}
            onOpenProfileManager={() => setIsProfileManagerOpen(true)}
          />
        )}
      </main>

      {/* Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          soundEffects.playFlip();
          setActiveTab(tab);
        }}
        mistakeCount={unresolvedMistakesCount}
      />

      {/* Modals & Dialogs */}
      {selectedLesson && (
        <LessonDetailModal
          lesson={selectedLesson}
          activeProfile={activeProfile}
          onClose={() => setSelectedLesson(null)}
          onToggleWordMastery={(wordId, currentStatus) =>
            handleRecordWordMastery(wordId, !currentStatus)
          }
          onPracticeLessonFlashcard={handlePracticeLessonFlashcard}
        />
      )}

      {activeExam && (
        <BossExamModal
          exam={activeExam}
          activeProfile={activeProfile}
          onClose={() => setActiveExam(null)}
          onExamCompleted={handleExamCompleted}
        />
      )}

      {isMistakeBankOpen && (
        <MistakeNotebookModal
          activeProfile={activeProfile}
          onClose={() => setIsMistakeBankOpen(false)}
          onResolveMistake={handleResolveMistake}
          onDrillMistakesInFlashcard={handleDrillMistakesInFlashcard}
        />
      )}

      {isExamHistoryOpen && (
        <ExamHistoryModal
          activeProfile={activeProfile}
          onClose={() => setIsExamHistoryOpen(false)}
        />
      )}

      {isProfileManagerOpen && (
        <ProfileManagerModal
          activeProfile={activeProfile}
          allProfiles={allProfiles}
          onClose={() => setIsProfileManagerOpen(false)}
          onProfileSwitched={(p) => {
            setActiveProfile(p);
            setCurrentLevel(p.currentLevel);
            refreshProfiles();
          }}
          onProfilesUpdated={refreshProfiles}
        />
      )}
    </div>
  );
}

export default App;

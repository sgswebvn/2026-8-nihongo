import { UserProfile, JLPTLevel, ExamScorecard, MistakeItem } from '../types';
import { MINNA_N5_WORDS } from '../data/minnaN5';
import { MINNA_N4_WORDS } from '../data/minnaN4';
import { JLPT_N2_WORDS } from '../data/jlptN2';
import { KANJI_N5_LIST } from '../data/kanjiN5';
import { KANJI_N4_LIST } from '../data/kanjiN4';
import { KANJI_N2_LIST } from '../data/kanjiN2';

const STORAGE_KEY_PROFILES = 'nihon_study_profiles_v1';
const STORAGE_KEY_ACTIVE_ID = 'nihon_study_active_profile_id';

const ALL_WORD_IDS = [
  ...MINNA_N5_WORDS.map((w) => w.id),
  ...MINNA_N4_WORDS.map((w) => w.id),
  ...JLPT_N2_WORDS.map((w) => w.id)
];

const ALL_KANJI_IDS = [
  ...KANJI_N5_LIST.map((k) => k.character),
  ...KANJI_N4_LIST.map((k) => k.character),
  ...KANJI_N2_LIST.map((k) => k.character)
];

const ALL_LESSONS = Array.from({ length: 60 }, (_, i) => i + 1);
const ALL_STAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const ALL_KANJI_LESSONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const PROFILE_TIEN: UserProfile = {
  id: 'user_tien',
  name: 'Tiến',
  avatar: '🦁',
  createdAt: new Date().toISOString(),
  currentLevel: 'N2',
  currentLesson: 60,
  streak: 28,
  lastActiveDate: new Date().toISOString().split('T')[0],
  unlockedStages: ALL_STAGES,
  completedLessons: ALL_LESSONS,
  masteredWordIds: ALL_WORD_IDS,
  learningWordIds: [],
  masteredKanjiIds: ALL_KANJI_IDS,
  completedKanjiLessons: ALL_KANJI_LESSONS,
  mistakeBank: [],
  examHistory: [
    {
      id: 'hist_tien_1',
      examId: 'exam_stage_1',
      stageId: 1,
      level: 'N5',
      examTitle: 'Boss Exam 1: Vượt Cột Mốc Nhập Môn (Bài 1 - 5)',
      score: 10,
      totalQuestions: 10,
      percentage: 100,
      passed: true,
      timeSpentSeconds: 120,
      completedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
      mistakeWordIds: []
    },
    {
      id: 'hist_tien_5',
      examId: 'exam_stage_5',
      stageId: 5,
      level: 'N5',
      examTitle: 'Boss Exam 5: ĐẠI CHIẾN TỔNG KẾT N5 MOCK EXAM (Bài 21 - 25)',
      score: 15,
      totalQuestions: 15,
      percentage: 100,
      passed: true,
      timeSpentSeconds: 240,
      completedAt: new Date(Date.now() - 86400000 * 4).toISOString(),
      mistakeWordIds: []
    },
    {
      id: 'hist_tien_10',
      examId: 'exam_stage_10',
      stageId: 10,
      level: 'N4',
      examTitle: 'Boss Exam 10: TỔNG KẾT TOÀN DIỆN MINNA N4 (Bài 46 - 50)',
      score: 15,
      totalQuestions: 15,
      percentage: 100,
      passed: true,
      timeSpentSeconds: 280,
      completedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      mistakeWordIds: []
    },
    {
      id: 'hist_tien_12',
      examId: 'exam_stage_12',
      stageId: 12,
      level: 'N2',
      examTitle: 'Boss Exam 12: ĐẠI CHIẾN TỔNG LỰC JLPT N2 CHUYÊN SÂU (Bài 56 - 60)',
      score: 15,
      totalQuestions: 15,
      percentage: 100,
      passed: true,
      timeSpentSeconds: 310,
      completedAt: new Date().toISOString(),
      mistakeWordIds: []
    }
  ],
  settings: {
    soundEnabled: true,
    speechRate: 0.9,
    autoPlayAudio: true,
    gatekeeperEnabled: false,
    darkMode: false
  }
};

export const PROFILE_HIEU: UserProfile = {
  id: 'user_hieu',
  name: 'Hiếu',
  avatar: '🐯',
  createdAt: new Date().toISOString(),
  currentLevel: 'N2',
  currentLesson: 60,
  streak: 35,
  lastActiveDate: new Date().toISOString().split('T')[0],
  unlockedStages: ALL_STAGES,
  completedLessons: ALL_LESSONS,
  masteredWordIds: ALL_WORD_IDS,
  learningWordIds: [],
  masteredKanjiIds: ALL_KANJI_IDS,
  completedKanjiLessons: ALL_KANJI_LESSONS,
  mistakeBank: [],
  examHistory: [
    {
      id: 'hist_hieu_1',
      examId: 'exam_stage_1',
      stageId: 1,
      level: 'N5',
      examTitle: 'Boss Exam 1: Vượt Cột Mốc Nhập Môn (Bài 1 - 5)',
      score: 10,
      totalQuestions: 10,
      percentage: 100,
      passed: true,
      timeSpentSeconds: 110,
      completedAt: new Date(Date.now() - 86400000 * 6).toISOString(),
      mistakeWordIds: []
    },
    {
      id: 'hist_hieu_5',
      examId: 'exam_stage_5',
      stageId: 5,
      level: 'N5',
      examTitle: 'Boss Exam 5: ĐẠI CHIẾN TỔNG KẾT N5 MOCK EXAM (Bài 21 - 25)',
      score: 15,
      totalQuestions: 15,
      percentage: 100,
      passed: true,
      timeSpentSeconds: 230,
      completedAt: new Date(Date.now() - 86400000 * 4).toISOString(),
      mistakeWordIds: []
    },
    {
      id: 'hist_hieu_10',
      examId: 'exam_stage_10',
      stageId: 10,
      level: 'N4',
      examTitle: 'Boss Exam 10: TỔNG KẾT TOÀN DIỆN MINNA N4 (Bài 46 - 50)',
      score: 15,
      totalQuestions: 15,
      percentage: 100,
      passed: true,
      timeSpentSeconds: 260,
      completedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
      mistakeWordIds: []
    },
    {
      id: 'hist_hieu_12',
      examId: 'exam_stage_12',
      stageId: 12,
      level: 'N2',
      examTitle: 'Boss Exam 12: ĐẠI CHIẾN TỔNG LỰC JLPT N2 CHUYÊN SÂU (Bài 56 - 60)',
      score: 15,
      totalQuestions: 15,
      percentage: 100,
      passed: true,
      timeSpentSeconds: 295,
      completedAt: new Date().toISOString(),
      mistakeWordIds: []
    }
  ],
  settings: {
    soundEnabled: true,
    speechRate: 0.9,
    autoPlayAudio: true,
    gatekeeperEnabled: false,
    darkMode: false
  }
};

const DEFAULT_PROFILES: UserProfile[] = [
  {
    id: 'user_1',
    name: 'An (Thành viên 1)',
    avatar: '🦊',
    createdAt: new Date().toISOString(),
    currentLevel: 'N5',
    currentLesson: 1,
    streak: 3,
    lastActiveDate: new Date().toISOString().split('T')[0],
    unlockedStages: [1],
    completedLessons: [1],
    masteredWordIds: ['w5_1_1', 'w5_1_2', 'w5_1_3'],
    learningWordIds: ['w5_1_4', 'w5_1_5'],
    mistakeBank: [],
    examHistory: [],
    settings: {
      soundEnabled: true,
      speechRate: 0.9,
      autoPlayAudio: true,
      gatekeeperEnabled: true,
      darkMode: false
    }
  },
  {
    id: 'user_2',
    name: 'Bình (Thành viên 2)',
    avatar: '🐼',
    createdAt: new Date().toISOString(),
    currentLevel: 'N5',
    currentLesson: 1,
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    unlockedStages: [1],
    completedLessons: [],
    masteredWordIds: ['w5_1_1'],
    learningWordIds: ['w5_1_2'],
    mistakeBank: [],
    examHistory: [],
    settings: {
      soundEnabled: true,
      speechRate: 0.9,
      autoPlayAudio: true,
      gatekeeperEnabled: true,
      darkMode: false
    }
  },
  {
    id: 'user_3',
    name: 'Chi (Thành viên 3)',
    avatar: '🐱',
    createdAt: new Date().toISOString(),
    currentLevel: 'N5',
    currentLesson: 1,
    streak: 5,
    lastActiveDate: new Date().toISOString().split('T')[0],
    unlockedStages: [1, 2],
    completedLessons: [1, 2, 3, 4, 5],
    masteredWordIds: ['w5_1_1', 'w5_1_2', 'w5_1_3', 'w5_2_1', 'w5_2_2'],
    learningWordIds: ['w5_3_1'],
    mistakeBank: [],
    examHistory: [
      {
        id: 'hist_sample_1',
        examId: 'exam_stage_1',
        stageId: 1,
        level: 'N5',
        examTitle: 'Boss Exam 1: Vượt Cột Mốc Nhập Môn (Bài 1 - 5)',
        score: 9,
        totalQuestions: 10,
        percentage: 90,
        passed: true,
        timeSpentSeconds: 145,
        completedAt: new Date(Date.now() - 86400000).toISOString(),
        mistakeWordIds: ['w5_2_5']
      }
    ],
    settings: {
      soundEnabled: true,
      speechRate: 0.9,
      autoPlayAudio: true,
      gatekeeperEnabled: true,
      darkMode: false
    }
  },
  PROFILE_TIEN,
  PROFILE_HIEU
];

export const storageService = {
  // Load all profiles
  getProfiles(): UserProfile[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY_PROFILES);
      if (data) {
        let profiles: UserProfile[] = JSON.parse(data);
        let updated = false;

        // Ensure Tien profile exists and has full unlock
        if (!profiles.some((p) => p.id === 'user_tien')) {
          profiles.push(PROFILE_TIEN);
          updated = true;
        } else {
          const tien = profiles.find((p) => p.id === 'user_tien');
          if (tien && (!tien.unlockedStages?.includes(12) || tien.unlockedStages?.length < 12)) {
            tien.unlockedStages = ALL_STAGES;
            tien.completedLessons = ALL_LESSONS;
            tien.masteredWordIds = ALL_WORD_IDS;
            tien.masteredKanjiIds = ALL_KANJI_IDS;
            tien.completedKanjiLessons = ALL_KANJI_LESSONS;
            tien.settings.gatekeeperEnabled = false;
            updated = true;
          }
        }

        // Ensure Hieu profile exists and has full unlock
        if (!profiles.some((p) => p.id === 'user_hieu')) {
          profiles.push(PROFILE_HIEU);
          updated = true;
        } else {
          const hieu = profiles.find((p) => p.id === 'user_hieu');
          if (hieu && (!hieu.unlockedStages?.includes(12) || hieu.unlockedStages?.length < 12)) {
            hieu.unlockedStages = ALL_STAGES;
            hieu.completedLessons = ALL_LESSONS;
            hieu.masteredWordIds = ALL_WORD_IDS;
            hieu.masteredKanjiIds = ALL_KANJI_IDS;
            hieu.completedKanjiLessons = ALL_KANJI_LESSONS;
            hieu.settings.gatekeeperEnabled = false;
            updated = true;
          }
        }

        if (updated) {
          this.saveProfiles(profiles);
        }
        return profiles;
      }
    } catch (e) {
      console.error('Error reading profiles from localStorage', e);
    }
    this.saveProfiles(DEFAULT_PROFILES);
    return DEFAULT_PROFILES;
  },

  // Save all profiles
  saveProfiles(profiles: UserProfile[]): void {
    try {
      localStorage.setItem(STORAGE_KEY_PROFILES, JSON.stringify(profiles));
    } catch (e) {
      console.error('Error saving profiles', e);
    }
  },

  // Get active profile ID
  getActiveProfileId(): string {
    const id = localStorage.getItem(STORAGE_KEY_ACTIVE_ID);
    if (id) return id;
    const profiles = this.getProfiles();
    const defaultId = profiles[0]?.id || 'user_1';
    this.setActiveProfileId(defaultId);
    return defaultId;
  },

  // Set active profile ID
  setActiveProfileId(id: string): void {
    localStorage.setItem(STORAGE_KEY_ACTIVE_ID, id);
  },

  // Get current active profile
  getActiveProfile(): UserProfile {
    const profiles = this.getProfiles();
    const activeId = this.getActiveProfileId();
    const found = profiles.find((p) => p.id === activeId);
    if (found) {
      return this.checkAndUpdateStreak(found);
    }
    return profiles[0] || DEFAULT_PROFILES[0];
  },

  // Update a specific profile
  updateProfile(updated: UserProfile): void {
    const profiles = this.getProfiles();
    const idx = profiles.findIndex((p) => p.id === updated.id);
    if (idx !== -1) {
      profiles[idx] = updated;
    } else {
      profiles.push(updated);
    }
    this.saveProfiles(profiles);
  },

  // Create new profile
  createProfile(name: string, avatar: string, pin?: string): UserProfile {
    const newProfile: UserProfile = {
      id: 'user_' + Date.now(),
      name,
      avatar: avatar || '🌸',
      pin,
      createdAt: new Date().toISOString(),
      currentLevel: 'N5',
      currentLesson: 1,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      unlockedStages: [1],
      completedLessons: [],
      masteredWordIds: [],
      learningWordIds: [],
      mistakeBank: [],
      examHistory: [],
      settings: {
        soundEnabled: true,
        speechRate: 0.9,
        autoPlayAudio: true,
        gatekeeperEnabled: true,
        darkMode: false
      }
    };
    const profiles = this.getProfiles();
    profiles.push(newProfile);
    this.saveProfiles(profiles);
    this.setActiveProfileId(newProfile.id);
    return newProfile;
  },

  // Check & update daily streak
  checkAndUpdateStreak(profile: UserProfile): UserProfile {
    const today = new Date().toISOString().split('T')[0];
    if (profile.lastActiveDate === today) {
      return profile;
    }

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    let newStreak = profile.streak;

    if (profile.lastActiveDate === yesterday) {
      newStreak += 1;
    } else if (profile.lastActiveDate < yesterday) {
      newStreak = 1;
    }

    const updated = {
      ...profile,
      streak: newStreak,
      lastActiveDate: today
    };
    this.updateProfile(updated);
    return updated;
  },

  // Record word mastery status
  recordWordMastery(profileId: string, wordId: string, mastered: boolean): UserProfile {
    const profiles = this.getProfiles();
    const profile = profiles.find((p) => p.id === profileId);
    if (!profile) return this.getActiveProfile();

    let masteredList = [...profile.masteredWordIds];
    let learningList = [...profile.learningWordIds];

    if (mastered) {
      if (!masteredList.includes(wordId)) masteredList.push(wordId);
      learningList = learningList.filter((id) => id !== wordId);
    } else {
      if (!learningList.includes(wordId)) learningList.push(wordId);
      masteredList = masteredList.filter((id) => id !== wordId);
    }

    const updated: UserProfile = {
      ...profile,
      masteredWordIds: masteredList,
      learningWordIds: learningList
    };
    this.updateProfile(updated);
    return updated;
  },

  // Add mistakes to Mistake Bank
  recordExamMistakes(profileId: string, mistakes: { wordId: string; question: string; userAnswer: string; correctAnswer: string }[]): void {
    const profiles = this.getProfiles();
    const profile = profiles.find((p) => p.id === profileId);
    if (!profile) return;

    const mistakeBank = [...profile.mistakeBank];
    const now = new Date().toISOString();

    mistakes.forEach((m) => {
      const existing = mistakeBank.find((item) => item.wordId === m.wordId);
      if (existing) {
        existing.failedCount += 1;
        existing.resolved = false;
        existing.lastFailedAt = now;
        existing.userAnswer = m.userAnswer;
      } else {
        mistakeBank.push({
          id: 'mistake_' + Date.now() + '_' + Math.random().toString(36).substring(2, 5),
          wordId: m.wordId,
          question: m.question,
          userAnswer: m.userAnswer,
          correctAnswer: m.correctAnswer,
          failedCount: 1,
          resolved: false,
          lastFailedAt: now
        });
      }
    });

    profile.mistakeBank = mistakeBank;
    this.updateProfile(profile);
  },

  // Resolve a mistake in the Mistake Bank
  resolveMistake(profileId: string, mistakeId: string): void {
    const profiles = this.getProfiles();
    const profile = profiles.find((p) => p.id === profileId);
    if (!profile) return;

    profile.mistakeBank = profile.mistakeBank.map((m) =>
      m.id === mistakeId ? { ...m, resolved: true } : m
    );
    this.updateProfile(profile);
  },

  // Record exam result & handle Gatekeeper unlocking
  recordExamResult(profileId: string, scorecard: ExamScorecard): { updatedProfile: UserProfile; newlyUnlockedStage?: number } {
    const profiles = this.getProfiles();
    const profile = profiles.find((p) => p.id === profileId);
    if (!profile) return { updatedProfile: this.getActiveProfile() };

    let unlockedStages = [...profile.unlockedStages];
    let newlyUnlockedStage: number | undefined;

    // Gatekeeper logic: If passed (>= 80%), unlock next stage
    if (scorecard.passed) {
      const nextStage = scorecard.stageId + 1;
      if (nextStage <= 12 && !unlockedStages.includes(nextStage)) {
        unlockedStages.push(nextStage);
        newlyUnlockedStage = nextStage;
      }
    }

    const updatedProfile: UserProfile = {
      ...profile,
      unlockedStages,
      examHistory: [scorecard, ...profile.examHistory]
    };

    this.updateProfile(updatedProfile);
    return { updatedProfile, newlyUnlockedStage };
  },

  // Export full JSON backup
  exportBackup(): string {
    const payload = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      activeProfileId: this.getActiveProfileId(),
      profiles: this.getProfiles()
    };
    return JSON.stringify(payload, null, 2);
  },

  // Import JSON backup
  importBackup(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && Array.isArray(parsed.profiles) && parsed.profiles.length > 0) {
        this.saveProfiles(parsed.profiles);
        if (parsed.activeProfileId) {
          this.setActiveProfileId(parsed.activeProfileId);
        }
        return true;
      }
    } catch (e) {
      console.error('Import error', e);
    }
    return false;
  }
};

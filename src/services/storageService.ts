import { UserProfile, JLPTLevel, ExamScorecard, MistakeItem } from '../types';

const STORAGE_KEY_PROFILES = 'nihon_study_profiles_v1';
const STORAGE_KEY_ACTIVE_ID = 'nihon_study_active_profile_id';

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
  }
];

export const storageService = {
  // Load all profiles
  getProfiles(): UserProfile[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY_PROFILES);
      if (data) {
        return JSON.parse(data);
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
      if (nextStage <= 10 && !unlockedStages.includes(nextStage)) {
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

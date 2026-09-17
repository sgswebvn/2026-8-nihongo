export type JLPTLevel = 'N5' | 'N4' | 'N2';

export interface JapaneseWord {
  id: string;
  lessonId: number; // 1 - 50
  level: JLPTLevel;
  kanji: string;
  kana: string; // Furigana / Hiragana
  romaji?: string;
  hanViet: string; // Âm Hán Việt
  meaning: string; // Nghĩa tiếng Việt
  partOfSpeech: 'noun' | 'verb1' | 'verb2' | 'verb3' | 'adj-i' | 'adj-na' | 'adverb' | 'particle' | 'phrase';
  exampleJp?: string;
  exampleKana?: string;
  exampleVi?: string;
}

export interface KanjiItem {
  id: string;
  level: JLPTLevel;
  character: string;
  hanViet: string;
  meaning: string;
  onyomi: string[];
  kunyomi: string[];
  strokes: number;
  grade?: number;
  compounds: {
    word: string;
    reading: string;
    hanViet: string;
    meaning: string;
  }[];
}

export interface Lesson {
  id: number; // 1 to 50
  level: JLPTLevel;
  title: string;
  description: string;
  stageId: number; // 1 to 10 (each 5 lessons is 1 stage)
  grammarPoints?: string[];
}

export interface ExamQuestion {
  id: string;
  question: string;
  subText?: string;
  type: 'word-to-meaning' | 'meaning-to-word' | 'kanji-reading' | 'sentence-fill' | 'han-viet';
  options: string[];
  correctIndex: number;
  explanation?: string;
  wordId?: string; // Links back to word for mistake bank
}

export interface MilestoneExam {
  id: string;
  stageId: number; // 1 to 10
  level: JLPTLevel;
  title: string;
  subtitle: string;
  lessonRange: [number, number]; // e.g. [1, 5]
  timeLimitSeconds: number; // e.g. 300s (5 mins)
  minPassScore: number; // e.g. 80 (%)
  questions: ExamQuestion[];
}

export interface ExamScorecard {
  id: string;
  examId: string;
  stageId: number;
  level: JLPTLevel;
  examTitle: string;
  score: number; // e.g. 18
  totalQuestions: number; // e.g. 20
  percentage: number; // e.g. 90
  passed: boolean;
  timeSpentSeconds: number;
  completedAt: string;
  mistakeWordIds: string[];
}

export interface MistakeItem {
  id: string;
  wordId: string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  failedCount: number;
  resolved: boolean;
  lastFailedAt: string;
}

export interface KanjiLesson {
  id: number;
  level: JLPTLevel;
  title: string;
  subtitle: string;
  kanjiCharacters: string[]; // List of characters e.g. ['一', '二'...]
  description?: string;
}

export interface KanjiExerciseQuestion {
  id: string;
  kanjiChar: string;
  type: 'hanviet' | 'reading' | 'meaning' | 'compound';
  question: string;
  subPrompt?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string; // Emoji or preset avatar
  pin?: string;
  createdAt: string;
  currentLevel: JLPTLevel;
  currentLesson: number;
  streak: number;
  lastActiveDate: string; // YYYY-MM-DD
  // Progression & Behavioral Gating
  unlockedStages: number[]; // e.g. [1] initially. Stage 2 unlocked after passing Exam 1
  completedLessons: number[]; // Lesson IDs marked as completed
  masteredWordIds: string[]; // Words swiped right / learned
  learningWordIds: string[]; // Words currently in SRS review
  masteredKanjiIds?: string[]; // Kanji characters or IDs marked as learned
  completedKanjiLessons?: number[]; // Kanji lesson IDs completed
  mistakeBank: MistakeItem[]; // Bank of failed questions/words to review
  examHistory: ExamScorecard[]; // Detailed history of all boss exams taken
  settings: {
    soundEnabled: boolean;
    speechRate: number; // 0.8 - 1.2
    autoPlayAudio: boolean;
    gatekeeperEnabled: boolean; // if false, all stages are unlocked for free browsing
    darkMode: boolean;
  };
}

export type ActiveTab = 'home' | 'lessons' | 'flashcard' | 'kanji' | 'team';

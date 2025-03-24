export interface Question {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hardModeAnswer?: string;
}

export interface QuizState {
  currentQuestion: number;
  selectedAnswer: number | null;
  showAnswer: boolean;
  correctAnswers: number;
  isComplete: boolean;
  hardModeInput: string;
  isHardModeCorrect?: boolean;
}

export interface QuizConfig {
  showAnswersImmediately: boolean;
  hardMode: boolean;
} 
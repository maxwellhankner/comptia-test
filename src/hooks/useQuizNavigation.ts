import { useState, useCallback } from 'react';
import { Question, QuizState } from '../types/quiz';

const initialState: QuizState = {
  currentQuestion: 0,
  selectedAnswer: null,
  showAnswer: false,
  correctAnswers: 0,
  isComplete: false,
  hardModeInput: '',
  isHardModeCorrect: false,
};

export function useQuizNavigation(questions: Question[], showAnswersImmediately: boolean, hardMode: boolean) {
  const [state, setState] = useState<QuizState>(initialState);

  const handleAnswerSelect = useCallback((answerIndex: number) => {
    if (hardMode) return;

    setState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      showAnswer: showAnswersImmediately,
      correctAnswers: answerIndex === questions[prev.currentQuestion].correctAnswer 
        ? prev.correctAnswers + 1 
        : prev.correctAnswers,
    }));
  }, [questions, showAnswersImmediately, hardMode]);

  const handleHardModeInput = useCallback((input: string) => {
    setState(prev => ({
      ...prev,
      hardModeInput: input,
      isHardModeCorrect: false,
    }));
  }, []);

  const handleHardModeSubmit = useCallback((onComplete?: () => void) => {
    setState(prev => {
      const currentQuestion = questions[prev.currentQuestion];
      const userAnswer = prev.hardModeInput.toLowerCase().trim();
      const correctAnswer = currentQuestion.hardModeAnswer?.toLowerCase().trim();
      
      if (!correctAnswer) return prev;

      const isNumericAnswer = /^\d+$/.test(userAnswer) && /^\d+$/.test(correctAnswer);
      const isCorrect = isNumericAnswer
        ? parseInt(userAnswer) === parseInt(correctAnswer)
        : userAnswer === correctAnswer;
      
      const newState = {
        ...prev,
        showAnswer: true,
        correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
        selectedAnswer: 1,
        isHardModeCorrect: isCorrect,
      };

      // If there's a callback, call it after state is updated
      if (onComplete) {
        setTimeout(() => onComplete(), 0);
      }

      return newState;
    });
  }, [questions]);

  const handleNextQuestion = useCallback(() => {
    setState(prev => {
      const currentQuestion = questions[prev.currentQuestion];
      const userAnswer = prev.hardModeInput.toLowerCase().trim();
      const correctAnswer = currentQuestion.hardModeAnswer?.toLowerCase().trim();

      // If we haven't shown the answer yet and we have input, evaluate it
      if (!prev.showAnswer && userAnswer && correctAnswer) {
        const isNumericAnswer = /^\d+$/.test(userAnswer) && /^\d+$/.test(correctAnswer);
        const isCorrect = isNumericAnswer
          ? parseInt(userAnswer) === parseInt(correctAnswer)
          : userAnswer === correctAnswer;

        return {
          ...initialState,
          currentQuestion: prev.currentQuestion + 1,
          correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
          isComplete: false,
        };
      }

      if (prev.currentQuestion < questions.length - 1) {
        return {
          ...initialState,
          currentQuestion: prev.currentQuestion + 1,
          correctAnswers: prev.correctAnswers,
          isComplete: false,
        };
      }
      return { ...prev, isComplete: true };
    });
  }, [questions.length]);

  const resetQuiz = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    handleAnswerSelect,
    handleHardModeInput,
    handleHardModeSubmit,
    handleNextQuestion,
    resetQuiz,
    currentQuestion: questions[state.currentQuestion],
    isLastQuestion: state.currentQuestion === questions.length - 1,
  };
} 
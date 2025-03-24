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
    if (hardMode) return; // Disable multiple choice in hard mode

    setState(prev => {
      const isCorrect = answerIndex === questions[prev.currentQuestion].correctAnswer;
      return {
        ...prev,
        selectedAnswer: answerIndex,
        showAnswer: showAnswersImmediately,
        correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      };
    });
  }, [questions, showAnswersImmediately, hardMode]);

  const handleHardModeInput = useCallback((input: string) => {
    console.log('Hard Mode Input Handler:', {
      input,
      currentQuestion: questions[state.currentQuestion].question,
      hardModeAnswer: questions[state.currentQuestion].hardModeAnswer,
    });
    setState(prev => ({
      ...prev,
      hardModeInput: input,
      isHardModeCorrect: false,
    }));
  }, [questions, state.currentQuestion]);

  const handleHardModeSubmit = useCallback(() => {
    console.log('Hard Mode Submit - Initial State:', {
      currentQuestion: questions[state.currentQuestion],
      userInput: state.hardModeInput,
      currentScore: state.correctAnswers,
    });

    setState(prev => {
      const currentQuestion = questions[prev.currentQuestion];
      const userAnswer = prev.hardModeInput.toLowerCase().trim();
      const correctAnswer = currentQuestion.hardModeAnswer?.toLowerCase().trim();
      
      console.log('Hard Mode Submit - Answer Check:', {
        question: currentQuestion.question,
        userAnswer,
        correctAnswer,
        hasHardModeAnswer: !!currentQuestion.hardModeAnswer,
        currentScore: prev.correctAnswers,
        comparison: `${userAnswer} === ${correctAnswer}`,
      });
      
      const isCorrect = correctAnswer && userAnswer === correctAnswer;
      
      console.log('Hard Mode Submit - Result:', {
        isCorrect,
        newScore: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      });
      
      return {
        ...prev,
        showAnswer: true,
        correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
        selectedAnswer: 1, // Always enable navigation after submission
        isHardModeCorrect: isCorrect || false,
      };
    });
  }, [questions, state]);

  const handleNextQuestion = useCallback(() => {
    console.log('Next Question - Current State:', {
      currentQuestion: state.currentQuestion,
      correctAnswers: state.correctAnswers,
      isLastQuestion: state.currentQuestion === questions.length - 1,
    });

    setState(prev => {
      if (prev.currentQuestion < questions.length - 1) {
        return {
          ...initialState,
          currentQuestion: prev.currentQuestion + 1,
          correctAnswers: prev.correctAnswers,
        };
      }
      return {
        ...prev,
        isComplete: true,
      };
    });
  }, [questions.length, state]);

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
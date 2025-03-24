import { Question } from '../types/quiz';
import { useQuizNavigation } from '../hooks/useQuizNavigation';
import { QuestionDisplay } from './quiz/QuestionDisplay';
import { AnswerOptions } from './quiz/AnswerOptions';
import { NavigationButtons } from './quiz/NavigationButtons';

interface QuizScreenProps {
  showAnswersImmediately: boolean;
  hardMode: boolean;
  onExit: () => void;
  onViewResults: (correct: number, total: number) => void;
  questions: Question[];
}

export default function QuizScreen({ showAnswersImmediately, hardMode, onExit, onViewResults, questions }: QuizScreenProps) {
  const {
    state,
    handleAnswerSelect,
    handleHardModeInput,
    handleHardModeSubmit,
    handleNextQuestion,
    currentQuestion,
    isLastQuestion,
  } = useQuizNavigation(questions, showAnswersImmediately, hardMode);

  const handleViewResults = () => {
    if (hardMode && state.hardModeInput && !state.showAnswer) {
      handleHardModeSubmit(() => {
        onViewResults(state.correctAnswers, state.currentQuestion + 1);
      });
    } else {
      onViewResults(state.correctAnswers, state.currentQuestion + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && hardMode) {
      e.preventDefault();
      handleHardModeSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <main className="container mx-auto px-4">
        <div className="text-center border border-zinc-700 rounded-lg p-8 max-w-xl mx-auto bg-zinc-900 relative">
          <button
            onClick={onExit}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <QuestionDisplay
            question={currentQuestion}
            questionNumber={state.currentQuestion + 1}
            totalQuestions={questions.length}
          />
          
          {hardMode ? (
            <div className="mb-8">
              <input
                type="text"
                value={state.hardModeInput}
                onChange={(e) => handleHardModeInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your answer..."
                disabled={state.showAnswer}
                className="w-full p-3 rounded-md bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
              />
              {state.showAnswer && currentQuestion.hardModeAnswer && (
                <div className={`mt-2 text-sm ${
                  state.hardModeInput.toLowerCase().trim() === currentQuestion.hardModeAnswer.toLowerCase().trim()
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}>
                  {(() => {
                    const isCorrect = state.hardModeInput.toLowerCase().trim() === currentQuestion.hardModeAnswer.toLowerCase().trim();
                    return isCorrect ? 'Correct!' : `Incorrect. The correct answer is: ${currentQuestion.hardModeAnswer}`;
                  })()}
                </div>
              )}
            </div>
          ) : (
            <AnswerOptions
              question={currentQuestion}
              selectedAnswer={state.selectedAnswer}
              showAnswer={state.showAnswer}
              onAnswerSelect={handleAnswerSelect}
            />
          )}

          <NavigationButtons
            selectedAnswer={hardMode ? state.hardModeInput !== '' : state.selectedAnswer !== null}
            isLastQuestion={isLastQuestion}
            onNext={handleNextQuestion}
            onViewResults={handleViewResults}
          />
        </div>
      </main>
    </div>
  );
} 
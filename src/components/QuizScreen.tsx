import { useState } from 'react';
import { PortQuestion } from '../data/portData';

interface QuizScreenProps {
  showAnswersImmediately: boolean;
  onExit: () => void;
  onViewResults: (correct: number, total: number) => void;
  questions: PortQuestion[];
}

export default function QuizScreen({ showAnswersImmediately, onExit, onViewResults, questions }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (showAnswersImmediately) {
      setShowAnswer(true);
      if (answerIndex === questions[currentQuestion].correctAnswer) {
        setCorrectAnswers(prev => prev + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      onViewResults(correctAnswers, questions.length);
    }
  };

  const handleViewResults = () => {
    onViewResults(correctAnswers, currentQuestion + 1);
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
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Question {currentQuestion + 1}</h2>
          </div>
          
          <div className="mb-8">
            <p className="text-xl text-white mb-6">{questions[currentQuestion].question}</p>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showAnswer}
                  className={`w-full p-3 rounded-md text-left transition-all ${
                    selectedAnswer === index
                      ? showAnswer
                        ? index === questions[currentQuestion].correctAnswer
                          ? "bg-green-600"
                          : "bg-red-600"
                        : "bg-zinc-700"
                      : "bg-zinc-800 hover:bg-zinc-700"
                  } text-white`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleViewResults}
              disabled={selectedAnswer === null}
              className={`text-white font-semibold py-2 px-8 rounded-md transition-all ${
                selectedAnswer === null
                  ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              View Results
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`text-white font-semibold py-2 px-8 rounded-md transition-all ${
                selectedAnswer === null
                  ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next Question"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 
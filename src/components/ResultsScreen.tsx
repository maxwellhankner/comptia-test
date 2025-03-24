interface ResultsScreenProps {
  correctAnswers: number;
  totalQuestions: number;
  onRestart: () => void;
  onExit: () => void;
}

export default function ResultsScreen({ correctAnswers, totalQuestions, onRestart, onExit }: ResultsScreenProps) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const incorrectAnswers = totalQuestions - correctAnswers;

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

          <h2 className="text-3xl font-bold text-white mb-8">Quiz Results</h2>
          
          <div className="mb-8">
            <div className="text-6xl font-bold text-white mb-4">{percentage}%</div>
            <div className="space-y-4">
              <div className="text-xl text-green-500">
                Correct Answers: {correctAnswers}
              </div>
              <div className="text-xl text-red-500">
                Incorrect Answers: {incorrectAnswers}
              </div>
              <div className="text-xl text-zinc-400">
                Total Questions: {totalQuestions}
              </div>
            </div>
          </div>

          <button
            onClick={onRestart}
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-2 px-8 rounded-md transition-all"
          >
            Try Again
          </button>
        </div>
      </main>
    </div>
  );
} 
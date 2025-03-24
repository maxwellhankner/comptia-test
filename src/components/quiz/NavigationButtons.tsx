interface NavigationButtonsProps {
  selectedAnswer: boolean;
  isLastQuestion: boolean;
  onNext: () => void;
  onViewResults: () => void;
}

export function NavigationButtons({
  selectedAnswer,
  isLastQuestion,
  onNext,
  onViewResults,
}: NavigationButtonsProps) {
  return (
    <div className="flex gap-4 justify-center mt-8">
      <button
        onClick={onViewResults}
        disabled={!selectedAnswer}
        className={`text-white font-semibold py-2 px-8 rounded-md transition-all ${
          !selectedAnswer
            ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
            : "bg-zinc-800 hover:bg-zinc-700"
        }`}
      >
        View Results
      </button>
      <button
        onClick={onNext}
        disabled={!selectedAnswer}
        className={`text-white font-semibold py-2 px-8 rounded-md transition-all ${
          !selectedAnswer
            ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
            : "bg-zinc-800 hover:bg-zinc-700"
        }`}
      >
        {isLastQuestion ? "Finish" : "Next Question"}
      </button>
    </div>
  );
} 
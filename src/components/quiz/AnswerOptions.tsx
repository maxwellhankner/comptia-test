import { Question } from '../../types/quiz';

interface AnswerOptionsProps {
  question: Question;
  selectedAnswer: number | null;
  showAnswer: boolean;
  onAnswerSelect: (index: number) => void;
}

export function AnswerOptions({
  question,
  selectedAnswer,
  showAnswer,
  onAnswerSelect,
}: AnswerOptionsProps) {
  return (
    <div className="space-y-3">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswerSelect(index)}
          disabled={showAnswer}
          className={`w-full p-3 rounded-md text-left transition-all ${
            selectedAnswer === index
              ? showAnswer
                ? index === question.correctAnswer
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
  );
} 
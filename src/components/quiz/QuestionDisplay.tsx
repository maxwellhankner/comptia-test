import { Question } from '../../types/quiz';

interface QuestionDisplayProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
}

export function QuestionDisplay({ question, questionNumber, totalQuestions }: QuestionDisplayProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">
          Question {questionNumber} of {totalQuestions}
        </h2>
      </div>
      <p className="text-xl text-white mb-6">{question.question}</p>
    </div>
  );
} 
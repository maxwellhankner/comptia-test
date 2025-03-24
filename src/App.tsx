import { useState } from 'react';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import { portQuestions } from './data/portData';
import { wifiQuestions } from './data/wifiData';

type QuizType = 'ports' | 'wifi';

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [showAnswersImmediately, setShowAnswersImmediately] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({ correct: 0, total: 0 });
  const [enabledQuizzes, setEnabledQuizzes] = useState<Set<QuizType>>(new Set(['ports']));

  const handleViewResults = (correct: number, total: number) => {
    setResults({ correct, total });
    setShowResults(true);
  };

  const handleRestart = () => {
    setShowResults(false);
    setIsQuizStarted(false);
  };

  const toggleQuizType = (type: QuizType) => {
    setEnabledQuizzes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(type)) {
        newSet.delete(type);
      } else {
        newSet.add(type);
      }
      return newSet;
    });
  };

  const getQuestions = (type: QuizType) => {
    switch (type) {
      case 'ports':
        return portQuestions;
      case 'wifi':
        return wifiQuestions;
      default:
        return portQuestions;
    }
  };

  if (showResults) {
    return (
      <ResultsScreen
        correctAnswers={results.correct}
        totalQuestions={results.total}
        onRestart={handleRestart}
        onExit={() => setIsQuizStarted(false)}
      />
    );
  }

  if (isQuizStarted) {
    // Get all enabled quiz types and combine their questions
    const allQuestions = Array.from(enabledQuizzes).flatMap(type => getQuestions(type));
    return (
      <QuizScreen
        showAnswersImmediately={showAnswersImmediately}
        onExit={() => setIsQuizStarted(false)}
        onViewResults={handleViewResults}
        questions={allQuestions}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <main className="container mx-auto px-4">
        <div className="text-center border border-zinc-700 rounded-lg p-8 max-w-xl mx-auto bg-zinc-900">
          <h1 className="text-3xl font-bold text-white mb-6">
            CompTIA A+ Study Resource
          </h1>
          <p className="text-lg text-white mb-8">
            A focused study companion for memorizing key concepts and preparing for the CompTIA A+ certification exam. Master essential topics including hardware components, networking, operating systems, and troubleshooting. 
            Perfect for both Core 1 (220-1101) and Core 2 (220-1102) exam preparation.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3">
              <span className="text-white">Show answers:</span>
              <button
                onClick={() => setShowAnswersImmediately(!showAnswersImmediately)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  showAnswersImmediately ? 'bg-green-600' : 'bg-zinc-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    showAnswersImmediately ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-center gap-3">
              <span className="text-white">Port Numbers:</span>
              <button
                onClick={() => toggleQuizType('ports')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  enabledQuizzes.has('ports') ? 'bg-green-600' : 'bg-zinc-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    enabledQuizzes.has('ports') ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-center gap-3">
              <span className="text-white">WiFi Standards:</span>
              <button
                onClick={() => toggleQuizType('wifi')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  enabledQuizzes.has('wifi') ? 'bg-green-600' : 'bg-zinc-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    enabledQuizzes.has('wifi') ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <button 
            onClick={() => setIsQuizStarted(true)}
            disabled={enabledQuizzes.size === 0}
            className={`text-white font-semibold py-3 px-8 rounded-md transition-all ${
              enabledQuizzes.size === 0
                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                : "bg-zinc-800 hover:bg-zinc-700"
            }`}
          >
            Start Quiz
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;

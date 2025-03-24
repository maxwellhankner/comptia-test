import { useState } from 'react';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import { portQuestions } from './data/portData';
import { wifiQuestions } from './data/wifiData';
import { Question, QuizConfig } from './types/quiz';

interface QuizSettingsProps {
  config: QuizConfig;
  onConfigChange: (config: QuizConfig) => void;
}

const QuizSettings = ({ config, onConfigChange }: QuizSettingsProps) => {
  const toggleCategory = (category: string) => {
    const newSet = new Set(config.enabledCategories);
    if (newSet.has(category)) {
      newSet.delete(category);
    } else {
      newSet.add(category);
    }
    onConfigChange({ ...config, enabledCategories: newSet });
  };

  return (
    <div className="space-y-4 mb-8">
      <div className="flex items-center justify-center gap-3">
        <span className="text-white">Port Numbers:</span>
        <button
          onClick={() => toggleCategory('ports')}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            config.enabledCategories.has('ports') ? 'bg-green-600' : 'bg-zinc-700'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              config.enabledCategories.has('ports') ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      <div className="flex items-center justify-center gap-3">
        <span className="text-white">WiFi Standards:</span>
        <button
          onClick={() => toggleCategory('wifi')}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            config.enabledCategories.has('wifi') ? 'bg-green-600' : 'bg-zinc-700'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              config.enabledCategories.has('wifi') ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      <div className="flex items-center justify-center gap-3">
        <span className="text-white">Show answers:</span>
        <button
          onClick={() => onConfigChange({ ...config, showAnswersImmediately: !config.showAnswersImmediately })}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            config.showAnswersImmediately ? 'bg-green-600' : 'bg-zinc-700'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              config.showAnswersImmediately ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      <div className="flex items-center justify-center gap-3">
        <span className="text-white">Hard Mode:</span>
        <button
          onClick={() => onConfigChange({ ...config, hardMode: !config.hardMode })}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            config.hardMode ? 'bg-red-600' : 'bg-zinc-700'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              config.hardMode ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
};

function App() {
  const [quizState, setQuizState] = useState({
    isStarted: false,
    showResults: false,
    results: { correct: 0, total: 0 }
  });
  
  const [config, setConfig] = useState<QuizConfig>({
    showAnswersImmediately: true,
    enabledCategories: new Set(['ports', 'wifi']),
    hardMode: false,
  });

  const handleViewResults = (correct: number, total: number) => {
    setQuizState(prev => ({ ...prev, showResults: true, results: { correct, total } }));
  };

  const handleRestart = () => {
    setQuizState({
      isStarted: false,
      showResults: false,
      results: { correct: 0, total: 0 }
    });
  };

  const handleExitQuiz = () => {
    setQuizState({
      isStarted: false,
      showResults: false,
      results: { correct: 0, total: 0 }
    });
  };

  const getQuestions = (): Question[] => {
    const questions: Question[] = [];
    if (config.enabledCategories.has('ports')) {
      questions.push(...portQuestions);
    }
    if (config.enabledCategories.has('wifi')) {
      questions.push(...wifiQuestions);
    }
    return questions;
  };

  if (quizState.showResults) {
    return (
      <ResultsScreen
        correctAnswers={quizState.results.correct}
        totalQuestions={quizState.results.total}
        onRestart={handleRestart}
        onExit={handleExitQuiz}
      />
    );
  }

  if (quizState.isStarted) {
    return (
      <QuizScreen
        showAnswersImmediately={config.showAnswersImmediately}
        hardMode={config.hardMode}
        onExit={handleExitQuiz}
        onViewResults={handleViewResults}
        questions={getQuestions()}
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
          
          <QuizSettings config={config} onConfigChange={setConfig} />

          <button 
            onClick={() => setQuizState(prev => ({ ...prev, isStarted: true }))}
            disabled={config.enabledCategories.size === 0}
            className={`text-white font-semibold py-3 px-8 rounded-md transition-all ${
              config.enabledCategories.size === 0
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

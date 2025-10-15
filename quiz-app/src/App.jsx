import { useState } from "react";
import QuizSetup from "./components/QuizSetup";
import BrainBox from "./components/BrainBox";
import QuizResult from "./components/QuizResult";
import Header from "./components/Header";

function App() {
  const [stage, setStage] = useState("setup"); // 'setup' | 'quiz' | 'result'
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  // Called when user starts quiz from setup
  const handleStartQuiz = (fetchedQuestions) => {
    setQuestions(fetchedQuestions);
    setStage("quiz");
  };

  // Called when quiz ends
  const handleQuizEnd = (finalScore) => {
    setScore(finalScore);
    setStage("result");
  };

  // Restart to setup
  const handleRestart = () => {
    setScore(0);
    setQuestions([]);
    setStage("setup");
  };

  return (
    <div className="min-h-screen bg-orange-100 flex flex-col text-center">
      {/* Always show Header */}
      <Header />

      {/* Main content area */}
      <main className="flex-grow flex items-center justify-center p-4">
        {stage === "setup" && <QuizSetup onStartQuiz={handleStartQuiz} />}
        {stage === "quiz" && (
          <BrainBox questions={questions} onQuizEnd={handleQuizEnd} />
        )}
        {stage === "result" && (
          <QuizResult
            score={score}
            total={questions.length}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
  );
}

export default App;

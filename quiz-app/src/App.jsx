import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import RegistrationPage from "./components/RegistrationPage";
import QuizSetup from "./components/QuizSetup";
import BrainBox from "./components/BrainBox";
import QuizResult from "./components/QuizResult";
import Header from "./components/Header";

function App() {
  // 'welcome' | 'register' | 'setup' | 'quiz' | 'result'
  const [stage, setStage] = useState("welcome");
  const [userInfo, setUserInfo] = useState({ fullName: "", email: "" });
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  // Navigate functions
  const goToRegister = () => setStage("register");
  const goToSetup = () => setStage("setup");

  // Handle registration data
  const handleRegister = (data) => {
    setUserInfo(data);
    setStage("setup");
  };

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

  // Restart everything
  const handleRestart = () => {
    setScore(0);
    setQuestions([]);
    setStage("welcome");
  };

  return (
    <div className="min-h-screen bg-orange-100 flex flex-col text-center">
      {/* Always show Header */}
      <Header />

      {/* Main content area */}
      <main className="flex-grow flex items-center justify-center p-4">
        {stage === "welcome" && <WelcomePage onNext={goToRegister} />}
        {stage === "register" && (
          <RegistrationPage onRegister={handleRegister} />
        )}
        {stage === "setup" && <QuizSetup onStartQuiz={handleStartQuiz} />}
        {stage === "quiz" && (
          <BrainBox questions={questions} onQuizEnd={handleQuizEnd} />
        )}
        {stage === "result" && (
          <QuizResult
            score={score}
            total={questions.length}
            userInfo={userInfo}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
  );
}

export default App;

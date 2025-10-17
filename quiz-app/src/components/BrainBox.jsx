import React, { useState, useEffect } from "react";

const BrainBox = ({ questions, onQuizEnd }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (currentQuestion) {
      const options = [
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      ];
      setShuffledOptions(options.sort(() => Math.random() - 0.5));
      setTimeLeft(30);
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (!currentQuestion) return;
    if (timeLeft === 0) {
      handleNextQuestion();
      return;
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, currentQuestion]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);

    if (answer === currentQuestion.correct_answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      handleNextQuestion(answer);
    }, 800);
  };

  const handleNextQuestion = (answer) => {
    const isCorrect = answer === currentQuestion?.correct_answer;
    const newScore = isCorrect ? score + 1 : score;

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer("");
      setTimeLeft(30);
    } else {
      onQuizEnd(newScore);
    }
  };

  if (!currentQuestion) return <p>Loading...</p>;

  const progressWidth = `${(timeLeft / 30) * 100}%`;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 transition-all duration-300">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-700">
            Question {currentIndex + 1} of {questions.length}
          </h2>
          <div className="text-red-600 font-semibold text-lg">
            ⏱ {timeLeft}s
          </div>
        </div>

        {/* Timer Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
          <div
            className="h-2 bg-blue-500 transition-all duration-1000"
            style={{ width: progressWidth }}
          ></div>
        </div>

        {/* Question */}
        <p
          className="text-lg md:text-xl mb-8 text-gray-800 font-medium"
          dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
        ></p>

        {/* Options */}
        <div className="grid gap-4">
          {shuffledOptions.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className={`p-4 text-left border-2 rounded-2xl transition-all duration-200 text-gray-700 font-medium ${
                selectedAnswer
                  ? option === currentQuestion.correct_answer
                    ? "bg-green-500 text-white border-green-600"
                    : option === selectedAnswer
                    ? "bg-red-500 text-white border-red-600"
                    : "bg-gray-100 border-gray-200"
                  : "hover:bg-blue-100 hover:border-blue-400"
              }`}
              dangerouslySetInnerHTML={{ __html: option }}
              disabled={!!selectedAnswer}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          Score: {score} / {questions.length}
        </div>
      </div>
    </div>
  );
};

export default BrainBox;

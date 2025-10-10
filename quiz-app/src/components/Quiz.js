import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showScore, setShowScore] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    setSelectedAnswer("");

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    return (
      <div className="quiz-container">
        <h2>Your Score: {score} / {questions.length}</h2>
      </div>
    );
  }

  // Combine correct + incorrect answers and shuffle
  const allAnswers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="quiz-container">
      <h3>
        Question {currentIndex + 1} of {questions.length}
      </h3>
      <p>{currentQuestion.question}</p>

      <div className="options">
        {allAnswers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(answer)}
            className={`option-btn ${
              selectedAnswer === answer ? "selected" : ""
            }`}
          >
            {answer}
          </button>
        ))}
      </div>

      <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
        Next
      </button>
    </div>
  );
};

export default Quiz;

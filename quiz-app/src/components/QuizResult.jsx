import React from "react";

const QuizResult = ({
  score = 0,
  total = 0,
  questions = [],
  userAnswers = [],
  onRetry,
  onNewQuiz,
}) => {
  return (
    <div className="result-container">
      <h2>Well Done!!!</h2>
      <p>
        Here is your Final Score: <strong>{score}</strong> / {total}
      </p>

      <h3>Review Answers:</h3>
      <ul className="review-list">
        {questions.map((question, index) => {
          const isCorrect = userAnswers[index] === question.correct_answer;
          return (
            <li
              key={index}
              className={`review-item ${isCorrect ? "correct" : "incorrect"}`}
            >
              <p>
                <strong>Q{index + 1}:</strong>{" "}
                <span
                  dangerouslySetInnerHTML={{ __html: question.question }}
                />
              </p>
              <p>
                Correct Answer: {question.correct_answer}
              </p>
              <p>
                Your Answer:{" "}
                <span className={isCorrect ? "text-green" : "text-red"}>
                  {userAnswers[index]}
                </span>
              </p>
              {question.explanation && (
                <p className="explanation">
                  Explanation: {question.explanation}
                </p>
              )}
            </li>
          );
        })}
      </ul>

      <div className="result-buttons">
        <button onClick={onRetry}>Retake Quiz</button>
        <button onClick={onNewQuiz}>Choose Another Topic</button>
      </div>
    </div>
  );
};

export default QuizResult;

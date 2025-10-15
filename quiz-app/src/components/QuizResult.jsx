import React from "react";

const QuizResult = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="max-w-md mx-auto text-center p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Quiz Completed</h2>

      <p className="text-lg mb-2">
        Your Score: <span className="font-bold">{score}</span> / {total}
      </p>
      <p className="text-2xl font-semibold mb-6">{percentage}%</p>

      <button
        onClick={onRestart}
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default QuizResult;

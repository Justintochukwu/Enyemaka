import React, { useState } from "react";

const QuizSetup = ({ onStartQuiz }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState(5);
  const [questions, setQuestions] = useState([]);

  const categories = [
    { id: 9, name: "Use of English" },
    { id: 17, name: "Sciences" },
    { id: 23, name: "Music" },
    { id: 11, name: "Current Affairs" },
  ];

  const fetchQuestions = async () => {
    if (!category || !difficulty) return alert("Please select all fields");
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

    const response = await fetch(url);
    const data = await response.json();
    setQuestions(data.results);
    onStartQuiz(data.results); // Pass questions to parent for next step
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Quiz Setup</h2>

      {/* Category Selection */}
      <label className="block mb-2">Select a Topic:</label>
      <select
        className="w-full p-2 border mb-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">-- Choose a Topic --</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* Difficulty Selection */}
      <label className="block mb-2">Select Difficulty:</label>
      <select
        className="w-full p-2 border mb-4"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">-- Choose Difficulty --</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      {/* Number of Questions */}
      <label className="block mb-2">Number of Questions:</label>
      <input
        type="number"
        className="w-full p-2 border mb-4"
        min="1"
        max="20"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={fetchQuestions}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Start Quiz
      </button>
    </div>
  );
};
export default QuizSetup;

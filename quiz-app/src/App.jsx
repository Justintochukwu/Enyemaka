import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuizResult from './components/QuizResult'
import QuizSetup from './components/QuizSetup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <QuizResult
          score={3}
          total={5}
          questions={[
            { question: "What is React?", correct_answer: "Library" },
            { question: "What is JSX?", correct_answer: "Syntax extension" },
          ]}
          userAnswers={["Library", "Syntax extension"]}
          onRetry={() => console.log("Retry clicked")}
          onNewQuiz={() => console.log("New Quiz clicked")}
        />
        <QuizSetup />
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

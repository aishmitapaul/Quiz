import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddPlayerForm from './components/AddPlayerForm'
import QuizEngine from './components/QuizEngine'
import ScoreSummary from './components/ScoreSummary'
import Leaderboard from './components/Leaderboard'
import AboutPage from './components/AboutPage'

export const AppContext = React.createContext()

export default function App() {
  const [player, setPlayer] = useState(JSON.parse(localStorage.getItem('player')) || null)

  return (
    <AppContext.Provider value={{ player, setPlayer }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/add-player" element={<AddPlayerForm />} />
          <Route path="/quiz/start" element={<QuizEngine />} />
          <Route path="/score" element={<ScoreSummary />} />
          <Route path="/scores" element={<Leaderboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Welcome to Quiz Quizzer!</h1>
        <p>Tap . Guess . Win . </p>
        <a href="/add-player">
          <button>Start Quiz</button>
        </a>
      </div>
      <div className="hero-image">
        <img src="/im.svg" alt="Quiz" width="400" />
      </div>
    </div>
  )
}
import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import Flashcards from './components/Flashcards';
import './App.css';

function App() {
  const [showFlashcards, setShowFlashcards] = useState(false);

  const handleStartQuiz = () => {
    setShowFlashcards(true);
  };

  return (
    <div className="App">
      {!showFlashcards ? (
        <WelcomePage onStartQuiz={handleStartQuiz} />
      ) : (
        <Flashcards />
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import FlashcardSet from './FlashcardSet';
import { Button } from '@mui/material';
import './Flashcards.css';

const Flashcards = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('simple.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: "745px",
  };

  const [sets, setSets] = useState([]);

  const handleAddSet = () => {
    setSets([...sets, { id: sets.length + 1, cards: [] }]);
  };

  return (
    <div className="flashcards-container" style={backgroundImageStyle}>
      <Button variant="contained" color="secondary" onClick={handleAddSet}>
        Add Flashcard Set
      </Button>
      {sets.map((set) => (
        <FlashcardSet key={set.id} set={set} />
      ))}
    </div>
  );
};

export default Flashcards;

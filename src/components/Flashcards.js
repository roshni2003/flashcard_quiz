import React, { useState } from 'react';
import FlashcardSet from './FlashcardSet';
import { Button } from '@mui/material';
import './Flashcards.css';

const Flashcards = () => {
  const [sets, setSets] = useState([]);

  const handleAddSet = () => {
    setSets([...sets, { id: sets.length + 1, cards: [] }]);
  };

  return (
    <div className="flashcards-container">
      <Button variant="contained" color="primary" onClick={handleAddSet}>
        Add Flashcard Set
      </Button>
      {sets.map((set) => (
        <FlashcardSet key={set.id} set={set} />
      ))}
    </div>
  );
};

export default Flashcards;

import React, { useState } from 'react';
import Flashcard from './Flashcard';
import { TextField, Button } from '@mui/material';
import './FlashcardSet.css';

const FlashcardSet = ({ set }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [cards, setCards] = useState(set.cards);

  const handleAddCard = () => {
    setCards([...cards, { question, answer }]);
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className="flashcard-set">
      <div className="flashcard-set-header">Flashcard Set {set.id}</div>
      <div className="flashcard-set-body">
        <TextField
          label="Question"
          variant="outlined"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <TextField
          label="Answer"
          variant="outlined"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleAddCard}>
          Add Card
        </Button>
      </div>
      <div className="flashcard-list">
        {cards.map((card, index) => (
          <Flashcard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default FlashcardSet;

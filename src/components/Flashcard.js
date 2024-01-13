import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './Flashcard.css';

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card className="flashcard">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {isFlipped ? 'Answer' : 'Question'}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {isFlipped ? card.answer : card.question}
        </Typography>
      </CardContent>
      <Button variant="outlined" color="primary" onClick={handleFlip}>
        {isFlipped ? 'Show Question' : 'Show Answer'}
      </Button>
    </Card>
  );
};

export default Flashcard;

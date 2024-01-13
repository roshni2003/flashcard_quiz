import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './Flashcard.css';

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card className="flashcard" >
      <CardContent>
        <Typography variant="h6" gutterBottom style={{fontFamily:"sans-serif", fontWeight:"bold"}}>
          {isFlipped ? 'Answer' : 'Question'}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{fontFamily:"sans-serif", fontWeight:"bold", fontSize:"20px"}}>
          {isFlipped ? card.answer : card.question}
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary" onClick={handleFlip} style={{marginLeft:"17px", marginBottom:"10px"}}>
        {isFlipped ? 'Show Question' : 'Show Answer'}
      </Button>
    </Card>
  );
};

export default Flashcard;

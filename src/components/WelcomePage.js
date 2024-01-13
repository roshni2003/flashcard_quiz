import React from 'react';
import { Button, Typography } from '@mui/material';
import './WelcomePage.css';

const WelcomePage = ({ onStartQuiz }) => {
  const backgroundImageStyle = {
    backgroundImage: `url('quiz.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: "745px"
  };

  return (
    <div className="welcome-page" style={backgroundImageStyle}>
      <Typography variant="h2" gutterBottom className='text'>
        Welcome to the Flashcard Quiz App!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Get ready to create, view, and quiz yourself on flashcards.
      </Typography>
      <Button variant="contained" color="secondary" onClick={onStartQuiz}>
        Start Quiz
      </Button>
    </div>
  );
};

export default WelcomePage;

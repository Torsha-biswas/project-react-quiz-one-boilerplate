import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircleFilled, Home } from '@mui/icons-material'; // Import icons
import './HomeComponent.css';

const HomeComponent = () => {
  return (
    <div className="container">
      <h1 className="quizz">Quiz App</h1>
      <div className="play">
        <Link to="/quiz">
          <PlayCircleFilled /> Play
        </Link>
      </div>
      
    </div>
  );
};

export default HomeComponent;

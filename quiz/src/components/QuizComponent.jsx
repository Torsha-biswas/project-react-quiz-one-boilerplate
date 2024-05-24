import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './QuizComponent.css';
import questions from '../resources/quizQuestion.json';

const QuizComponent = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleNext = () => {
    setCurrIndex((prevIndex) => (prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex));
    setSelectedOption('');
  };

  const handlePrevious = () => {
    setCurrIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    setSelectedOption('');
  };

  const handleQuit = () => {
    alert('You have quit the quiz.');
    setCurrIndex(0);
    setSelectedOption('');
  };

  const handleOptionClick = (option) => {
    // Get the current question object
    const currentQuestion = questions[currIndex];
    // Check if selected option is correct
    if (option === currentQuestion.answer) {
      // Increment score if correct
      setScore(score + 1);
      // Generate alert for correct answer
      alert('Correct Answer!');
    } else {
      // Generate alert for wrong answer
      alert('Wrong Answer!');
    }
    setSelectedOption(option);
  };

  const currentQuestionNumber = currIndex + 1;
  const totalQuestions = questions.length;

  return (
    <div className="main-container">
      <h2 className="questions">Question {currentQuestionNumber} of {totalQuestions}</h2>
      <div className="question-board"> {/* White board wrapper */}
        <h3>{questions[currIndex].question}</h3>
        <div className="options">
          {['optionA', 'optionB', 'optionC', 'optionD'].map((optionKey) => (
            <div key={optionKey} onClick={() => handleOptionClick(questions[currIndex][optionKey])}>
              {questions[currIndex][optionKey]}
            </div>
          ))}
        </div>
      </div>
      <div id="btn-container">
        <div className="btns">
          <button className="previous" onClick={handlePrevious}>
            Previous
          </button>
          <button className="next" onClick={handleNext}>
            Next
          </button>
          <Link to={{ pathname: "/result", state: { score } }}> {/* Pass score as state */}
            <button className="finish">
              Finish
            </button>
          </Link>
          <button className="quit" onClick={handleQuit}>
            Quit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;

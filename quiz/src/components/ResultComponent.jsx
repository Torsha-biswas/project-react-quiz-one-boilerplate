import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import "./ResultComponent.css";

export default class Resultpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      totalQuestions: 0,
      attempted: 0,
      correctAnswers: 0,
      wrongAnswers: 0
    };
  }

  componentDidMount() {
    // Load questions from question.json file
    const questions = [
      {
          "question": "What temperature does water boil at?",
          "optionA": "50 degrees Celcius",
          "optionB": "25 degrees Celcius",
          "optionC": "100 degrees Celcius",
          "optionD": "150 degrees Celcius",
          "answer": "100 degrees Celcius"
      },
      {
          "question": "Who wrote Julius Caesar, Macbeth and Hamlet?",
          "optionA": "Wole Soyinka",
          "optionB": "William Shakespeare",
          "optionC": "Ngozi Chimamanda Adichie",
          "optionD": "Dan Brown",
          "answer": "William Shakespeare"
      },
      {
          "question": "What did the crocodile swallow in Peter Pan?",
          "optionA": "A Book",
          "optionB": "A Computer",
          "optionC": "A pair of shoes",
          "optionD": "Alarm Clock",
          "answer": "Alarm Clock"
      },
      {
          "question": "Which is the only mammal that can’t jump?",
          "optionA": "Dog",
          "optionB": "Elephant",
          "optionC": "Goat",
          "optionD": "Lion",
          "answer": "Elephant"
      },
      {
          "question": "Who lived at 221B, Baker Street, London?",
          "optionA": "Tony Stark",
          "optionB": "Morgan Freeman",
          "optionC": "Sherlock Holmes",
          "optionD": "Samuel L. Jackson",
          "answer": "Sherlock Holmes"
      },
      {
          "question": "What colour is a panda?",
          "optionA": "Green and Yellow",
          "optionB": "Blue and Red",
          "optionC": "Green and White",
          "optionD": "Black and White",
          "answer": "Black and White"
      },
      {
          "question": "Where is the smallest bone in the human body?",
          "optionA": "The Chest",
          "optionB": "The Ear",
          "optionC": "The Legs",
          "optionD": "The Hands",
          "answer": "The Ear"
      },
      {
          "question": "What does the roman numeral C represent?",
          "optionA": "100",
          "optionB": "10",
          "optionC": "10,000",
          "optionD": "1,000,000",
          "answer": "100"
      },
      {
          "question": "What takes place in Hong Kong's Happy Valley?",
          "optionA": "Chicken Wrestling",
          "optionB": "Horse racing",
          "optionC": "Street Racing",
          "optionD": "Arm Wrestling",
          "answer": "Horse racing"
      },
      {
          "question": "Who painted the Mona Lisa?",
          "optionA": "Alexander Graham Bell",
          "optionB": "Sir Isaac Newton",
          "optionC": "Leonardo Da Vinci",
          "optionD": "Albert Einstein",
          "answer": "Leonardo Da Vinci"
      },
      {
          "question": "What’s the most important book in the Moslem religion?",
          "optionA": "The Koran",
          "optionB": "The Dictionary",
          "optionC": "The Bible",
          "optionD": "The Chemistry text Book",
          "answer": "The Koran"
      },
      {
          "question": "What’s the capital of Ethiopia?",
          "optionA": "Cape Town",
          "optionB": "San Francisco",
          "optionC": "Abuja",
          "optionD": "Syndey",
          "answer": "Addis Ababa"
      },
      {
          "question": "How many squares are there on a chess board?",
          "optionA": "128",
          "optionB": "64",
          "optionC": "32",
          "optionD": "256",
          "answer": "64"
      },
      {
          "question": "Who invented the electric light bulb?",
          "optionA": "Tom Cruise",
          "optionB": "Barack Obama",
          "optionC": "Wole Soyinka",
          "optionD": "Thomas Edison",
          "answer": "Thomas Edison"
      },
      {
          "question": "What are the first three words of the bible?",
          "optionA": "be with everyone",
          "optionB": "Again Jesus asked",
          "optionC": "In the beginning",
          "optionD": "At that time",
          "answer": "In the beginning"
      }
    ];
    
    const totalQuestions = questions.length;
    let correctAnswers = 0;
    let attempted = 0;

    // Calculate correct answers and attempted questions based on user's selections
    for (const question of questions) {
      if (question.selectedOption) {
        attempted++;
        if (question.answer === question.selectedOption) {
          correctAnswers++;
        }
      }
    }

    const score = Math.round((correctAnswers / totalQuestions) * 100);

    this.setState({ totalQuestions, correctAnswers, attempted, score });
  }

  render() {
    const { score, totalQuestions, attempted, correctAnswers, wrongAnswers } = this.state;
    const unattempted = totalQuestions - attempted;
    const percentageScore = score;

    return (
      <>
        <div className='result-box'>
          <h2 className='main'>Result</h2>
          <div className='result-board'>
            <h3 className='sentence'>{percentageScore >= 50 ? 'Well Done!' : 'You need more Practice!'}</h3>
            <h2 className='score'>Your score is {percentageScore}%</h2>
            <div className='score-container'>
              <div>
                <p>Total Number of questions</p>
                <p>Number of attempted questions</p>
                <p>Number of correct answers</p>
                <p>Number of wrong answers</p>
                <p>Number of unattempted questions</p>
              </div>
              <div>
                <p>{totalQuestions}</p>
                <p>{attempted}</p>
                <p>{correctAnswers}</p>
                <p>{wrongAnswers}</p>
                <p>{unattempted}</p>
              </div>
            </div>
          </div>
          <div className="btns">
            <Link to="/">
              <button className="home-button">
                <HomeIcon style={{ marginRight: '8px' }} /> Back to Home
              </button>
            </Link>
          </div>
        </div>
      </>
    )
  }
}

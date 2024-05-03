import React, { Component } from 'react'
import "./ResultComponent.css"

export default class Resultpage extends Component{
  render() {
    return (
      <>
      <div className='result-box'>
         <h2 className='main'>Result</h2>
      <div className='result-board'>
         <h3 className='sentence'>You need more Practice!</h3>
         <h2 className='score'>Your score is 20%</h2>
         <div className='score-container'>
          <div>
            <p>Total Number of questions</p>
            <p>Number of attempted questions</p>
            <p>Number of correct answers</p>
            <p>Number of wrong answers</p>
          
          </div>
          <div>
            <p>15</p>
            <p>9</p>
            <p>3</p>
            <p>6</p>
          </div>
         </div>
   
      </div>
      <button className='play-again'>Play Again</button>
         <button className='go-back'>Back to home</button>
      </div>
      </>
    )
  }
}
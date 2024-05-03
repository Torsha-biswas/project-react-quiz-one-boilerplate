import React, {Component} from "react"
import "./QuizComponent.css"
import quizData from "../resources/quizData.jsx"

export default class Quizpage extends Component{
    constructor(){
        super()
        this.state={currIndex:0}
    }
    render(){
        return(
            <>
             <div className="main-container">
                <h2 className="questions">Questions</h2>
                <h3>{quizData[this.state.currIndex].question}</h3>
                <div className="options">
                    <div>{quizData[this.state.currIndex].optionA}</div>
                    <div>{quizData[this.state.currIndex].optionB}</div>
                    <div>{quizData[this.state.currIndex].optionC}</div>
                    <div>{quizData[this.state.currIndex].optionD}</div>
                </div>
                <div id="btn-container">
                <div className="btns">
                     <button  className="previous">previous</button>
                     <button  className="next">Next</button>
                     <button  className="quit">Quit</button>
                </div>
                </div>
             </div>
            </>
        ) 
    }
}
import React from "react";
import Homepage from "./components/HomeComponent"
import "./App.css";
import "./components/HomeComponent.css"
import Quizpage from "./components/QuizComponent"
import Resultpage from "./components/ResultComponent";


function App(){
  return(
     <div className="App">
      <Homepage />
        <Quizpage /> 
        <Resultpage />
     </div>
  )
}

export default App;
App.jsx
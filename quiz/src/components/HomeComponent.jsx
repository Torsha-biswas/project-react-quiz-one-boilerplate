import React, { Component } from 'react'
import "./HomeComponent.css"

export default class Homepage extends Component{
 render(){
    return(
        <>
        <div className='container'>
        <h2 className='quizz'>Quiz App</h2>
            <button className='play'>Play</button>
        </div>
        </>
    )
 }


}

Homepage.js
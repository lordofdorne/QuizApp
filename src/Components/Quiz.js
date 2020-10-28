import React, { useState } from 'react';
import getTenQuestions from '../helperFunctions/getTenQuestions'



const Quiz = () => {
  let questions = require('../Data/questions.json')
  questions = getTenQuestions(questions)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)



  const handleAnswers = () => {
    const nextQuestion = currentQuestion + 1

    if (nextQuestion < 10) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }

  }


  const handleCorrect = () => {
    setScore(score + 1)
    handleAnswers()
  }
  console.log(currentQuestion)
  return (


    <div className='app'>


      {showScore ? (
        <div className='score-section'>You scored {score} out of 10</div>
      ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{10}
              </div>
              <div className='question-text'>{questions[currentQuestion].question}</div>
            </div>
            <div className='answer-section'>
              {/* <ul> */}
              {questions[currentQuestion].incorrect.map((choices) => (
                <button onClick={handleAnswers}>{choices}</button>
              ))}
              <button onClick={handleCorrect}>{questions[currentQuestion].correct}</button>
              {/* </ul> */}
            </div>
          </>
        )}
    </div>
  );
}

export default Quiz
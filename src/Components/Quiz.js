import React, { useState } from 'react';
import getTenQuestions from '../helperFunctions/getTenQuestions'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import Stats from '../Components/Stats'


toast.configure()
const Quiz = () => {
  let questions = require('../Data/questions.json')
  questions = getTenQuestions(questions)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [stats, setStats] = useState([])


  const notifyWrong = () => {
    toast.error('Sorry! thats wrong!', { position: toast.POSITION.TOP_LEFT, autoClose: 1000 })
  }


  const notifyCorrect = () => {
    toast.success('Sucess! thats correct!', { position: toast.POSITION.TOP_RIGHT, autoClose: 1000 })
  }

  const handleAnswers = () => {
    notifyWrong()
    const nextQuestion = currentQuestion + 1


    if (nextQuestion < 10) {
      setCurrentQuestion(nextQuestion)
    } else {
      setStats(stats.push(score))
      setShowScore(true)
    }

  }


  const handleCorrect = () => {
    notifyCorrect()
    setScore(score + 1)

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < 10) {
      setCurrentQuestion(nextQuestion)
    } else {
      setStats(stats.push([score]))
      setShowScore(true)
    }

  }
  console.log(currentQuestion)
  console.log('PRoPPy', stats)
  return (


    <div className='app'>


      {showScore ? (
        <div>
          <div className='score-section'>You scored {score} out of 10</div>
          <div>
            {/* <Stats stats={[stats]} /> */}
          </div>
          <div>
            <button onClick={() => window.location.replace('/practice')} className="button">Play Again</button>
          </div>
        </div>
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
              {questions[currentQuestion].incorrect.map((choices, index) => (
                <button key={index} id="next" onClick={handleAnswers}>{choices}</button>
              ))}
              <button id="next" onClick={handleCorrect}>{questions[currentQuestion].correct}</button>
              {/* </ul> */}
            </div>
          </>
        )}
    </div>
  );
}

export default Quiz
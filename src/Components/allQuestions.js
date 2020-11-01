import React from 'react'


const allQuestions = () => {
  let questions = require('../Data/questions.json')

  return (
    <div className="questionList">
      {
        questions.map(question => {
          return (<div className="rows">
            <h2> - Question: {question.question}</h2>
          </div>
          )
        })
      }
    </div>
  )

}

export default allQuestions
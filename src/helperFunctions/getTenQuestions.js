import shuffle from './shuffle'

function getTenQuestions(arr) {
  arr = shuffle(arr)
  let questionBank = []
  for (let i = 0; i < arr.length; i++) {
    let question = arr[i]
    questionBank.push(question)

    if (!questionBank.includes(question) && questionBank.length < 10) {
      questionBank.push(question)
    }


  }
  return questionBank


}

export default getTenQuestions
// import Quiz from '../Components/Quiz'
// import React, { useStateMock } from 'react'
// import Enzyme from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// const questions = require('../Data/questions.json')

// Enzyme.configure({ adapter: new Adapter() })
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn()
// }))

// describe('Quiz', () => {
//   let wrapper
//   const setState = jest.fn()
//   const useStateSpy = jest.spyOn(React, 'useState')
//   useStateSpy.mockImplementation((init) => [init, setState])

//   beforeEach(() => {
//     wrapper = Enzyme.shallow(<Quiz {...questions} />)
//     useStateMock.mockImplementation(init => [init, setState])
//   })

//   afterEach(() => {
//     jest.clearAllMocks()
//   })
//   describe('Next Question', () => {
//     it('calls next question with +1', () => {
//       wrapper.find('#next').props().onClick()
//       expect(setState).toHaveBeenCalledTimes(1)
//     })
//   })
//   describe('show score', () => {
//     it('calls show score', () => {
//       wrapper.find('#score-section').find().onClick()
//       expect(setState).toBe(Boolean)
//     })
//   })

// })
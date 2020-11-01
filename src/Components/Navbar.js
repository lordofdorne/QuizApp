import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 style={{ fontSize: '75px' }}>Tandem Trivia</h1>
      <div>
        <Link to="/practice">Lets Get Started!</ Link>
        <Link to="/">Home</Link>

        <Link to="/all">All Questions</Link>

      </div>
    </div>
  )
}

export default Navbar
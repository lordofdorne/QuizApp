import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 style={{ fontSize: '100px' }}>Tandem Trivia</h1>
      <div>
        <Link to="/practice">Practice</ Link>
        <Link to="/">Home</Link>

      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Quiz from './Quiz'
import Navbar from './Navbar'
import Rounds from './Rounds'

const Home = () => {
  return (
    <main>
      <h1>
        Welcome To Tandem Trivia!
      </h1>
    </main>
  )
}

const Routes = () => {

  return (
    <Router>
      <div id="top-level-page">
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/practice" component={Quiz} />

          </Switch>

        </div>
      </div>
    </Router>

  )


}

export default Routes
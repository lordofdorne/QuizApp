import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Quiz from './Quiz'
import Navbar from './Navbar'
import Stats from './Stats'
import allQuestions from './allQuestions'


const Home = () => {
  return (
    <main>
      <h1 className="paragraph">
        About Tandem!
      </h1>
      <p className="paragraph">
        Giving everyone the opportunity to speak a language, any time, any place.
        There are many stages of learning a language. We start by picking up the basic vocabulary, progress to formulating simple sentences, and then wonder why on earth the grammar can’t just be simple for once. Somewhere down the line, we realize it’s time to talk with a native speaker and practice everything we’ve learned so far. That’s where language exchange or Tandem language learning comes in.
        Connecting with other people has never been so easy. Despite this, it's often hard to find the right language exchange partner, one who shares our interests and has similar language goals.
        What if there was a convenient and accessible way to connect with like-minded native speakers of the language you want to practice?
        Tandem was launched in 2015 by three friends on a mission to build a global language learning community that empowers everyone, everywhere to speak any language. Thanks to our international team of language hackers based in Berlin, we’ve come pretty far since then.
        Today, 10 million members from around the world use our web and mobile apps to help each other learn new languages via text, audio, and video chat. Join the Tandem community and you can speak any language too!


      </p>
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

            <Route exact path="/all" component={allQuestions} />

          </Switch>

        </div>
      </div>
    </Router>

  )


}

export default Routes
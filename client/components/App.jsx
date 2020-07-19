import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'
import EDA from './EDA'
import Bootcamp from './Bootcamp'
import SoloProject from './SoloProject'

const App = () => {
  return (
    <>
      <Router>
        <div className="navbar">
          <NavBar />
        </div>
      <header>
      <h1>Fai Songprasit</h1>
      <h2>Wed Developer</h2>
      </header>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/eda" component={EDA}/>
        <Route path="/bootcamp" component={Bootcamp}/>
        <Route path="/solo" component={SoloProject}/>
      </Router>
      <footer>
        <p>
          find out more:
        </p>
        <a href="https://github.com/fai-songprasit">
          <img src='../images/github.png' alt='github logo'/>
        </a>
        <a href="https://www.linkedin.com/in/fai-songprasit/">
          <img className="linkedin" src='../images/linkedin.png' alt='linkedin logo'/>
        </a>
      </footer>
    </>
  )
}

export default App

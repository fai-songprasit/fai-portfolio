import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'
import EDA from './EDA'
import SoloProject from './SoloProject'

//possibly at some stage make EDA, Personal project and 
//Group project a fade in and out routing exercise for nav
//include navbar somewhere on the left hand side??

const App = () => {
  return (
    <>
      <Router>
      <header>
      <h1>Fai Songprasit - <em>Portfolio</em></h1>
        <div className="navbar">
          <NavBar/>
        </div>
      </header>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/eda" component={EDA}/>
        <Route path="/solo" component={SoloProject}/>
      </Router>
    </>
  )
}

export default App

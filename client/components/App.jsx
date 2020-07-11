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
      <header>
      <h1>Fai Songprasit - <em>Portfolio</em></h1>
        <div className="navbar">
          <NavBar/>
        </div>
      </header>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/eda" component={EDA}/>
        <Route path="/bootcamp" component={Bootcamp}/>
        <Route path="/solo" component={SoloProject}/>
      </Router>
    </>
  )
}

export default App

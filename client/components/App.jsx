import React from 'react'
import Home from './Home'
import EDA from './EDA'

//possibly at some stage make EDA, Personal project and 
//Group project a fade in and out routing exercise for nav
//include navbar somewhere on the left hand side??

const App = () => {
  return (
    <>
      <h1>Welcome to Fai's Portfolio</h1>
      <Home />
      <EDA />
    </>
  )
}

export default App

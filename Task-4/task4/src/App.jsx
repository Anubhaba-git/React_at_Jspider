import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
  return (
    <div className='container'>
      <div className='component1 '>
        <Login/>
      </div>
      <div className="component2">
        <Signup/>
        <div className="circle1"></div>
        <div className="circle2"></div>  
        <div className="circle3"></div>  
        <div className="triangle"></div>  
      </div>
    </div>    
  )
}

export default App

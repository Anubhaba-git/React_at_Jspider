import React from 'react'
import  { useRef } from 'react';


const UncontrolledForm = () => {
    const usernameRef = useRef()
    const ageRef = useRef()
    
    const handleform =(e)=>{
        e.preventDefault()
        console.log(usernameRef.current.value)
        console.log(ageRef.current.value)
    }
  return (
    <div>
      <form onSubmit={handleform}>
        <label htmlFor="username">UserName:</label>
        <input type="text" id='username' ref={usernameRef} /><br /> <br />
        <label htmlFor="userage">Age:</label>
        <input type="text" id='userage' ref={ageRef} /><br /> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForm

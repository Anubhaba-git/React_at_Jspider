import React from 'react'
import { useRef } from 'react'

const UseRefHook = () => {
    const nameref = useRef()
    const bgref = useRef()
   const changeBlack =()=>{
    bgref.current.style.backgroundColor= 'black'
   }
   const changeWhite =()=>{
    bgref.current.style.backgroundColor= 'white'
   }
  return (
    <div ref={bgref} style={{height:'750px',width:'100%'}}>
      <button onClick={changeBlack}>Black</button>
      <button onClick={changeWhite}>White</button>
    </div>
  )
}

export default UseRefHook

import {useState} from "react"
import React from 'react'
import Schild from './Schild'

const Sparent = () => {
    
    const [count,setCount] = useState(0)
    console.log(count)
  return (
    <div>
        <h1>{count} in parent</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <Schild data={{count,setCount}}/>
    </div>
  )
}

export default Sparent

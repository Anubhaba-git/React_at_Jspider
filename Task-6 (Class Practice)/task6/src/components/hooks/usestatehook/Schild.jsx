import {useState} from "react"
import React from 'react'
import Sparent from './SgrandChild'
import SgrandChild from './SgrandChild'

const Schild = ({data:{count,setCount}}) => {
    // const [val,setVal] = useState(1)
    // console.log("Child")
  return (
    <div>
     <h1>{count}</h1>
     <button onClick={()=>{setCount(count+1)}}>update in child</button>
      {/* <SgrandChild/> */}
    </div>
  )
}

export default Schild

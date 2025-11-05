import React, { useState } from 'react'

const SpecialCase = () => {
    const [count,setCount]=useState(0)
    const increCount = ()=>{
        setCount((prevalue)=>prevalue+1)
        setCount((prevalue)=>prevalue+1)
        setCount((prevalue)=>prevalue+1)
    }
    const c1=()=>{
        setCount(count+1)
    }
    const c2=()=>{
        setCount(count+1)
    }
    const c3=()=>{
        setCount(count+1)
    }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increCount}>Submit</button>
      <button onClick={c1}>c1</button>
      <button onClick={c2}>c2</button>
      <button onClick={c3}>c3</button>
    </div>
  )
}

export default SpecialCase

import React, { useState } from 'react'


const UseStateHook = () => {
    const [count,setcount] = useState(0)
    console.log(count)
    // update by 1 
    const updateCount1 =() =>{
        setcount(count+1)
    }
    // update by 1 
    const updateCount3 =() =>{
        setcount(count+3)
    }
    // reset
    const reset =() =>{
        setcount(0)
    }
    // Decrement by 1
    const Decrement1 =() =>{
        setcount(count-1)
    }
    // Decrement by 3
    const Decrement3 =() =>{
        setcount(count-1)
    }

    console.log("Anubhab")
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={updateCount1}>Update count by 1</button>
      <button onClick={updateCount3}>Update count by 3</button>
      <button onClick={reset}>Reset</button>
      <button onClick={Decrement1}>Decrement by 1</button>
      <button onClick={Decrement3}> Decrement by 3</button>
    </div>
  )
}

export default UseStateHook

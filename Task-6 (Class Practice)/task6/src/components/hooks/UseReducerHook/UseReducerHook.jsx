import React, { useReducer, useState } from 'react'
// import {initialValue,reducer} from './CounterReducer'

const UseReducerHook = () => {
   let initialValue = {
    count:0,
    error:""
   }

// Reducer Function.
  function reducer (state,action){
    console.log(state)
    switch (action){
      case "increment":
        return {...state,count:state.count+1}
        
        case "decrement":
          return {...state,count:state.count-1}
          
        case "reset":
          return {...state,count:0}

        default:
            return {...state,error:"Something went wrong !!"} 
    }
  }

  const [value,dispatch]=useReducer(reducer,initialValue)
  console.log(value)


  if(value.error) return <p>{value.error}</p>
  return (
    <div>
      <h1>{value.count}</h1>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
      <button onClick={()=>dispatch("default")}>Default</button>
    </div>
  )
}

export default UseReducerHook

import React, { useReducer } from 'react'
import { initialStateValue, taskreducer } from './TaskReducer'

const UseReducerTask = () => {
  const [value,dispatch]= useReducer(taskreducer,initialStateValue)
  return (
    <div>
      
    </div>
  )
}

export default UseReducerTask

import React from 'react'
import Child from './Child'
import DefaultProps from './DefaultProps'

const Parent = () => {
    const userDetails ={
        username : "Anubahba",
        age : 22,
        address:{
            city:"jajpur",
            state:"odisha"
        }
    }
  return (
    <div>
        {/* Sending the data to child  component with the prop key  */}
      {/* <Child Data={userDetails}/> */}
      {/* Without prop key how to send prop data (It's work for only Object)  */}
      {/* <Child {...userDetails}/> */}
      <DefaultProps {...userDetails}/>
    </div>
  )
}

export default Parent

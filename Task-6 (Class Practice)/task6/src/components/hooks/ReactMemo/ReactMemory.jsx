import React, { useState } from 'react'
import ReactChild from './ReactChild'

const ReactMemory = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
        {/* in this the child is re render  */}
      <ReactChild data={count}/> 
        {/* in this the child will not re render  */}
      <ReactChild data="Hello memo"/>
    </div>
  )
}

export default ReactMemory

// react.memo is  Higher order component it is allow to re-render the child component when the previous props and new props are different.

import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallbackHook = () => {
    const [count,setCount]=useState(0)

    const demo = useCallback(()=>{
        console.log("demo")
    },[])
    
  return (
    <div>
        {count} <br />
         <Child data={demo}/>
        <button onClick={()=>setCount(count+1)}>click</button>
     
    </div>
  )
}

export default UseCallbackHook

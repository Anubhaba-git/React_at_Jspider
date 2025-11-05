import React, { useEffect, useState } from 'react'

const UseEffecctHook = () => {
    const [count,setCount]= useState(0)
    const [val,setVal] = useState(10)
    console.log('Independent Sttement')

    useEffect(()=>{
        console.log('useEffect without Dependency')
    })

    useEffect(()=>{
        console.log('useEffect with Empty Dependency')
    },[])

    useEffect(()=>{
        console.log('useEffect with val Dependency')
    },[val])

  return (
    <div>
      <h1>{count}</h1>
      <h1>{val}</h1>
      <button onClick={()=>setCount(count+1)}>update</button>
      <button onClick={()=>setVal(count+1)}>update val</button>
    </div>
  )
}

export default UseEffecctHook

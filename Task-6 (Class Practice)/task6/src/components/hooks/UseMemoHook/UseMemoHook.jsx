import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
  const [count,setCount] = useState(0)

  const calculate=()=>{
    let value= 0
    for(let i=1;i<=1000;i++){
      value+=i
    }
    return value
  }
  //! Without UseMemo.
  // const res = calculate()

  //! With the help of useMemo.
  const res = useMemo(()=>{
    return calculate()
  },[])
  console.log(res)
  return (
    <div>
      {count} <br />
      <button onClick={()=>setCount(count+1)}>
        click
      </button>
    </div>
  )
}

export default UseMemoHook

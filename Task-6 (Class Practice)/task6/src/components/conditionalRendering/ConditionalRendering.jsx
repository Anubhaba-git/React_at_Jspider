import {useState} from 'react'
import React from 'react'
import Conditiponal2 from './Conditiponal2'
import Conditional3 from './Conditional3'

const ConditionalRendering = () => {
    const [status,setStatus] = useState(false)
    // const [theme,setTheme] = useState(false)
  return (
    <div >
     {/* <button onClick={()=>setTheme(!theme)}>{theme?"Light":"Dark"}</button>
     <button onClick={()=>setStatus(!status)}>{status?"Close":"Open"}</button>
     {
        status?<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam veritatis, magnam similique eligendi eos illum nulla nihil porro cum facilis veniam doloremque repudiandae blanditiis iusto commodi omnis iure ex.</p>:""
     } */}

     {/* if else rendering  */}
     {/* <Conditiponal2 data={false}/> */}

     {/* && Rendering  */}
     <Conditional3 data={''}/>
    </div>
  )
}

export default ConditionalRendering

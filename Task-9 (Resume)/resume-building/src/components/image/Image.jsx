import React, { useState } from 'react'


const Image = () => {
    const [img,setImg] = useState(false)
  return (
    <div>
      <button onClick={()=>setImg(!img)} className='ImgBtn'>{img?"X":"ShowImg"}</button>
      {
        img?<img src={"https://files.idyllic.app/files/static/3960509?width=640&optimizer=image"} alt="myImg" className='img'/>:""
      }
    </div>
  )
}

export default Image

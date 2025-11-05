import React from 'react'
import myimg from "../../assets/Anubhab.jpg"
import { GiCamel } from "react-icons/gi";
import { GiMonkey } from "react-icons/gi";
import MustangVdo from "../../assets/mustang.mp4"
import ParoSong from "../../assets/paro.mp3"




const ImageAndIcons = () => {
  return (
    <div>
      <img src={myimg} alt="" style={{height:'200px',width:"200px"}}/>
      <video src={MustangVdo} playsInline autoPlay loop muted></video>
      <audio src={ParoSong} controls autoPlay loop muted></audio>
      <h1><GiCamel/></h1>
      <h1><GiMonkey size={200} color='red' /></h1>
    </div>
  )
}

export default ImageAndIcons

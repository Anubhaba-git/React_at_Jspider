import { useState } from 'react'
import React from 'react'
const colors = [
    { name: "Red", code: "#FF0000" },
    { name: "Green", code: "#008000" },
    { name: "Blue", code: "#0000FF" },
    { name: "Yellow", code: "#FFFF00" },
    { name: "Orange", code: "#FFA500" },
    { name: "Purple", code: "#800080" },
    { name: "Pink", code: "#FFC0CB" },
    { name: "Brown", code: "#A52A2A" },
    { name: "Gray", code: "#808080" },
    { name: "Black", code: "#000000" },
    { name: "PapayaWhip ", code: "#FFEFD5" },
    { name: "Cyan", code: "#00FFFF" },
    { name: "Magenta", code: "#FF00FF" },
    { name: "Lime", code: "#00FF00" },
    { name: "Indigo", code: "#4B0082" },
    { name: "Violet", code: "#EE82EE" },
    { name: "Turquoise", code: "#40E0D0" },
    { name: "Beige", code: "#F5F5DC" },
    { name: "Mint", code: "#98FF98" },
    { name: "Peach", code: "#FFDAB9" },
    { name: "Coral", code: "#FF7F50" },
    { name: "Teal", code: "#008080" },
    { name: "DarkSlateGray", code: "#2F4F4F" },
    { name: "MediumOrchid", code: "#BA55D3" }
]

const SectionTwo = () => {
    const [bgColor,setBgColor] = useState('black')
  return (
    <div className='section2'>
        <h3>Click any of the buttons below to change the background color of the paragraph:</h3>
      <div className="container">
        <p id='paragraph' style={{height:'250px',width:'99%',backgroundColor:'white',border:'2px solid black', color: bgColor,overflow:'hidden', padding:'10px',transition:'0.3s'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, deserunt. Harum deleniti omnis aspernatur, nihil fugiat quam at enim quos neque illum cupiditate officiis hic inventore ad veniam consectetur magnam culpa voluptates rerum? Ipsa unde rerum quas ea fugit laboriosam, provident asperiores amet quidem vero voluptate aliquid minus odio quo doloribus incidunt aliquam perferendis nobis libero at! Voluptas quibusdam ipsa atque praesentium laboriosam, pariatur, deleniti ducimus, recusandae in ipsam nobis tempora nesciunt autem quis rem obcaecati quisquam nemo velit error! Possimus asperiores, reiciendis tempore voluptas expedita cupiditate dolores explicabo odio, doloremque libero tenetur alias aut similique neque sint iste, animi quibusdam temporibus autem ipsam. Eos perspiciatis, quisquam obcaecati animi omnis ipsum voluptatibus veritatis a tempora corrupti, atque doloremque libero! Voluptatibus unde et id tenetur sint sit dolores suscipit, sequi necessitatibus? Vero dolorum, commodi possimus quaerat deserunt quasi aspernatur. Molestiae eum iusto ex vero corrupti quia fugit, quidem rerum voluptatum corporis nesciunt nobis ipsum mollitia voluptas culpa vel natus recusandae numquam ea, fugiat nihil. Sequi voluptas quia qui nostrum, delectus perspiciatis magni provident vitae quae cumque, eligendi harum repudiandae, voluptates id. </p>
      </div>

      {colors.map((color,index)=>(
        // Color Picker Button 
        <button 
        key={index}
        onClick={()=>setBgColor(color.code)}
        style={{
            height:'40px',
            width:'120px',
            backgroundColor:color.code,
            margin:'5px',
            padding:'10px',
            border:'1px solid black',
            color:'white',
            cursor:'pointer',
            borderRadius:'15px'
        }}
        >
        {color.name}
        </button>        
      ))}

      {/* Reset Button  */}
      <button className='Reset1'
      onClick={()=>setBgColor('black')}
      style={{
        height:'40px',
        width:'120px',
        backgroundColor:'DeepPink',
        margin:'5px',
        padding:'10px',
        border:'2px solid black',
        color:'white',
        cursor:'pointer',
        position: 'absolute',
        bottom: '20px',
        left: '70%',
        borderRadius:'15px'
    }}
    >
    RESET
    </button>
    </div>
  )
}

export default SectionTwo

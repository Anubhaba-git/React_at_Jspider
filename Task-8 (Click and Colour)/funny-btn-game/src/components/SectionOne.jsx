import { useState } from 'react';
import React from 'react'
// Array Of Colors 
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
    { name: "Gold", code: "#FFD700" },
    { name: "Silver", code: "#C0C0C0" },
    { name: "Plum", code: "#8E4585" },
    { name: "Crimson", code: "#DC143C" },
    { name: "Navy", code: "#000080" },
    { name: "Chocolate", code: "#D2691E" },
    { name: "Lavender", code: "#E6E6FA" },
    { name: "Aquamarine", code: "#7FFFD4" },
    { name: "Salmon", code: "#FA8072" },
    { name: "DarkGreen", code: "#006400" },
    { name: "DarkRed", code: "#8B0000" },
    { name: "Khaki", code: "#F0E68C" },
    { name: "TurquoiseBlue", code: "#00C5CD" },
    { name: "SteelBlue", code: "#4682B4" },
    { name: "RosyBrown", code: "#BC8F8F" },
    { name: "DarkOrange", code: "#FF8C00" },
    { name: "SlateGray", code: "#708090" },
    { name: "MediumPurple", code: "#9370DB" },
    { name: "MediumSeaGreen", code: "#3CB371" },
    { name: "LimeGreen", code: "#32CD32" },
    { name: "Firebrick", code: "#B22222" },
    { name: "Orchid", code: "#DA70D6" },
    { name: "SlateBlue", code: "#6A5ACD" },
    { name: "RoyalBlue", code: "#4169E1" },
    { name: "LightCoral", code: "#F08080" },
    { name: "CornflowerBlue", code: "#6495ED" },
    { name: "DarkSlateGray", code: "#2F4F4F" },
    { name: "MediumOrchid", code: "#BA55D3" }
]
  
const SectionOne = () => {
    const [bgColor,setBgColor] = useState('white')
  return (
    <div style={{ backgroundColor: bgColor}} className='section1'>
      <h3>Click Any Colour Button To Change The Background :</h3>
      {colors.map((color,index)=>(
        // Colour Picker Button 
        <button 
        key={index}
        onClick={()=>setBgColor(color.code)}
        style={{backgroundColor:color.code}}
        className='color_picker1'>
        {color.name}
        </button>        
      ))}

      {/* Reset Button  */}
      <button className='Reset1'
      onClick={()=>setBgColor('white')}>
    RESET
    </button>
    </div>
  )
}

export default SectionOne


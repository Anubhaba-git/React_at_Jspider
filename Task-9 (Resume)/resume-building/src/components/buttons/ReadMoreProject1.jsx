import React from 'react'
import { useState } from 'react'
import ReadMoreProject2 from './ReadMoreProject2'

const ReadMoreProject1 = () => {
    const [project1,setProject1] = useState(false)
  return (
    <div className='sectionFourth'>
       <button onClick={()=>setProject1(!project1)} className='project1Btn'>{project1?"Hide Project1":"Show Project1"}</button>
       {
        project1 && (
            <div>
                <h3>PROJECTS:</h3>
                <strong>Simon Says Game:</strong>
                <p>Developed a meomory-based game challenging users to follow a sequence of colors,improving javascript programming skills and logic implementation. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate eveniet magni ipsa repudiandae, est officiis qui blanditiis! At, dolorem ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae nobis alias voluptate nisi minus sequi adipisci deleniti corrupti saepe? </p>
                <ReadMoreProject2/>
            </div>
            
        )
       }
    </div>
  )
}

export default ReadMoreProject1

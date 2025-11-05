import React from 'react'
import { useState } from 'react'
import Skills from './Skills'

const ReadMoreProject3 = () => {
    const [project3,setProject3] = useState(false)
  return (
    <div className='sectionFifth'>
       <button onClick={()=>setProject3(!project3)} className='project2Btn'>{project3?"Hide Project3":"Show Project3"}</button>
       {
        project3 && (
            <div className='spacex'>
                <strong>TO-DO APP:</strong>
                <p>Built a fully functional and responsive To-Do application using React.js, implementing state management and props to enable users to add, delete, and mark tasks as completed, while showcasing clean component-based architecture, interactive UI design, and efficient handling of user inputs for improved task management experience. while demonstrating proficiency in component-based architecture and front-end development best practices. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae nobis alias voluptate nisi minus sequi adipisci deleniti corrupti saepe? </p>
                {/* <Skills/> */}
            </div>
        )
       }
    </div>
  )
}

export default ReadMoreProject3

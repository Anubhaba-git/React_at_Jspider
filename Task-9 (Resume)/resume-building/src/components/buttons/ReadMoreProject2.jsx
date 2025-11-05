import React from 'react'
import { useState } from 'react'
import ReadMoreProject3 from './ReadMoreProject3'

const ReadMoreProject2= () => {
    const [project2,setProject2] = useState(false)
  return (
    <div className='sectionFifth'>
       <button onClick={()=>setProject2(!project2)} className='project2Btn'>{project2?"Hide Project2":"Show Project2"}</button>
       {
        project2 && (
            <div className='spacex'>
                <strong>SPACEX:</strong>
                <p>Designed and developed a fully responsive SpaceX website clone using React.js, leveraging props to build modular and reusable components that dynamically render launch data, mission details, and UI sections, effectively replicating the structure and style of the original site while demonstrating proficiency in component-based architecture and front-end development best practices. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae nobis alias voluptate nisi minus sequi adipisci deleniti corrupti saepe? </p>
               <ReadMoreProject3/><br />
            </div>
        )
       }
    </div>
  )
}

export default ReadMoreProject2

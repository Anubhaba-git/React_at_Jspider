import React from 'react'
import { useState } from 'react'

const Hobbies = () => {
    const [hobby,setHobby] = useState(false)
  return (
    <div className='hobby_section'>
        <button onClick={()=>setHobby(!hobby)} className='hoby_btn'>{hobby?"Hide Hobby":"Show Hobby"}</button>
        {
            hobby && (
                <div className='my_hobby'>
                    <h3>HOBBIES:</h3>
                    <ul>
                        <li> - Researching tech trends</li>
                        <li> - Listening to music</li>
                        <li> - Reading books</li>
                        <li> - Photography</li>
                        <li> - Gym workouts</li>
                        <li> - Traveling</li>
                        <li> - Cycling</li>
                        <li> - Gaming</li>
                        <li> - Coding</li>
                        <li> - Yoga</li>
                    </ul>
                </div>
            )
        }
    </div>
  )
}

export default Hobbies

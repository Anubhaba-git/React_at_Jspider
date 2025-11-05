import React from 'react'
import { useState } from 'react'

const Skills = () => {
    const [skill,setSkill] = useState(false)
  return (
    <div className='skillsection'>
        <button onClick={()=>setSkill(!skill)} className='skillBtn'>{skill?"Hide Skills":"Show Skills"}</button>
        {
            skill && (
                <div className='skills'>
                    <h3>TECHNICAL SKILLS:</h3>
                    <ul>
                        <li><strong>Programming Language:</strong> Java, Python</li>
                        <li><strong>Frontend Development:</strong> HTML, CSS, JavaScript, TypeScript</li>
                        <li><strong>Framework:</strong> React, Bootstrap, Tailwind, Next.js</li>
                        <li><strong>Backend:</strong> Node.js, Express.js</li>
                        <li><strong>Database:</strong> SQL, MongoDB, Firebase</li>
                        <li><strong>Version Control:</strong> Git, GitHub</li>
                        <li><strong>Tools & Platforms:</strong> VS Code, Postman, Netlify, Vercel</li>
                    </ul>
                </div>
            )
        }
    </div>
  )
}

export default Skills

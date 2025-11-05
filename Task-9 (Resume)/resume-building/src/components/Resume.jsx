import React from 'react'
import Image from './image/Image'
import ReadMoreProject1 from './buttons/ReadMoreProject1'
import Hobbies from './buttons/Hobbies'
import Skills from './buttons/Skills'
import { useState } from "react"

const Resume = () => {
  const [summary,setSummary] = useState(false)
  return (
    <div className='mainsection'>
        {/* First Section  */}
        <div className="sectionOne">
            <div className="sectionOne_left">
                <h2>ANUBHABA SAHANI</h2>
                <p><strong>Bhubaneswar,Odisha |</strong><strong> P: </strong>+91 7327822964 <strong>| E:</strong>anubhabasahani87@gmail.com</p>
                <p><strong>LinkedIn:</strong><a href="linkedin.com/in/anubhab-sahani">linkedin.com/in/anubhab-sahani</a> <strong>| GitHub:</strong><a href="github.com/Anubhaba-git">github.com/Anubhaba-git</a>
                </p>
            </div>
            <div className="sectionOne_right">
              <Image/>
            </div>         
        </div><hr /><hr />

       {/* (Second Section) Professional Summary  */}
       <div className="sectionTwo">
            <h3>Professional Summary:</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam sequi maiores rem ullam consequuntur quia laborum neque delectus sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus, eligendi facilis fugit, eos aliquam fugiat ab  ipsam voluptatibus cumque asperiores optio quis praesentium amet, repellendus unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, perspiciatis pariatur consequuntur debitis atque ducimus
                    {!summary && "... "}
                    {!summary && (
                      <span
                        onClick={() => setSummary(true)}
                        style={{ color: "blue", cursor: "pointer" }}
                      >
                        Read more
                      </span>
                    )}
                      {summary && (
                        <>
                          Tempora aliquam tempore numquam necessitatibus commodi nihil molestiae velit ut magnam quod alias, optio ipsum nesciunt corporis tenetur. Sint corrupti necessitatibus rerum reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusamus?
                          <span
                            onClick={() => setSummary(false)}
                            style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
                          >
                            Read less
                          </span>
                        </>
                      )}
                </p>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam sequi maiores rem ullam consequuntur quia laborum neque delectus sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus, eligendi facilis fugit, eos aliquam fugiat ab ipsam voluptatibus cumque asperiores optio quis praesentium amet, repellendus unde. Tempora aliquam tempore numquam necessitatibus commodi nihil molestiae velit ut magnam quod alias, optio ipsum nesciunt corporis tenetur.
            <span onClick={()=>setSummary(!summary)} style={{color:"blue",cursor:"pointer"}}>{!summary?"Readmore":"Readless"}
              <div>
                {
                  summary?"Tempora aliquam tempore numquam necessitatibus commodi nihil molestiae velit ut magnam quod alias, optio ipsum nesciunt corporis tenetur. Sint corrupti necessitatibus rerum reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.":""
                }
              </div>
            </span>
            </p>  */}
       </div><hr /><hr />

       {/* (Third Section) Education  */}
       <div className="sectionThird">
        <h3>EDUCATION:</h3>
            {/* MASTERS  */}
            <p><strong>Unietd School Of Business Management</strong>- Bhubaneswar,Odisha</p>
            <p>Master Of Computer Application (Computer Science)</p>
            <p><strong>CGPA:</strong> 9.25 (Expected May 2025)</p>

            {/* GRADUATION  */}
            <p><strong>Baba Bhairabananda Mahavidyalaya</strong>- Jajpur,Odisha</p>
            <p>Bachelor of science (Mathematics)</p>
            <p><strong>CGPA:</strong> 8.19 (Aug 2020 - Jul 2023)</p>

            {/* INTERMEDIATE  */}
            <p><strong>Bajragiri Higher Secondary School</strong>- Jajpur,Odisha</p>
            <p>Intermediate of science</p>
            <p><strong>Percantage:</strong> 68% (2018 - 2020)</p>

            {/* MATRICULATION  */}
            <p><strong>Udayabata High School</strong>- Patunia,Jajpur</p>
            <p><strong>Percantage:</strong> 64% (2018)</p>
       </div><hr /><hr />

       {/* (Fourt Section) Project  */}
       <ReadMoreProject1/> 
       <hr /><hr /> 
       <Skills/> 
       <hr /><hr />
       <Hobbies/>              
    </div>
  )
}

export default Resume

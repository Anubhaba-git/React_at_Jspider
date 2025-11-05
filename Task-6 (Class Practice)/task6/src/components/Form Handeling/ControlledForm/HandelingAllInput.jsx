import React, { Fragment, useState } from 'react';

const HandelingAllInput = () => {
  const [Hobbies, setHobbies] = useState([]);

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbies([...Hobbies, value]);
    } else {
      setHobbies(Hobbies.filter((hobby) => hobby !== value));
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Selected Hobbies:", Hobbies);
    setHobbies([]); // reset to empty array after submit
  };

  const hobbiesarr = ['a', 'b', 'c', 'd', 'e', 'f'];

  return (
    <div>
      <form onSubmit={handleForm}>
         {/* //! For radio box. */}
//         {/* <label htmlFor="gender">Gender  :</label><br />
//         <input type="radio" name="gender" id=""  value="male" onChange={handleInput} checked = {gender === "male"}/>Male
//         <input type="radio" name="gender" id="" value="female" onChange={handleInput} checked = {gender === "female"}/>Female
//         <input type="radio" name="gender" id="" value="others" onChange={handleInput} checked = {gender === "others"}/>Others
//         <br /><br />
//         <button>Submit</button>
//         <p>Your Gender is: <strong>{gender}</strong></p> */}

//         {/* //! For Check box */}
//         {/* <label htmlFor="">Hobbies:</label><br />
//         <input type="checkbox" value="cricket" onChange={handleCheckbox} checked={Hobbies.includes("cricket")}/>cricket
//         <input type="checkbox" value="travelling" onChange={handleCheckbox} checked={Hobbies.includes("travelling")}/>Travell
//         <input type="checkbox" value="eating" onChange={handleCheckbox} checked={Hobbies.includes("eating")}/>Eat
//         <input type="checkbox" value="riding" onChange={handleCheckbox} checked={Hobbies.includes("riding")}/>Riding
//         <input type="checkbox" value="sleeping" onChange={handleCheckbox} checked={Hobbies.includes("sleeping")}/>Sleeping
//         <br /><br />
//         <button>Submit</button> */}
        <label>Hobbies:</label><br />
        {
          hobbiesarr.map((hobbie, index) => {
            return (
              <Fragment key={index}>
                <input
                  type="checkbox"
                  onChange={handleCheckbox}
                  value={hobbie}
                  checked={Hobbies.includes(hobbie)}
                />
                {hobbie}
                <br />
              </Fragment>
            );
          })
        }
        <br />
        <button type="submit">Submit</button>
        <p><strong>Selected Hobbies:</strong> {Hobbies.join(', ')}</p>
      </form>
    </div>
  );
};

export default HandelingAllInput;

// import React, { Fragment, useState } from 'react'

// const HandelingAllInput = () => {
//     const [Hobbies,setHobbies]=useState("")

//     const handleCheckbox=(e)=>{
//         // const {name,value} = useState("")
//         const {value,checked} = e.target
//         if(checked){
//             setHobbies([...Hobbies,value])
//         }else{
//             setHobbies(Hobbies.filter((hobby)=>hobby!= value))            
//         }
//     }

//     const handleForm = (e) =>{
//         e.preventDefault()
//         console.log(Hobbies)
//         setHobbies([""])
//     }

//     const hobbiesarr = [ "a","b","c","d","e","f"]
//   return (
//     <div>
//      <form onSubmit={handleForm}>
//         {/* //! For radio box. */}
//         {/* <label htmlFor="gender">Gender  :</label><br />
//         <input type="radio" name="gender" id=""  value="male" onChange={handleInput} checked = {gender === "male"}/>Male
//         <input type="radio" name="gender" id="" value="female" onChange={handleInput} checked = {gender === "female"}/>Female
//         <input type="radio" name="gender" id="" value="others" onChange={handleInput} checked = {gender === "others"}/>Others
//         <br /><br />
//         <button>Submit</button>
//         <p>Your Gender is: <strong>{gender}</strong></p> */}

//         {/* //! For Check box */}
//         {/* <label htmlFor="">Hobbies:</label><br />
//         <input type="checkbox" value="cricket" onChange={handleCheckbox} checked={Hobbies.includes("cricket")}/>cricket
//         <input type="checkbox" value="travelling" onChange={handleCheckbox} checked={Hobbies.includes("travelling")}/>Travell
//         <input type="checkbox" value="eating" onChange={handleCheckbox} checked={Hobbies.includes("eating")}/>Eat
//         <input type="checkbox" value="riding" onChange={handleCheckbox} checked={Hobbies.includes("riding")}/>Riding
//         <input type="checkbox" value="sleeping" onChange={handleCheckbox} checked={Hobbies.includes("sleeping")}/>Sleeping
//         <br /><br />
//         <button>Submit</button> */}
//         {/* {
//             hobbiesarr.map((hobbie,index))=>{
//                 return(
//                     <Fragment key={index}>
//                         <input type="checkbox"  onChange={handleCheckbox} value={hobbie} checked={Hobbies.includes(hobbie)}/>{hob}
//                     </Fragment>
//                 )
//             }
//         } */}

                
//      </form>
    
//     </div>
//   )
// }

// export default HandelingAllInput

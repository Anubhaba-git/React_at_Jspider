import React from 'react'
import {useState} from 'react'

const ControlledFormValidation = () => {
    const [data,setData] = useState("")
    const [errors,setErrors] = useState(false)

    const {username} = data //object destructuring.

    // handleInput fuction for targeting the input.
    const handleInput = (e) =>{
        const{name,value}=e.target
        setData({...data,[name]:value})
    }

    // handleForm function for form submit.
    const handleForm=(e)=>{
        e.preventDefault()
        if(username){
            alert("Everything Fine")
            setErrors(null)
            setData({
                username:""
            })
        }else{
            setErrors(true)
        }
    }
    console.log(errors)

  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="username" onChange={handleInput} value={username} />
        {errors && <p style={{color:'red'}}>Please Enter Your Name</p>}
        <br />
        <button>Submit</button>
      </form>
      <h1>{username}</h1>
    </div>
  )
}

export default ControlledFormValidation

import { useState } from "react"
const Usestate = () =>{
    // Declaring The Details 
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [mail,setMail] = useState("")
    const [gender,setGender] = useState("")
    const [phone,setPhone] = useState("")
    // const [status,setStatus] = useState("")
    const [address,setAddress] = useState("")
    const [clear,setClear] = useState("")

    const updateName =()=>{
        const newName = prompt("Enter Your Name:")
        setName (newName)
    } 
    const updateAge =()=>{
        const newAge = Number(prompt("Enter Your Age:"))
        setAge (newAge)
    } 
    const updateMail =()=>{
        const newMail = prompt("Enter Your Mail:")
        setMail (newMail)
    } 
    const updateGender =()=>{
        const newGender = prompt("Enter Your Gender:")
        setGender(newGender)
    } 
    const updatePhone =()=>{
        const newPhone = Number(prompt("Enter Your Phone No:"))
        setPhone(newPhone)
    } 
    const updateAddress =()=>{
        const newAddress = prompt("Enter Your Address:")
        setAddress(newAddress)
    } 
    const updateClear =()=>{
        setName("");
        setAge("");
        setMail("");
        setGender("");
        setPhone("");
        setAddress("");
    } 
        
    return(
        <div>
            <h2>Your Details:</h2>
            {/* NAME  */}
            <button onClick={updateName}>Name:</button>
            <p><strong>{"Name: " + name}</strong></p>
            {/* AGE  */}
            <button onClick={updateAge}>Age:</button>
            <p><strong>{"Age: " + age}</strong></p>
            {/* MAIL  */}
            <button onClick={updateMail}>Mail:</button>
            <p><strong>{"Email: " + mail}</strong></p>
            {/* GENDER  */}
            <button onClick={updateGender}>Gender:</button>
            <p><strong>{"Gender: " + gender}</strong></p>
            {/* PHONE  */}
            <button onClick={updatePhone}>Phone:</button>
            <p><strong>{"Phone: " + phone}</strong></p>
            {/* ADDRESS  */}
            <button onClick={updateAddress}>Address:</button>
            <p><strong>{"Address: " + address}</strong></p>
            {/* RESET  */}
            <button onClick={updateClear}>RESET</button>
        </div>
    )
}
export default Usestate
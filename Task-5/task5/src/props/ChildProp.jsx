import React from 'react'

const ChildProp = (props) => {
    console.log("This is "+props.Boolean)
    console.log("This is "+props.Null)
    console.log("This is "+props.Undefined)
    const { Details } = props; //Object Destructuring.
  return (
    <div>
      <h2> {props.heading1} </h2>
      <h2>[STRING] - {props.String} </h2>
      <h2>[NUMBER] -  {props.Number} </h2>
      <h2>[BIGINT] - {props.BigInt} </h2>
      <h2> {props.heading2} </h2><br />
      <h2> {props.heading3} </h2>
      <h2>[ARRAY] : {props.Array} </h2>   
      <h2>[OBJECT]:</h2> 
      <h3>My Details:</h3>
      <p>Name: {Details.Name}</p>
      <p>Age: {Details.Age}</p>
      <p>Location: {Details.Location}</p>
      <p>Email: {Details.email}</p>
      <p>Phone: {Details.phone}</p>
      <h2>[FUNCTION] <p>{props.Function()}</p> </h2>
      </div>  
  )
}

export default ChildProp

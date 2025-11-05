import React from 'react'

const Conditional3 = (props) => {
    // const data = true
    // const Name = "Anubhaba"
    // const wife = undefined
    const money = null
  return (
    <div>
      {/* <h1>Hello World</h1> */}

      {/* Short circuit OR operator  */}
      {
        // data && <h1>This content will appear when the data is true</h1>
      }

      {/* Short circuit OR operator  */}
      {/* <h1>{Name || "Defaullt Name"}</h1> */}

      {/* Nullish Operator  */}
      {/* <h1>{wife ?? "Choose one"}</h1> */}

      {/* Optional Chaining  */}
      {
        props.data?.map((ele)=>{
         return(
            <h2>{ele}</h2>
         )
      })
      }
    </div>
  )
}

export default Conditional3

import React from 'react'
import ChildProp from './ChildProp'

const ParentProp = () => {
    // PRIMITIVE DATA TYPES 
    const heading1 = "1.These are the primitive data types:"
    const String = " Anubhaba Sahani !!"
    const Number = 777
    const BigInt = 7232145236479964553
    const Boolean = true
    const Null = null
    const Undefined = undefined
    const heading2 = "- For Null,Undefined and Boolean value check console:"    

    // NON-PRIMITIVE DATA TYPES 
    const heading3 = "2.These are the non-primitive data types:"
    const MyDetails = {
        Name:"Anubhaba",
        Age:22,
        Location:"Odisha",
        email: "anubhabasahani87@gmail.com",
        phone: "+91-7327822964"
    }
    const arr = ['Anubhaba'," - ",'Sundari'," - ",'Leela'," - ",'Mala']
    // FUNCTION 
    const Anubhab= () =>{
        return "This is function !!"
    }
    
  return (
    <div>
      <ChildProp 
      heading1={heading1}
      String={String}
      Number={Number}
      BigInt={BigInt}
      heading2={heading2}
      Boolean={Boolean}
      Null={Null}
      Undefined={Undefined}
      heading3={heading3}
      Array={arr}
      Function={Anubhab}
      Details={MyDetails}
    />
    </div>
  )
}

export default ParentProp

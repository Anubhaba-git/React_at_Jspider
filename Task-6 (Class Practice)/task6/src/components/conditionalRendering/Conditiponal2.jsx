import React from 'react'

const Conditiponal2 = (props) => {
  if(props.data == true){
        return (
        <div>
            <h1>This content is true block</h1>
        </div>
        )   
    }else{
        return (
        <div>
            <h1>This content is true block</h1>      
        </div>
    )
  }
}

export default Conditiponal2

import React, { useState } from 'react'

const Card = () => {
  const items = [{},{},{},{},{},{}]
  const {cartItem,setCartItem}=useState(cart)
  return (
    <div className='cards'>
      {
        items.map(()=>{
          return(
            <div className="card">
              <button onClick={()=>setCartItem(cartItem+1)}>Add to cart</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card

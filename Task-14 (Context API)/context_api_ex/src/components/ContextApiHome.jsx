import React, { createContext, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Cards from './MainContainer/Cards'
import {CartContext} from "./CartContext"

// export const CartProvider = createContext()

const ContextApiHome = () => {
  const [cart,setCart]=useState([])


  return (
    <div>
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <Cards />
    </CartContext.Provider>
    </div>
  )
}

export default ContextApiHome

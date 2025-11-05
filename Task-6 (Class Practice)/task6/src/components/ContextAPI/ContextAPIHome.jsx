import React, { createContext } from 'react'
import Russian from './Russian'
import Thailand from './Thailand'

// Here Money is a Component which create a context or space. 
export const Money = createContext()

const ContextAPIHome = () => {
    // here paisa is the data which will be used.
    const paisa = 6000
  return (
    <div>
      <Money.Provider value={paisa}>
        <Russian/>
        <Thailand/>
      </Money.Provider>      
    </div>
  )
}

export default ContextAPIHome

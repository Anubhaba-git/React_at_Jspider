import React, { useContext } from 'react'
import { Money } from './ContextAPIHome'

const Russian = () => {
    const myPackage = useContext(Money)
    console.log(myPackage)
  return (
    <div>
      
    </div>
  )
}

export default Russian

import React, { useContext } from 'react'
import { Money } from './ContextAPIHome'

const Thailand = () => {
    const myPackage = useContext(Money)
    console.log(myPackage)

  return (
    <div>
      
    </div>
  )
}

export default Thailand

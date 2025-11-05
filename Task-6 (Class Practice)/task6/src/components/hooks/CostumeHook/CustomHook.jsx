import React from 'react'
import { useFetch } from './useFetch'

const CustomHook = () => {
  const [l1,d1] = useFetch("https://api.github.com/users")
  const [l2,d2] = useFetch("https://fakestoreapi.com/products")
  console.log(d1)
  console.log(d2)
  return (
    <div>
      <h1>CustomHooks</h1>
    </div>
  )
}

export default CustomHook

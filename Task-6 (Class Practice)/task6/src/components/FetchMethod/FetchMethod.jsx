import React, { useEffect, useState } from 'react'
import axios from "axios"

const FetchMethod = () => {
    const [userData,setUserData] = useState([])
    //!Only fetch with then and catch
    // const fetchData=()=>{
    //     const result = fetch("https://fakestoreapi.com/products")
    //     result.then((data)=>{
    //         const res = data.json()
    //         res.then((finalResult)=>{
    //             setUserData(finalResult)
    //         })
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }

    //! fetch with async and await
    // const fetchData = async()=>{
    //     const data = await fetch("https://fakestoreapi.com/products")
    //     const result = await data.json()
    //     setUserData(result)
    // }

    //! axios with async and await
    // axios is a library to use it we have to
    //  install it. (i.e npm i axios)
    const fetchData = async()=>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(data)
    }

    useEffect(()=>{
        fetchData()
    },[])
    console.log(userData)
  return (
    <div>
      FetchMethod
    </div>
  )
}

export default FetchMethod

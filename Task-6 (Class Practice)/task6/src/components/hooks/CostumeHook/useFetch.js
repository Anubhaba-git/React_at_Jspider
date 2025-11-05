import { useEffect, useState } from "react"

export function useFetch(url){
    const [fetchData,setFetchData] = useState()
    const [loading,setLoading] = useState(true)
    // const [error,setError] = useState(null)

    const fdata = async () =>{
        try {
            const {data} = await axios.get(url)
            setFetchData(data)
            setLoading(false)
        } catch (error) {
            setError(error.message)
        }
    }
    useEffect(()=>{
        fdata()
    },[])
    return [loading,error,fetchData]
}
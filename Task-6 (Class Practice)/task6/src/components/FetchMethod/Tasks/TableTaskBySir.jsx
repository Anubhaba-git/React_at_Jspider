
import React from 'react';
import { useState, useEffect } from 'react';

const TableTaskBySir = () => {
  const [users, setUsers] = useState([]);
  const[person,setPerson]=useState("")
  const[filterData,setFilterData]=useState([])
  const [loading,setLoading]=useState(true)
  const[error,setError]=useState(null)

  const fetchData = async () => {
    try {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const finaldata = await data.json();
    setUsers(finaldata);
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInput=(e)=>{
    const {value}=e.target 
    setPerson(value)
  }
  
  useEffect(()=>{
    // filter logic
    if(!person){
      setFilterData(users)
    }
    else{
      const result=users.filter((user)=>user.name.includes(person))
      setFilterData(result)
    }
  },[users,person])
  if(loading)return <h1>loading......</h1>
  if(error) return <h1>{error}</h1>
  return (
    <div>
        <input type="search" placeholder='search the person' onChange={handleInput} />             
      <table border="1">
       <thead>
         <tr>
          <th>S.NO</th>
          <th>Name</th>
          <th>Email</th>
          <th>NickName</th>
          <th>City</th>
        </tr>
       </thead>
        <tbody>
            {
              filterData.length===0?<tr><td colSpan={5}>No Data Found</td></tr>:filterData.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.address.city}</td>
            </tr>
          );
        })
            }
        </tbody>
      </table>
    </div>
  )
}

export default TableTaskBySir;
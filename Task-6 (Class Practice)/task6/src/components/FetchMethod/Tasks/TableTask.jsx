import { useEffect, useState } from 'react';
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const fetchData = async () => {
    const { data } = await axios.get("https://api.escuelajs.co/api/v1/users");
    setUsers(data);
    console.log(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <input type="search" placeholder='Search name here............' value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} style={{padding:'10px', width:'35%' , borderRadius:'10px'}}
      />

      <table border={1}>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td><img src={user.avatar} alt="avatar" width="100" /></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>Not Found!!</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
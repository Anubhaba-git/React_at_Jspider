import React, { useState, useEffect } from 'react';

const DropdownSearch = () => {
  const [users, setUsers] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from API
  const fetchData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle selection change
  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedName(value);
    if (value === '') {
      setFilterData([]);
    } else {
      const result = users.filter((user) => user.name === value);
      setFilterData(result);
    }
  };

  // Loading/Error states
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div >
        <select value={selectedName} onChange={handleSelect} style={{ padding: '10px', borderRadius: '5px' }}>
        <option value="">-- Select Name --</option>
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>    

      <table border="1" style={{ width: '100%' }}>
        <thead>
          <tr style={{ color: 'Green' }}>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Nickname</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {filterData.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', color:"red" }}>No Data Found !!</td>
            </tr>
          ) : (
            filterData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.address.city}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DropdownSearch;

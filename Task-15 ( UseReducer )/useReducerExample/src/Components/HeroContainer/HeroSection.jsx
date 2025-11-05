import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import './Hero.css';
import Loading from '../LoadingAnimation/Loading';

// Initial state
const initialState = {
  users: [],
  loading: true,
  error: '',
  friends:[]
}

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'fetch_success':
      return { ...state, users: action.payload, loading: false, error: '' }
    case 'fetch_error':
      return { ...state, users: [], loading: false, error: 'Failed to fetch data' }
    case 'remove_item':
      return {...state,users: state.users.filter((user)=>user.id!==action.payload)}
    case 'add_friend':
      alert("Friend Request Sent !!")
      return state;
    case 'friendList':
      return {...state,friends:[...state.friends,action.payload]}
    default:
      return state;
  }
}


const HeroSection = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Fetch the Data from API.
  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://api.github.com/users")
      // if everything is fine then call the dispatch
      dispatch({ type: 'fetch_success', payload: data })
    } catch (error) {
      dispatch({ type: 'fetch_error',payload:error.maessage})
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="card-container">
      {state.loading && <Loading/>}
      {state.error && <p className="error">{state.error}</p>}
      {state.users.map(user => (
        <div key={user.id} className="user-card">
          <img src={user.avatar_url} alt={user.name} className="user-avatar" />
          <h3 className="user-name">{user.login}</h3>
          {/* <p className="user-email">Email: {user.email}</p>
          <p className="user-role">Role: {user.role}</p> */}
          {/* Buttons  */}
          <div className="btn">
          <button className="dlt-frnd" onClick={()=> dispatch({type:"remove_item",payload:user.id})}>Remove Friend</button>
          <button className="add-frnd" onClick={()=> dispatch({type:"add_friend",payload:user.id})}>Add Friend</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HeroSection

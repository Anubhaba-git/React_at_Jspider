import React from 'react'
import logo from '../assets/Logo.png';

const Login = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='mylogo'>
            <img src={logo} alt="Logo" className="logo"/><p id='name'>Anubhaba</p>
            </div>
    </nav>    
    <div className="form">
            <h1 className='heading'>Login To Your Account</h1>
            <p className='paragraph'>Login using social networks</p><br />
        <div className="icon">
            <h3 className='facebook'>F</h3>
            <h3 className='google'>G+</h3>
            <h3 className='linkedin'>in</h3>
        </div>
        <div className="or">
            <p className='line'></p>
            <h3>OR</h3>
            <p className='line'></p>
        </div>

        <div className="input">
            <input type="mail" placeholder='Email...' className='mail' required/><br />
            <input type="password" placeholder='Password...' className='password' required/>
        </div>
        <div className="btn">
            <button className='btn2' required>Sign in</button>
        </div>
    </div>
    </div>
  )
}

export default Login

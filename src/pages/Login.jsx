

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; 
import '../App.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setUser } = useContext(AppContext); 

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      
      const user = { email };
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', 'dummy-jwt');

      setUser(user); 

      alert('Login successful!');
      navigate('/');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-wrapper' >
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
    </div>
  );
};

export default Login;

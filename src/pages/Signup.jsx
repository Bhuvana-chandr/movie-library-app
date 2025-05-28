

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; 
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setUser } = useContext(AppContext); 

  const handleSignup = (e) => {
    e.preventDefault();

    if (email && password) {
      const user = { email };
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', 'dummy-jwt');

      setUser(user); //  update user context so Navbar reflects immediately

      alert('Signup successful!');
      navigate('/'); // Send user to home directly
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className='signup-container'>
      <div className='signup-wrapper'>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
    </div>
  );
};

export default Signup;

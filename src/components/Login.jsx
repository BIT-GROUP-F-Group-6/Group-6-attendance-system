import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlesignIn (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="User name / Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      sessionStorage.setItem('internName', name);
      navigate('/dashboard');
    }
  };

  return (
    <div className="card">
      <h2>Welcome to She Can Foundation</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Get Started</button>
    </div>
  );
}

export default Login;

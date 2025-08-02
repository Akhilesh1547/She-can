import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const navigate = useNavigate();
  const name = sessionStorage.getItem('internName');

  useEffect(() => {
    if (!name) navigate('/');
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setLeaders(data.leaderboard));
  }, [name, navigate]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className="card">
      <h1>🏅 Leaderboard</h1>
      <ul className="animated-list">
        {leaders.map((person, i) => (
          <li key={i} className={person.name === name ? 'highlight' : ''}>
            {i + 1}. {person.name} — ₹{person.donations}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
        <Link className="btn" to="/dashboard">⬅ Back</Link>
        <button className="btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Leaderboard;

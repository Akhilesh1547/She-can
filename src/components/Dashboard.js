import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const [intern, setIntern] = useState(null);
  const navigate = useNavigate();
  const name = sessionStorage.getItem('internName');

  useEffect(() => {
    if (!name) navigate('/');
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setIntern({ ...data.intern, name: name || data.intern.name });
      });
  }, [name, navigate]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return intern ? (
    <div className="card">
      <h1>Hi, {intern.name} 👋</h1>
      <p><strong>Referral Code:</strong> {intern.referralCode}</p>
      <h2>
        💸 Donations Raised: <span className="donation-amount">₹{intern.donationsRaised}</span>
      </h2>
      <h3>🏆 Rewards Unlocked</h3>
      <ul className="animated-list">
        {intern.rewards.map((r, i) => (
          <li key={i}>✅ {r}</li>
        ))}
      </ul>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
        <Link className="btn" to="/leaderboard">Leaderboard</Link>
        <button className="btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  ) : <p>Loading...</p>;
}

export default Dashboard;

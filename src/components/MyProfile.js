import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyProfile() {
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedId = localStorage.getItem('userId');
    const storedName = localStorage.getItem('userName');
    const storedRole = localStorage.getItem('userRole');

    if (!storedEmail) {
      navigate('/'); // Redirect if the user isn't logged in
    } else {
      setUserEmail(storedEmail);
      setUserId(storedId);
      setUserName(storedName);
      setUserRole(storedRole);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div>
        <p><strong>Email:</strong> {userEmail}</p>
        <p><strong>Name:</strong> {userName}</p>
        <p><strong>ID:</strong> {userId}</p>
        <p><strong>Role:</strong> {userRole}</p>
      </div>
      <button onClick={handleLogout} style={{ marginTop: '20px' }}>
        Log Out
      </button>
    </div>
  );
}

export default MyProfile;

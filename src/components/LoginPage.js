import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8081/api/login',
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      // Store user data in localStorage
      localStorage.setItem('userEmail', formData.email);

      setMessage('Login successful');
      navigate('/about');
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Login failed. Please try again.';
      setMessage(errorMessage);
    }
  };

  // Handle dialog open/close
  const handleMoreClick = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="image-container">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqoRi0oK2Ijvh9Nh84J_urwlN1BhPXMwxOCTpJ1W_qbNI3R11e"
            alt="house"
            className="house-image"
          />
        </div>
        <div className="form-container">
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>

          {message && (
            <p
              style={{
                color: message.includes('successful') ? 'green' : 'red',
                marginTop: '10px',
              }}
            >
              {message}
            </p>
          )}

          <a href="#" onClick={handleMoreClick} className="More">
            More...
          </a>
        </div>
      </div>

      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Choose an Option</h3>
            <Link to="/forgot-password">
              <button onClick={closeDialog}>Reset Password</button>
            </Link>
            <Link to="/signup">
              <button onClick={closeDialog}>Sign Up</button>
            </Link>
            <button onClick={closeDialog} className="close-dialog">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;

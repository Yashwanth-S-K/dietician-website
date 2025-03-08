// src/pages/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import img1 from '../pages/api/healthyEating.jpg';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle login logic
    console.log('Login attempt:', formData);
    // For demo purposes, show success message
    alert('Login successful!');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <h1>Welcome Back</h1>
          <p className="auth-subtitle">Sign in to access your NutriLife account</p>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input 
                  type="checkbox" 
                  id="rememberMe" 
                  name="rememberMe" 
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
            </div>
            
            <button type="submit" className="auth-button">Sign In</button>
          </form>
          
          <div className="social-login">
            <p>Or sign in with</p>
            <div className="social-buttons">
              <button className="social-button google">
                <i className="fab fa-google"></i> Google
              </button>
              <button className="social-button facebook">
                <i className="fab fa-facebook-f"></i> Facebook
              </button>
            </div>
          </div>
          
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </div>
        </div>
        
        <div className="auth-image">
          <img src={img1} alt="Healthy eating" />
          <div className="auth-image-overlay">
            <h2>Your Journey to Better Health</h2>
            <p>Get personalized nutrition plans from certified dieticians</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// src/pages/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import img1 from '../pages/api/healthyLiefstyle.jpg';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
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
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // Here you would typically handle signup logic
    console.log('Signup attempt:', formData);
    // For demo purposes, show success message
    alert('Account created successfully! Please check your email to verify your account.');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <h1>Create an Account</h1>
          <p className="auth-subtitle">Join NutriLife and start your journey to better health</p>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
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
                minLength="8"
              />
              <p className="form-hint">Must be at least 8 characters long</p>
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-checkbox">
              <input 
                type="checkbox" 
                id="agreeTerms" 
                name="agreeTerms" 
                checked={formData.agreeTerms}
                onChange={handleChange}
                required 
              />
              <label htmlFor="agreeTerms">
                I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
              </label>
            </div>
            
            <button type="submit" className="auth-button">Create Account</button>
          </form>
          
          <div className="social-login">
            <p>Or sign up with</p>
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
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </div>
        
        <div className="auth-image">
          <img src={img1} alt="Healthy lifestyle" />
          <div className="auth-image-overlay">
            <h2>Start Your Health Journey Today</h2>
            <p>Get personalized nutrition plans and expert guidance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import img1 from '../pages/api/personalisedPlans.png';
import img2 from '../pages/api/expertDieticians.jpg';
import img3 from '../pages/api/continuousSupport.jpg';
import img4 from '../pages/api/about.jpg';
import img5 from '../pages/api/sarahJohnson.jpg';
import img6 from '../pages/api/michaelRodriguez.jpg';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Journey to Better Health Starts Here</h1>
          <p>Personalized nutrition plans designed by expert dieticians to help you achieve your health goals.</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose NutriLife?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="icon">
              <img src={img1} alt="Personalized Plans" />
            </div>
            <h3>Personalized Nutrition</h3>
            <p>Customized plans tailored to your specific health needs and goals.</p>
          </div>
          <div className="feature-card">
            <div className="icon">
              <img src={img2} alt="Expert Dieticians" />
            </div>
            <h3>Expert Dieticians</h3>
            <p>Work with certified professionals who are passionate about your success.</p>
          </div>
          <div className="feature-card">
            <div className="icon">
              <img src={img3} alt="Continuous Support" />
            </div>
            <h3>Continuous Support</h3>
            <p>Regular check-ins and adjustments to keep you on track.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>About NutriLife</h2>
            <p>NutriLife was founded with a simple mission: to make personalized nutrition accessible to everyone. Our team of expert dieticians combines scientific knowledge with practical approaches to help you achieve lasting results.</p>
            <p>We believe that proper nutrition is the foundation of good health, and we're committed to guiding you on your journey to a healthier lifestyle.</p>
            <Link to="/dieticians" className="about-button">Meet Our Team</Link>
          </div>
          <div className="about-image">
            <img src={img4} alt="About NutriLife" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Success Stories</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <div className="testimonial-image">
              <img src={img5} alt="Client" />
            </div>
            <div className="testimonial-content">
              <p>"Working with my NutriLife dietician changed my life. I've lost 30 pounds and have more energy than ever!"</p>
              <h4>Sarah Johnson</h4>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-image">
              <img src={img6} alt="Client" />
            </div>
            <div className="testimonial-content">
              <p>"As an athlete, nutrition is crucial. My NutriLife plan improved my performance and recovery significantly."</p>
              <h4>Michael Rodriguez</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Transform Your Health?</h2>
        <p>Take the first step towards a healthier you today.</p>
        <Link to="/signup" className="cta-button">Get Started</Link>
      </section>
    </div>
  );
};

export default Home;
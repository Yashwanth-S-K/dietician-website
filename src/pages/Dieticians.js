// src/pages/Dieticians.js
import React, { useState } from 'react';
import '../styles/dieticians.css';
import img1 from '../pages/api/emilyWatson.jpg';
import img2 from '../pages/api/michaelRodriguez.jpg';
import img3 from '../pages/api/sarahChen.jpg';
import img4 from '../pages/api/jamesWilson.jpg';
import img5 from '../pages/api/lisaJohnson.jpg';
import img6 from '../pages/api/robertKim.jpg';

const Dieticians = () => {
  // Sample dieticians data
  const allDieticians = [
    {
      id: 1,
      name: "Dr. Emily Watson",
      specialty: "Weight Management",
      description: "Specializing in sustainable weight loss strategies and metabolic health.",
      image: img1,
      experience: "12 years",
      education: "Ph.D. in Nutrition Science, Stanford University",
      certifications: ["Registered Dietitian", "Certified Diabetes Educator"],
      availability: "Mon, Wed, Fri"
    },
    {
      id: 2,
      name: "Michael Rodriguez, RD",
      specialty: "Sports Nutrition",
      description: "Helping athletes optimize performance through precise nutritional planning.",
      image: img2,
      experience: "8 years",
      education: "M.S. in Sports Nutrition, University of Florida",
      certifications: ["Registered Dietitian", "Certified Sports Nutritionist"],
      availability: "Tue, Thu, Sat"
    },
    {
      id: 3,
      name: "Dr. Sarah Chen",
      specialty: "Digestive Health",
      description: "Expert in managing IBS, GERD, and other digestive disorders through diet.",
      image: img3,
      experience: "15 years",
      education: "M.D. in Gastroenterology, Johns Hopkins University",
      certifications: ["Registered Dietitian", "Board Certified in Gastroenterology"],
      availability: "Mon, Tue, Thu"
    },
    {
      id: 4,
      name: "James Wilson, RD",
      specialty: "Plant-Based Nutrition",
      description: "Specializing in vegetarian and vegan diets for optimal health.",
      image: img4,
      experience: "7 years",
      education: "B.S. in Nutritional Sciences, Cornell University",
      certifications: ["Registered Dietitian", "Plant-Based Nutrition Certificate"],
      availability: "Wed, Fri, Sat"
    },
    {
      id: 5,
      name: "Lisa Johnson, RD",
      specialty: "Pediatric Nutrition",
      description: "Helping children develop healthy eating habits from an early age.",
      image: img5,
      experience: "10 years",
      education: "M.S. in Pediatric Nutrition, Boston University",
      certifications: ["Registered Dietitian", "Certified Pediatric Nutrition Specialist"],
      availability: "Mon, Wed, Fri"
    },
    {
      id: 6,
      name: "Robert Kim, RD",
      specialty: "Diabetes Management",
      description: "Expert in nutrition for diabetes prevention and blood sugar management.",
      image: img6,
      experience: "9 years",
      education: "M.S. in Clinical Nutrition, NYU",
      certifications: ["Registered Dietitian", "Certified Diabetes Educator"],
      availability: "Tue, Thu, Sat"
    }
  ];

  // State for filters
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique specialties for filter
  const specialties = ['All', ...new Set(allDieticians.map(dietician => dietician.specialty))];

  // Filter dieticians based on specialty and search term
  const filteredDieticians = allDieticians.filter(dietician => {
    const matchesSpecialty = selectedSpecialty === 'All' || dietician.specialty === selectedSpecialty;
    const matchesSearch = dietician.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          dietician.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dietician.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="dieticians-page">
      <div className="dieticians-header">
        <h1>Our Expert Dieticians</h1>
        <p>Meet our team of qualified nutrition professionals ready to guide you on your health journey</p>
      </div>

      <div className="dieticians-filters">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search by name or specialty..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="specialty-filter">
          <label>Filter by Specialty:</label>
          <select value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}>
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>{specialty}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="dieticians-container">
        {filteredDieticians.map(dietician => (
          <div className="dietician-card" key={dietician.id}>
            <div className="dietician-image">
              <img src={dietician.image} alt={dietician.name} />
            </div>
            <div className="dietician-info">
              <h2>{dietician.name}</h2>
              <h3>{dietician.specialty}</h3>
              <p>{dietician.description}</p>
              <div className="dietician-details">
                <div className="detail-item">
                  <span className="label">Experience:</span>
                  <span>{dietician.experience}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Education:</span>
                  <span>{dietician.education}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Availability:</span>
                  <span>{dietician.availability}</span>
                </div>
              </div>
              <div className="certifications">
                {dietician.certifications.map((cert, index) => (
                  <span key={index} className="certification-badge">{cert}</span>
                ))}
              </div>
              <button className="book-appointment">Book an Appointment</button>
            </div>
          </div>
        ))}
      </div>

      <div className="team-cta">
        <h2>Can't decide which dietician is right for you?</h2>
        <p>Take our quick assessment and we'll match you with the perfect dietician for your needs.</p>
        <button className="cta-button">Take the Assessment</button>
      </div>
    </div>
  );
};

export default Dieticians;
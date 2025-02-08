import React, { useState } from 'react';
import "../styles/disc.css";

export default function Disc() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your details have been submitted.`);
  };

  return (
    <div className="discover-container">
      <h1>Discover More About Coca-Cola</h1>
      <p>Fill in your details to stay updated!</p>

      <form onSubmit={handleSubmit} className="discover-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label>Additional Details:</label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Tell us more..."
        ></textarea>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

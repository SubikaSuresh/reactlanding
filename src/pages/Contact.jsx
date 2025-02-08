import React, { useState } from 'react';
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will get back to you soon.`);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Get in touch with us!</p>

      <form onSubmit={handleSubmit} className="contact-form">
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

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          required
        ></textarea>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

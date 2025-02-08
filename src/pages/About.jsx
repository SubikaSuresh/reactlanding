import React from 'react';

export default function About() {
  return (
    <div className="about-container">
      <h1>About Coca-Cola</h1>
      <p className="about-text">
        Since its creation in 1886, <span className="highlight">Coca-Cola</span> has become one of the most recognized and beloved beverages in the world.
        With its unique fizz, refreshing taste, and a history of bringing people together, Coca-Cola has been a part of countless moments of joy and celebration.
      </p>

      <h2>Our Legacy</h2>
      <p className="about-text">
        For over a century, Coca-Cola has innovated and evolved, offering a variety of beverages that cater to every taste and lifestyle.
        From the classic original formula to new, exciting flavors, our mission remains the same: to refresh the world and make a difference.
      </p>

      <h2>What We Stand For</h2>
      <ul className="about-list">
        <li>🌍 Commitment to sustainability and eco-friendly packaging.</li>
        <li>💖 Bringing communities together through refreshment.</li>
        <li>🍹 Offering a variety of beverages to suit every taste.</li>
      </ul>

      <h2>Join the Coca-Cola Experience</h2>
      <p className="about-text">
        Whether you're enjoying an ice-cold Coca-Cola with friends, trying out new flavors, or exploring our sustainability efforts, we invite you to be part of the Coca-Cola journey.
      </p>
    </div>
  );
}

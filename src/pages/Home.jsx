import React from 'react'
import "../styles/home.css"
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
  return (
    <div className='page'>
       <h1 className="coca-cola-title">Enjoy the Real Magic of Coca-Cola</h1>
      <p className="coca-cola-text">
        Experience the refreshing taste of <span className="highlight">Coca-Cola</span>, the world's most iconic beverage. 
        Whether you're sharing a moment with friends, celebrating, or just cooling off, Coca-Cola brings people together with its unique fizz and classic flavor.
      </p>
      <button className="explore-button" onClick={() => navigate('/Disc')}>Discover More</button>
    </div>
  )
}

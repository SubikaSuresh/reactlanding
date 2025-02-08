import React from 'react'
import logo from "../../assets/logo.webp"
import { useNavigate, useNavigation } from 'react-router-dom'
import "../../styles/navlinks.css"

export default function Navlinks() {
const navigate = useNavigate();

  return (
    <div className='navbar-container'>
      <img src={logo} alt='' width={"100px"}/>
      <div className='navlinks'>
        <ul>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/about')}>About</li>
            <li onClick={() => navigate('/contacts')}>Contact</li>
        </ul>
      </div>
    </div>
  )
}

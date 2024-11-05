import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className='container'>
      <h1 className='logo'>My Logo</h1>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Contact us</li>
       
        <NavLink to='/login' className='btn'>Login</NavLink>
        <NavLink to='/register' className='btn'>Register</NavLink>
      
      </ul>
    </nav>
  )
}

export default Navbar

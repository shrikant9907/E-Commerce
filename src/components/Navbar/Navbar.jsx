import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <>
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
    <div className='nav-bar-wrapper'>
        <div className="item">Filter by {"->"}</div>
        <div className="item">No-Filter</div>
        <div className="item">Mobiles</div>
        <div className="item">Laptops</div>
        <div className="item">Tablets</div>
        <div className="item">{">="}2999</div>
        <div className="item">{">="}4999</div>
        <div className="item">{">="}6999</div>
       
      </div>    
        
      </>
  )
}

export default Navbar

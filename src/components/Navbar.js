import React from 'react'
import logo from "../asserts/logo.png";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='logo' className='img' />
    </div>
  )
}

export default Navbar
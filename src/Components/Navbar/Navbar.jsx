import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/Admin Panel Assets/nav-logo.svg'
import navprofile from '../../assets/Admin Panel Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt='pic' className='nav-logo'/>
        <img src={navprofile} alt='pic' className='nav-profile'/>
    </div>
  )
}

export default Navbar
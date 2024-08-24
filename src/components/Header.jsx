import React from 'react'
import './Header.css'
const Header = () => {
  return (
   <header>
    <div className='logo'>
        <img src="/logo.png" alt="" />
        <p>CA Test Series</p>
    </div>
    <div className='links'>
        <ul className='max-md:hidden'>
            <li><a href="">Home</a></li>
            <li><a href="">Test Series</a></li>
            <li><a href="">Lectures</a></li>
            <li><a href="">Syllabus</a></li>
            <li><a href="">Fees</a></li>
            <li><a href="">Forums</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Login</a></li>
            <li><a href="">Register</a></li>
        </ul>
    </div>
   </header>
  )
}

export default Header
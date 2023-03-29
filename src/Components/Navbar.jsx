import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () =>
{
  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className='logo'>
          <img src={ logo } alt="Logo" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

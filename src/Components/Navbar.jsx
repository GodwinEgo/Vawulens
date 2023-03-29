import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import { CiMenuFries } from 'react-icons/ci'


const Navbar = () =>
{
  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className='logo'>
          <img src={ logo } alt="Logo" />
        </Link>
        <ul className="nav__links">
          {
            links.map( ( { name, path }, index ) =>
            {
              return (
                <li>
                  <NavLink to={ path }>
                    { name }
                  </NavLink>
                </li>
              )
            } )
          }
        </ul>
        <button className="nav__toggle-btn">
          <CiMenuFries />
        </button>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import links from '../data'

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
            links.map( ( { tem, path }, index ) =>
            {
              return (
                <li>
                  <NavLink>

                  </NavLink>
                </li>
              )
            } )
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

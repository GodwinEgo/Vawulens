import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import { CgMenuHotdog } from 'react-icons/cg'


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
                  <NavLink to={ path } className={ ( { isActive } ) => isActive ? 'active-nav' : '' }>
                    { name }
                  </NavLink>
                </li>
              )
            } )
          }
        </ul>
        <button className="nav__toggle-btn">
          <CgMenuHotdog />
        </button>
      </div>
    </nav>
  )
}

export default Navbar

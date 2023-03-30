import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import { AiOutlineMenuUnfold } from 'react-icons/ai'


const Navbar = () =>
{
  const [ isNavShowing, setIsNavShowing ] = useState( false )
  const [ isMenuIconRotated, setIsMenuIconRotated ] = useState( false )
  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className='logo'>
          <img src={ logo } alt="Logo" />
        </Link>
        <ul className={ `nav__links ${ isNavShowing ? 'show__nav' : 'hide__nav' }` }>
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
        <button className={ `nav__toggle-btn ${ isMenuIconRotated ? 'rotate-icon' : 'rotate-back' }` } onClick={ () => setIsNavShowing( !isNavShowing ) }>
          <AiOutlineMenuUnfold
            onClick={ () => setIsMenuIconRotated( !isMenuIconRotated ) }
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar

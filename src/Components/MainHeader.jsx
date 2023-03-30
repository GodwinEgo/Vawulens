import React from 'react'
import { Link } from 'react-router-dom';
import '../Pages/Home/Home.css';
import CircleImage from '../Images/main_header.png';

const MainHeader = () =>
{
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique harum, laudantium voluptates officiis rem optio.</p>
          <Link to='/plans' className='btn lg'>
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={ CircleImage } alt="CircleImage" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader

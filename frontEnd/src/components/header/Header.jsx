import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-navbar'>
      <div className='header-headname'>LAUNDRY</div>
      <div className='header-nav-wrapper'>
        <div className='header-home'>Home</div>
        <div className='header-pricing'>Career</div>
        <div className='header-career'>Pricing</div>

        <div className='header-sign-in'>
          <Link to='/'>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <div className='homenavbar'>
        <div className='home-headname'>LAUNDRY</div>
        <div className='homenav-wrapper'>
          <div className='career'>Pricing</div>
          <div className='pricing'>Career</div>
          <div className='username'>
            <button className='dropbtn'>
              <img src='images/profile.png' alt='profile' />
              {localStorage.getItem('name')}
            </button>
            <div className='dropdown-content'>
              <button className='logout-button' onClick={logOut}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from 'react';
import home from './svg/home.svg';
import more from './svg/more.svg';
import list from './svg/list.svg';
import './sidebar.css';

const Sidebar = () => {
  return (
    <>
      <div className='side-bar'>
        <div className='side-items'>
          <div className='img1'>
            <img src={home} alt='luci' />
          </div>
          <div className='img2'>
            <img src={more} alt='luci' />
          </div>
          <div className='img3'>
            <img src={list} alt='luci' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

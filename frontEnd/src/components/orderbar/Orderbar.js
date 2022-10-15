import React from 'react';
import './Orderbar.css';
import { Link } from 'react-router-dom';
const Orderbar = () => {
  return (
    <div className='orders-class'>
      <div className='header-order'>
        <div
          className='orders2'
          style={{ fontSize: '2rem', fontWeight: 'bolder' }}
        >
          Orders<span>| 0</span>
        </div>
        <div className='search-bar'>
          <img src='images/search.png' alt='' />
          <input type='text' />{' '}
        </div>
      </div>
      <div className='middle-of-orders'>
        <h3>No order Available</h3>
        <Link to='/createOrder' className='btn-1'>
          Create
        </Link>
      </div>
    </div>
  );
};

export default Orderbar;

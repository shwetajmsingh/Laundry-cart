import React from 'react';
import './OrderBar2.css';
import { Link } from 'react-router-dom';
const OrderBar2 = ({ orders }) => {
  return (
    <>
      <div className='heading'>
        <div
          className='orders-bar '
          style={{ fontSize: '2rem', fontWeight: 'bolder' }}
        >
          Orders<span>| {orders.length}</span>
        </div>
        <div className='btn-search'>
          <div className='button-create'>
            <Link to='/createOrder'>
              <button className='btn-create'>Create</button>
            </Link>
          </div>
          <div className='search-bar'>
            <img src='images/search.png' alt='' />
            <input type='text' />{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderBar2;

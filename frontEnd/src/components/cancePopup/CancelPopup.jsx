import React from 'react';
import './cancelPopup.css';

const CancelPopup = () => {
  return (
    <div className='orders-confirm'>
      <div className='order-confirm-alert'>
        <div className='alert'>Alert</div>
        <div className='order-confirm-alert-cross'>
          <img src='images/close_icon.png' alt='' />
        </div>
      </div>
      <div className='order-confirm-alert-icon'>
        <img src='images/alert-64.png' alt='' />
      </div>
      <div className='orders-confirm-content'>
        <div className='orders-confirm-content-info'>
          Are you sure you want to cancel the order No: ORD1231
        </div>
        <button className='orders-confirm-content-btn'>Proceed</button>
      </div>
    </div>
  );
};

export default CancelPopup;

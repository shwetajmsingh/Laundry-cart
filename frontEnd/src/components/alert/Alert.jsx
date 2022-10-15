import React from 'react';
import './alert.css';

const Alert = ({ setAlert, deleteItem, delId }) => {
  return (
    <>
      <div className='alert-container'>
        <div className='header'>
          <p>Alert</p>
          <p
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setAlert(false);
            }}
          >
            X
          </p>
        </div>
        <div className='bottom'>
          <div className='alerticon'>
            <img src='/images/Alert.jpg' alt='alert' />
          </div>
          <div className='confirm'>
            <p>
              Are you sure you want to cancel the order{' '}
              <span className='number'>No. {delId}</span>{' '}
            </p>
            <button
              className='proceed'
              onClick={() => {
                deleteItem();
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;

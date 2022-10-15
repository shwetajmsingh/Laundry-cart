import React from 'react';
import './SignInLeft.css';
import { Link } from 'react-router-dom';

const SignInLeft = () => {
  return (
    <div
      className={
        window.location.pathname === '/'
          ? 'sign-in-left-login'
          : 'sign-in-left-register'
      }
    >
      <div className='sign-in-left-wrapper'>
        <div className='sign-in-left-head-1'>Laundry</div>
        <div className='sign-in-left-head-2'>Service</div>
        <div className='sign-in-left-desc'>
          Doorstep Wash & Dry Clean Service
        </div>
        <div className='not-having-account'>Don't Have An Account?</div>
        <div className='register-btn'>
          <Link to='/register'>
            <span>Register</span>
          </Link>
        </div>
      </div>
      <div className='sign-in-left-line'></div>
    </div>
  );
};

export default SignInLeft;

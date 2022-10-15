import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignInLeft from './sign_in_left/SignInLeft';
import './SignIn.css';

const SignIn = () => {
  window.history.forward();
  function noBack() {
    window.history.forward();
  }

  const [user, setUser] = useState({
    Email: '',
    Password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: user.Email,
      password: user.Password,
    };

    try {
      const jsonResponse = await fetch(process.env.REACT_APP_API + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const response = await jsonResponse.json();
      if (response.success) {
        navigate('/homepage');
        localStorage.setItem('token', response.authtoken);
        localStorage.setItem('name', response.name);
      } else {
        window.alert(response.error);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const showPassword = useRef();
  const handleClick = () => {
    if (showPassword.current.type === 'password') {
      showPassword.current.type = 'text';
    } else {
      showPassword.current.type = 'password';
    }
  };

  return (
    <div className='sign-in-wrapper' onLoad={noBack()}>
      <SignInLeft></SignInLeft>
      <div className='sign-in-right'>
        <div className='sign-in-right-wrapper'>
          <div className='sign-in-right-head'>SIGN IN</div>
          <div className='sign-in-right-form'>
            <form action='' onSubmit={handleSubmit}>
              {/* <label htmlFor='username'>Mobile/Email</label> */}
              <input
                type='email'
                id='username'
                name='username'
                placeholder='Mobile/Email'
                spellCheck='false'
                required
                onChange={(e) => setUser({ ...user, Email: e.target.value })}
              />
              {/* <label htmlFor='password'>Password</label> */}
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                spellCheck='false'
                required
                onChange={(e) => setUser({ ...user, Password: e.target.value })}
                ref={showPassword}
              />
              <img
                src='images/padlock.png'
                className='password-padlock'
                alt=''
                onClick={handleClick}
              />
              <span>Forgot Password?</span>
              <button type='submit' id='user-sign-in'>
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import SignInLeft from '../sign_in/sign_in_left/SignInLeft';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Register = () => {
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Phone: '',
    State: '',
    District: '',
    Address: '',
    Pincode: '',
    Password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: user.Name,
      email: user.Email,
      phone: user.Phone,
      state: user.State,
      district: user.District,
      address: user.Address,
      pincode: user.Pincode,
      password: user.Password,
    };

    try {
      const jsonResponse = await fetch(
        process.env.REACT_APP_API + '/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const response = await jsonResponse.json();
      if (response.success) {
        navigate('/');
      } else {
        window.alert(response.error);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header></Header>
      <SignInLeft></SignInLeft>
      <div className='register-wrapper'>
        <div className='register-head'>REGISTER</div>
        <div className='register-form'>
          <form
            className='register-form-data'
            action=''
            onSubmit={handleSubmit}
          >
            <div className='register-form-data1'>
              <input
                type='text'
                name='Name'
                placeholder='Name'
                spellCheck='false'
                required
                onChange={(e) => setUser({ ...user, Name: e.target.value })}
              />
              <input
                type='email'
                name='Email'
                placeholder='Email'
                spellCheck='false'
                required
                onChange={(e) => setUser({ ...user, Email: e.target.value })}
              />
            </div>
            <div className='register-form-data2'>
              <input
                type='text'
                name='Phone'
                placeholder='Phone'
                spellCheck='false'
                required
                onChange={(e) => setUser({ ...user, Phone: e.target.value })}
              />
              <input
                type='text'
                name='State'
                placeholder='State'
                spellCheck='false'
                required
                onChange={(e) => setUser({ ...user, State: e.target.value })}
              />
            </div>
            <div className='register-form-data3'>
              <input
                type='text'
                name='District'
                placeholder='District'
                spellCheck='false'
                required
                onChange={(e) => setUser({ ...user, District: e.target.value })}
              />
              <input
                type='text'
                name='Address'
                placeholder='Address'
                spellCheck='false'
                required
                onChange={(e) => setUser({ ...user, Address: e.target.value })}
              />
            </div>
            <div className='register-form-data4'>
              <input
                type='text'
                name='Pincode'
                placeholder='Pincode'
                spellCheck='false'
                required
                onChange={(e) => setUser({ ...user, Pincode: e.target.value })}
              />
              <input
                type='password'
                name='Password'
                placeholder='Password'
                spellCheck='false'
                required
                onChange={(e) => setUser({ ...user, Password: e.target.value })}
              />
            </div>

            <div className='register-form-terms'>
              <input type='checkbox' name='terms' id='' required />
              <span>
                I agree to Terms and Condition receiving marketing and
                promotional materials
              </span>
            </div>
            <div className='register-form-btn'>
              <button type='submit'>Register</button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;

import React from 'react';

const About = () => {
  return (
    <div className='about-wrapper'>
      <div className='about-us-wrapper'>
        <div className='about-head'>ABOUT US</div>
        <div className='about-desc'>Door Step Wash & Dryclean Service</div>
      </div>
      <div className='home-wrapper'>
        <div className='home-head'>Home</div>
        <div className='home-sign-in'>Sign In</div>
        <div className='home-register'>Register</div>
      </div>
      <div className='pricing-wrapper'>
        <div className='pricing-head'>Pricing</div>
      </div>
      <div className='career-wrapper'>
        <div className='career-head'>Career</div>
        <div className='career-blogs'>Blogs</div>
        <div className='career-create'>Create</div>
      </div>
      <div className='contact-wrpper'>
        <div className='contact-head'>Contact</div>
      </div>
      <div className='social-media-wrapper'>
        <div className='social-media-head'>SOCIAL MEDIA</div>
        <div className='social-media-icons'>
          <div className='facebook-icon'></div>
          <div className='instagram-icon'></div>
          <div className='linkedin-icon'></div>
        </div>
      </div>
    </div>
  );
};

export default About;

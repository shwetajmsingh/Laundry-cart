import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import SignIn from './sign_in/SignIn';

const LoginPage = () => {
  return (
    <>
      <Header></Header>
      <SignIn></SignIn>
      <Footer></Footer>
    </>
  );
};

export default LoginPage;

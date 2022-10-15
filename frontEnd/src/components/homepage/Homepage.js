import React, { useEffect } from 'react';
import Copyright from '../footer/Copyright';
import Sidebar from '../sidebar/Sidebar';
import Orderbar from '../orderbar/Orderbar';
import { useNavigate } from 'react-router-dom';
import Navbar from '../LogNav/Navbar';
const Homepage = () => {
  const navigate = useNavigate();
  const verifyUser = async () => {
    const jsonData = await fetch(process.env.REACT_APP_API + '/verify', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });
    const response = await jsonData.json();
    if (response.status !== 'success') {
      navigate('/');
    }
    console.log(response);
  };

  useEffect(() => {
    verifyUser();
  }, []);

  const getData = async () => {
    const jsonResponse = await fetch(process.env.REACT_APP_API + '/getOrder', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });
    const response = await jsonResponse.json();
    if (response.data.length !== 0) {
      navigate('/mainpage');
    }

    console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <Orderbar />
      <Copyright />
    </>
  );
};

export default Homepage;

import React, { useState, useEffect } from 'react';
import Copyright from '../footer/Copyright';
import Sidebar from '../sidebar/Sidebar';
import PastOrder from '../pastorder/PastOrder';
import Popup from '../createorder/Popup';
import { useNavigate } from 'react-router-dom';
import Navbar from '../LogNav/Navbar';

const Mainpage = () => {
  const navigate = useNavigate();
  const [trigger, setTrigger] = useState(false);
  const [orders, setOrders] = useState([]);
  const [state, setState] = useState([]);
  const [subTotal, setSubTotal] = useState([0]);
  const [can, setCan] = useState(false);
  const [alert, setAlert] = useState(false);
  const [delId, setDelId] = useState({});

  const changeState = (obj) => {
    setState(obj.pop);
    setDelId({ id: obj.id, orderId: obj.orderId });
  };

  const getData = async () => {
    const jsonResponse = await fetch(process.env.REACT_APP_API + '/getOrder', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });
    const response = await jsonResponse.json();
    if (response.status === 'success') {
      setOrders(response.data);
      if (response.data.length === 0) {
        navigate('/homepage');
      }
    } else {
      navigate('/');
    }

    console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteItem = async () => {
    const jsonResponse = await fetch(
      process.env.REACT_APP_API + '/cancelOrder/' + delId.id,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      }
    );

    const response = await jsonResponse.json();
    setAlert(false);
    getData();
    console.log(response);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <PastOrder
        delId={delId.orderId}
        setTrigger={setTrigger}
        orders={orders}
        changeState={changeState}
        setSubTotal={setSubTotal}
        setCan={setCan}
        alert={alert}
        setAlert={setAlert}
        deleteItem={deleteItem}
      />
      <Copyright />
      <Popup
        trigger={trigger}
        setTrigger={setTrigger}
        state={state}
        subTotal={subTotal}
        img={true}
        can={can}
        setCan={setCan}
        setAlert={setAlert}
      />
    </>
  );
};

export default Mainpage;

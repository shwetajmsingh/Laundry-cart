import React, { useEffect } from 'react';
import '../createorder/createorder.css';
import WashList from '../createorder/WashList';
import Popup from './Popup';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OrderSucess from '../ordersucess/OrderSucess';
const productList = [
  {
    name: 'Shirts',
    image: 'images/shirt.jpg',
    description: 'Service price at Rs. 10/-',
    price: 10,
  },
  {
    name: 'TShirts',
    image: 'images/tshirt.jpeg',
    description: 'Service price at Rs. 15/-',
    price: 15,
  },
  {
    name: 'Trousers',
    image: 'images/trousers.jpg',
    description: 'Service price at Rs. 20/-',
    price: 20,
  },
  {
    name: 'Jeans',
    image: 'images/jeans.jpg',
    description: 'Service price at Rs. 25/-',
    price: 25,
  },
  {
    name: 'Boxers',
    image: 'images/boxers.jpeg',
    description: 'Service price at Rs. 30/-',
    price: 30,
  },
  {
    name: 'Joggers',
    image: 'images/joggers.jpeg',
    description: 'Service price at Rs. 35/-',
    price: 35,
  },
  {
    name: 'Others',
    image: 'images/others.jpg',
    description: 'Service price at Rs. 40/-',
    price: 40,
  },
];

function CreateOrderPage() {
  const navigate = useNavigate();
  const [buttonPopup, setbuttonPopup] = useState(false);
  const [state, setState] = useState([]);
  const [confirm, setConfirm] = useState(false);

  const subTotal = state.reduce((x, obj) => x + obj.price, 0);
  const totalCount = state.reduce((x, obj) => x + obj.count, 0);

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

  const fetchSendData = async () => {
    const k = String(new Date()).split(' ');
    const d = `${k[2]} ${k[1]} ${k[3]}, ${k[4]}`;

    const data = {
      orderId: 'ORD' + parseInt(Math.random() * 1000),
      orderTimeDate: String(d),
      storeLocation: 'Jp Nagar',
      city: 'Bangalore',
      storePhone: '+919876543210',
      totalItems: totalCount,
      price: subTotal + 90,
      popUp: state,
    };

    const jsonData = await fetch(process.env.REACT_APP_API + '/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },

      body: JSON.stringify(data),
    });

    const response = await jsonData.json();
    console.log(response);
  };

  return (
    <>
      <div className='createorder-allProduct'>
        {confirm && <OrderSucess />}
        <div className='createorder-topContent'>
          <h2 className='createorder-h2'>Create Order</h2>
          <div className='createorder-search'>
            <img src='images/search.png' alt='' />
          </div>
        </div>
        <div className='createorder-table'>
          <p className='createorder-table-product-type'>Product Types</p>
          <p className='createorder-table-quantity'>Quantity</p>
          <p className='createorder-table-wash-type'>Wash Type</p>
          <p className='createorder-table-price'>Price</p>
          <p className='createorder-table-reset'></p>
        </div>
        {productList.map((content, index) => {
          return (
            <WashList
              content={content}
              key={index}
              state={state}
              setState={setState}
            />
          );
        })}

        <div className='createorder-lowerContent'>
          <Link to='/homepage'>
            <button className='createorder-cancel-btn'>Cancel</button>
          </Link>

          <button
            className='createorder-proceed-btn'
            onClick={() => {
              if (!state.length) return window.alert('PLEASE SELECT AN ITEM');
              setbuttonPopup(true);
            }}
          >
            Proceed
          </button>
        </div>

        <Popup
          trigger={buttonPopup}
          setTrigger={setbuttonPopup}
          state={state}
          subTotal={subTotal}
          fetchSendData={fetchSendData}
          setConfirm={setConfirm}
        />
      </div>
    </>
  );
}

export default CreateOrderPage;

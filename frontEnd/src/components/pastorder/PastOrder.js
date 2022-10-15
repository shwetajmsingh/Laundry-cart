import React from 'react';
import '../pastorder/PastOrder.css';
// import {useState,useEffect} from 'react'
// import PastOrderMap from './PostOrderMap';
import OrderBar2 from '../orderbar/OrderBar2';
import PostOrderMap from './PostOrderMap';
import Alert from '../alert/Alert';
const PastOrder = ({
  setTrigger,
  orders,
  changeState,
  setSubTotal,
  setCan,
  alert,
  setAlert,
  deleteItem,
  delId,
}) => {
  return (
    <>
      <div className='orderspage'>
        <OrderBar2 orders={orders} />
        <div className='orders'>
          {alert && (
            <Alert setAlert={setAlert} deleteItem={deleteItem} delId={delId} />
          )}
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th style={{ width: '12rem' }}>Order Date-Time</th>
                <th>Store Location</th>
                <th>City</th>
                <th>Store Phone</th>
                <th>Total items</th>
                <th>Price</th>
                <th>Status</th>
                <th style={{ textAlign: 'center', width: '10rem' }}>
                  Cancellation
                </th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((obj, idx) => (
                <PostOrderMap
                  key={idx}
                  obj={obj}
                  setTrigger={setTrigger}
                  changeState={changeState}
                  setSubTotal={setSubTotal}
                  setCan={setCan}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PastOrder;

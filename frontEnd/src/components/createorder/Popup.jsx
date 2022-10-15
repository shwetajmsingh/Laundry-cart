import React, { useState } from 'react';
import './popup.css';
import popUp from '../../utils/popUp.png';

function Popup(props) {
  const [add, setAdd] = useState(props.img ? true : false);

  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='popup-header'>
          <h3 className='popup-header-h3'>Summary</h3>
          <p
            className='popup-header-close-btn'
            onClick={() => {
              props.setTrigger(false);
              props.setCan(false);
            }}
          >
            {' '}
            ✕
          </p>
        </div>
        <div className='popup-subheader'>
          <label htmlFor='store-address'></label>
          {!props.img && (
            <select
              name='store-address'
              className={
                add
                  ? 'popup-subheader-store-address-black'
                  : 'popup-subheader-store-address'
              }
              placeholder='Store Location'
              onChange={(e) => {
                if (e.target.selectedIndex === 1) {
                  setAdd(true);
                } else {
                  setAdd(false);
                }
              }}
            >
              <option value=''>Store Location</option>
              <option>Jp Nagar</option>
            </select>
          )}
          {props.img && (
            <div
              className='popup-subheader-store-address-black'
              style={{ marginTop: '-1.6rem' }}
            >
              <p style={{ width: '9rem' }}>Store Location</p>
              <p>Jp Nagar</p>
            </div>
          )}
          <div className='popup-subheader-store-address-details'>
            <p className='popup-subheader-store-address-details-p1'>
              Store Address:
            </p>
            <p
              className='popup-subheader-store-address-details-p2'
              style={{ padding: '6.5px', letterSpacing: '0.78px' }}
            >
              {add ? 'Near_Phonebooth_10th_road' : '_____'}
            </p>
          </div>
          <div className='popup-subheader-store-phone'>
            <p className='popup-subheader-store-phone-p1'>Phone</p>
            <p
              className='popup-subheader-store-phone-p2'
              style={{ padding: '6.5px', letterSpacing: '0.78px' }}
            >
              {add ? '+919876543210' : '_____'}
            </p>
          </div>
        </div>

        {props.img && (
          <img style={{ marginBottom: '-2rem' }} src={popUp} alt='popUp' />
        )}
        <div className='popup-table-body'>
          <p className='popup-table-body-p'>Order</p>

          {props.state.map((obj, idx) => (
            <div className='popup-table-body-content' key={idx}>
              <p className='popup-table-body-content-p1'>{obj.name}</p>
              <p className='popup-table-body-content-p2'>{obj.washType}</p>
              <p className='popup-table-body-content-p3'>{obj.multiple} = </p>
              <p className='popup-table-body-content-p4'>{obj.price}</p>
            </div>
          ))}

          <div className='popup-calculations'>
            <div className='popup-subtotal'>
              <p className='popup-subtotal-p1'>Sub total:</p>
              <p className='popup-subtotal-p2'>{props.subTotal}</p>
            </div>
            <div className='popup-charges'>
              <p className='popup-charges-p1'>Pickup Charges:</p>
              <p className='popup-charges-p2'>90</p>
            </div>
          </div>
        </div>

        <div className='popup-total'>
          <p className='popup-total-p1'>Total:</p>
          <p className='popup-total-p2'>Rs {props.subTotal + 90}</p>
        </div>
        <div className='popup-address'>
          <p>Address</p>
        </div>
        <div className='popup-address-details'>
          <div className='popup-address-details-1'>
            <p className='popup-address-details-1-p1'>Home</p>
            <p className='popup-address-details-1-p2'>
              #223, 10th road, Jp Nagar, Bangalore
            </p>
            <img className='address-icon' src="/images/address.png" alt="checked" />
          </div>
          <div
            className='popup-address-details-2'
            style={props.img ? { display: 'none' } : {}}
          >
            <p className='popup-address-details-1-p1'>Other</p>
            <p className='popup-address-details-1-p2'>
              #223, 10th road, Jp Nagar, Bangalore
            </p>
          </div>
          <div
            className='popup-address-details-add'
            style={props.img ? { display: 'none' } : {}}
          >
            ADD NEW
          </div>
        </div>
        <div className='popup-footer'>
          {!props.img && (
            <button
              className='popup-footer-btn'
              type='button'
              onClick={() => {
                if (!add)
                  return window.alert('PLEASE SELECT THE STORE LOCATION');
                props.fetchSendData();
                props.setTrigger(false);
                props.setConfirm(true);
                setTimeout(() => {
                  props.setConfirm(false);
                }, 5000);
              }}
              style={{ cursor: 'pointer' }}
            >
              Confirm
            </button>
          )}

          {props.can && (
            <button
              className='popup-footer-btn'
              type='button'
              onClick={() => {
                props.setTrigger(false);
                props.setCan(false);
                props.setAlert(true);
              }}
              style={{ cursor: 'pointer', backgroundColor: 'red' }}
            >
              Cancel Order
            </button>
          )}
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;

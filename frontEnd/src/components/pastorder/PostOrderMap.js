import React from 'react';

const PostOrderMap = ({
  obj,
  setTrigger,
  changeState,
  setSubTotal,
  setCan,
}) => {
  const handleClick = () => {
    setTrigger(true);
    changeState({ pop: obj.popUp, id: obj._id, orderId: obj.orderId });
    setSubTotal(obj.price - 90);
  };

  return (
    <tr>
      <td>{obj.orderId}</td>
      <td style={{ width: '12rem' }}>{obj.orderTimeDate}</td>
      <td>{obj.storeLocation}</td>
      <td>{obj.city}</td>
      <td>{obj.storePhone}</td>
      <td>{obj.totalItems}</td>
      <td className='price'>{String(obj.price + 90)}</td>
      <td style={{ textAlign: 'center' }}>{obj.status}</td>
      <td
        style={{
          color: 'red',
          cursor: 'pointer',
          width: '10rem',
          textAlign: 'center',
        }}
        onClick={(e) => {
          setTrigger(true);
          changeState({ pop: obj.popUp, id: obj._id, orderId: obj.orderId });
          setSubTotal(obj.price - 90);
          setCan(true);
        }}
      >
        Cancel Order
      </td>
      <td
        onClick={handleClick}
        style={{ cursor: 'pointer', lineHeight: '8px' }}
      >
        &#128065;
      </td>
    </tr>
  );
};

export default PostOrderMap;

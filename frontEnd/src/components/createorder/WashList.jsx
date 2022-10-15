import React, { useState, useEffect } from 'react';
import washNormal from '../../utils/washing-machine.png';
import washBlue from '../../utils/washing-machine-clicked.png';
import ironingNormal from '../../utils/ironing.png';
import ironingBlue from '../../utils/ironing-clicked.png';
import towelNormal from '../../utils/towel.png';
import towelBlue from '../../utils/towel-clicked.png';
import bleachNormal from '../../utils/bleach.png';
import bleachBlue from '../../utils/bleach-clicked.png';

function WashList({ content, state, setState }) {
  const [singleCount, setsingleCount] = useState(0);

  const [washSelected, setwashSelected] = useState(washNormal);
  const [ironingSelected, setironingSelected] = useState(ironingNormal);
  const [towelSelected, settowelSelected] = useState(towelNormal);
  const [bleachSelected, setbleachSelected] = useState(bleachNormal);

  let count = 0;
  if (washSelected === washBlue) count++;
  if (ironingSelected === ironingBlue) count++;
  if (towelSelected === towelBlue) count++;
  if (bleachSelected === bleachBlue) count++;

  // {
  //   name: "",
  //   washType: "",
  //   multiple: "",
  //   price: "",
  // }

  useEffect(() => {
    const newState = state;

    if (singleCount * content.price * count === 0) {
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].name === content.name) {
          newState.splice(i, 1);
          break;
        }
      }

      return;
    }

    const data = {
      name: content.name,

      washType: `${washSelected === washBlue ? 'Wash,' : ''}${
        ironingSelected === ironingBlue ? 'Iron,' : ''
      }${towelSelected === towelBlue ? 'DryClean,' : ''}${
        bleachSelected === bleachBlue ? 'Bleach,' : ''
      }`,

      multiple: `${singleCount}X${content.price * count}`,

      price: singleCount * content.price * count,

      count: Number(singleCount),
    };

    for (let i = 0; i < newState.length; i++) {
      if (newState[i].name === content.name) {
        newState.splice(i, 1);
        break;
      }
    }
    setState([...newState, data]);
    // eslint-disable-next-line
  }, [singleCount * content.price * count]);

  const handleClick = () => {
    setsingleCount(0);
    setwashSelected(washNormal);
    setironingSelected(ironingNormal);
    settowelSelected(towelNormal);
    setbleachSelected(bleachNormal);
  };

  return (
    <>
      <div className='createorder-data'>
        <div className='createorder-productList'>
          <img
            className='createorder-product-img'
            src={content.image}
            alt={content.image}
          />
          <div className='createorder-product-content'>
            <h3 className='createorder-product-h3'>{content.name}</h3>
            <p className='createorder-product-p'>{content.description}</p>
          </div>
        </div>
        <div className='createorder-quantity'>
          <input
            className='createorder-input'
            type='number'
            min={0}
            value={singleCount}
            onChange={(e) => {
              setsingleCount(e.target.value);
            }}
          />
        </div>
        <div className='createorder-wash-section'>
          <div className='createorder-washing-machine'>
            <img
              src={washSelected}
              alt='washing_machine'
              onClick={() =>
                setwashSelected(
                  washSelected === washBlue ? washNormal : washBlue
                )
              }
            />
          </div>
          <div className='createorder-ironing'>
            <img
              src={ironingSelected}
              alt='ironing'
              onClick={() =>
                setironingSelected(
                  ironingSelected === ironingBlue ? ironingNormal : ironingBlue
                )
              }
            />
          </div>
          <div className='createorder-towel'>
            <img
              className='createorder-towel-icon'
              src={towelSelected}
              alt='towel'
              onClick={() =>
                settowelSelected(
                  towelSelected === towelBlue ? towelNormal : towelBlue
                )
              }
            />
          </div>
          <div className='createorder-bleach'>
            <img
              src={bleachSelected}
              alt='bleach'
              onClick={() =>
                setbleachSelected(
                  bleachSelected === bleachBlue ? bleachNormal : bleachBlue
                )
              }
            />
          </div>
        </div>
        <div className='createorder-price'>
          {singleCount * content.price * count ? (
            <p>
              <span className='createorder-price-one'>{singleCount}</span>X
              <span className='createorder-price-one'>
                {content.price * count}
              </span>
              =
              <span className='createorder-price-two'>
                {singleCount * content.price * count}
              </span>
            </p>
          ) : (
            <p style={{ position: 'relative', left: '5rem' }}>___</p>
          )}
        </div>
        <div className='createorder-price-calculation'>
          <button
            className='createorder-price-calculation-btn'
            onClick={handleClick}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default WashList;

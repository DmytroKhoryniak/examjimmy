import React from 'react';
import Img from '../../../elements/img';
import cart1 from '../../../images/cart.png';
import style from '../header_middle/cart.module.css';

function Cart() {
  return (
    <>
    <div>
      <Img src={cart1} alt="cart"></Img>
    </div>
    </>
  );
}

export default Cart;

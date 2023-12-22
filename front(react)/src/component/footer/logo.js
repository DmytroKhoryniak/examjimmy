import React from 'react';
import style from '../footer/logo.module.css';
import Img from '../../elements/img';
import logo1 from '../../images/logo1.png';

function Logo() {
  return (
    <>
    <div className={style.logoContainer}>
        <Img src={logo1} alt="asd"></Img>
      </div>
    </>
  );
}

export default Logo;

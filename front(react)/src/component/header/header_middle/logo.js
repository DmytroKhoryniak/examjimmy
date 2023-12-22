import React from 'react';
import Img from '../../../elements/img';
import logo1 from '../../../images/logo1.png'
import style from '../header_middle/logo.module.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <>
    <div className={style.logoImage}>
    <Link to="/">
        <Img src={logo1} alt="logo" />
    </Link>
    </div>
    </>
  );
}

export default Logo;

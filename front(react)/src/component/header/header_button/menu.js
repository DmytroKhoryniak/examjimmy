import React from 'react';
import {Link} from "react-router-dom";
import style from './menu.module.css';
import Search from '../header_middle/search';
import Logo from '../header_middle/logo';
import Cart from '../header_middle/cart';

function Menu() {
  return (
    <>
    <header className={style.headerContainer}>
      <Logo/>
      <div>
        <h1>Jimmy storage</h1>
      </div>
      <Search/>
      <Cart/>
    </header>
    </>
  );
}

export default Menu;

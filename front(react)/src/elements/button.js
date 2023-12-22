import React from 'react';
import style from '../elements/button.module.css';
import { NavLink } from 'react-router-dom';

function Button() {
  return (
    <>
    <div className={style.divbtn}>
    <button className={style.customButton}>
    <NavLink to="/cardProduct" className={style.navBtn}>Дивитись товари</NavLink>
    </button>
    </div>
    </>
  );
}

export default Button;

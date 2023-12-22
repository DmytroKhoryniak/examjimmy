import React from 'react';
import style from './info.module.css';
import { NavLink } from 'react-router-dom';

function Info() {
  return (
    <>
    <div className={style.headerTop}>
      <ul className={style.infoInner}>
        <li className={style.infoItem}>
          <NavLink to="/" className={(navData) => navData.isActive ? style.activeLink : style.link}>Про нас</NavLink>
        </li>
        <li className={style.infoItem}>
          <NavLink to="/cardProduct" className={(navData) => navData.isActive ? style.activeLink : style.link}>Товари</NavLink>
        </li>
        {/* <li className={style.infoItem}>
          <NavLink to="/cart" className={(navData) => navData.isActive ? style.activeLink : style.link}>cart</NavLink>
        </li> */}
        {/* <li className={style.infoItem}>
          <NavLink to="/category" className={(navData) => navData.isActive ? style.activeLink : style.link}>Категорії</NavLink>
        </li> */}
        <li className={style.infoItem}>
          <NavLink to="/contact" className={(navData) => navData.isActive ? style.activeLink : style.link}>Контакти</NavLink>
        </li>
        <li className={style.infoItem}>
          <NavLink to="/deliveryPayment" className={(navData) => navData.isActive ? style.activeLink : style.link}>Оплата</NavLink>
        </li>
        <li className={style.infoItem}>
          <NavLink to="/admin" className={(navData) => navData.isActive ? style.activeLink : style.link}>Admin</NavLink>
        </li>
      </ul>
    </div>
   
    </>
  );
}

export default Info;

import React from 'react';
import Layout from '../component/layout/layout';
import img7 from '../images/imageCard7.jpg';
import Img from '../elements/img';
import style from '../page/asd.module.css';
import { NavLink } from 'react-router-dom';

function Asd() {
    const products = [
      {id:6, src:img7, title:"Футболка Burberry",price:"16 000 грн"},
    ]
    const listProduct=products.map((product)=>
      <li key={product.id} className={style.productCard}>
        <div>
            <Img src={product.src} className={style.productImage} alt="img"></Img>
            <div className={style.productInfo}>
              <h2 className={style.productTitle}>{product.title}</h2>
              <p className={style.productPrice}>{product.price}</p>
              <button className={style.buyButton}><NavLink to={`/cart/${product.id}`} className={style.navLinkk}>
              Купити
              </NavLink></button>
            </div>
        </div>
      </li>
  );
  return (
    <>
    <Layout>
    <div>
      <ul className={style.productMain}>{listProduct}</ul>
    </div>
    </Layout>
    </>
  )
  }

  export default Asd;
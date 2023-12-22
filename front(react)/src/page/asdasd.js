import React from 'react';
import Layout from '../component/layout/layout';
import img1 from '../images/imageCard1.jpg';
import img2 from '../images/imageCard2.jpg';
import img3 from '../images/imageCard3.jpg';
import img4 from '../images/imageCard6.jpg';
import img5 from '../images/imageCard4.jpg';
import img6 from '../images/imageCard6.jpg';
import img8 from '../images/imageCard5.jpg';
import img9 from '../images/imageCard8.jpg';
import Img from '../elements/img';
import style from '../page/asdasd.module.css';
import { NavLink } from 'react-router-dom';

function Asdasd(props) {
  const products = [
    {id:0, src:img1, title:"Зіп-худі Stone Island",price:"14 800 грн"},
    {id:1, src:img2, title:"Світшот Stone Island",price:"13 250 грн"},
    {id:2, src:img3, title:"Світшот Stone Island",price:"13 900 грн"},
    {id:3, src:img4, title:"Худі Gucci",price:"78 650 грн"},
    {id:4, src:img5, title:"Штани Stone Island",price:"11 900 грн"},
    {id:5, src:img6, title:"Світшот Stone Island",price:"14 800 грн"},
    {id:6, src:img8, title:"Шерстяне худі Gucci",price:"95 790 грн"},
    {id:7, src:img9, title:"Светр Off-White",price:"32 450 грн"}
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

export default Asdasd;

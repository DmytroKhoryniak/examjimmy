import React from 'react';
import { useState, useEffect } from 'react';
import style from '../content/cart_products.module.css';
import img1 from '../../../images/imageCard1.jpg';
import img2 from '../../../images/imageCard2.jpg';
import img3 from '../../../images/imageCard3.jpg';
import img4 from '../../../images/imageCard4.jpg';
import img5 from '../../../images/imageCard5.jpg';
import img6 from '../../../images/imageCard6.jpg';
import img7 from '../../../images/imageCard7.jpg';
import img8 from '../../../images/imageCard8.jpg';
import img9 from '../../../images/imageCard9.jpg';
import Img from '../../../elements/img';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Cart_products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/clothing")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  const listProduct = products
    .filter((prod) => !selectedCategory || prod.category_id === selectedCategory)
    .map((product) => (
      <li key={product.id} className={style.productCard}>
        <div>
          <Img src={"/imagess/" + product.source} className={style.productImage} alt="img" />
          <div className={style.productInfo}>
            <h2 className={style.productTitle}>{product.name}</h2>
            <p className={style.productPrice}>{product.price}$</p>
            <button className={style.buyButton}>
              <NavLink to={`/cart/${product.id}`} className={style.navLinkk}>
                Купити
              </NavLink>
            </button>
          </div>
        </div>
      </li>
    ));

  return (
    <>
      <div>
        <div className={style.buttonContainer}>
          <button className={style.button} onClick={() => setSelectedCategory(1)}>
            Футболки
          </button>
          <button className={style.button} onClick={() => setSelectedCategory(2)}>
            Кофти
          </button>
          <button className={style.button} onClick={() => setSelectedCategory(null)}>
            Показати все
          </button>
        </div>
        <ul className={style.productMain}>{listProduct}</ul>
      </div>
    </>
  );
}

export default Cart_products;

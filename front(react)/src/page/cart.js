import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../component/layout/layout';
import img1 from '../images/imageCard11.jpg';
import img2 from '../images/imageCard12.jpg';
import img3 from '../images/imageCard13.jpg';
import img4 from '../images/imageCard16.jpg';
import img5 from '../images/imageCard14.jpg';
import img6 from '../images/imageCard6.jpg';
import img7 from '../images/imageCard17.jpg';
import img8 from '../images/imageCard15.jpg';
import img9 from '../images/imageCard18.jpg';
import Img from '../elements/img';
import { useParams } from 'react-router-dom';
import styles from '../page/cart.module.css';

function Cart() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/product/${id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, [])
  // const products = [
  //   {id:0, src:img1, title:"Зіп-худі Stone Island",price:"14 800 грн"},
  //   {id:1, src:img2, title:"Світшот Stone Island",price:"13 250 грн"},
  //   {id:2, src:img3, title:"Світшот Stone Island",price:"13 900 грн"},
  //   {id:3, src:img4, title:"Худі Gucci",price:"78 650 грн"},
  //   {id:4, src:img5, title:"Штани Stone Island",price:"11 900 грн"},
  //   {id:5, src:img6, title:"Світшот Stone Island",price:"14 800 грн"},
  //   {id:6, src:img7, title:"Футболка Burberry",price:"16 000 грн"},
  //   {id:7, src:img8, title:"Шерстяне худі Gucci",price:"95 790 грн"},
  //   {id:8, src:img9, title:"Светр Off-White",price:"32 450 грн"}
  // ]
  const {id}=useParams();
  return (
    <>
    <Layout>
    <div className={styles.productPage}>
        <h1 className={styles.productTitle}>{product.name}</h1>
        <div className={styles.productContent}>
          <div className={styles.productImage}>
            <Img src={"/imagess/"+ product.source} alt="Product" />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.productPrice}>Ціна: {product.price}$</p>
            <button className={styles.buyButton}>Купити</button>
          
            <p className={styles.productDescription}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </div>
        </div>
      </div>
    </Layout>
    </>
  );
}

export default Cart;

import React from 'react';
import Layout from '../component/layout/layout';
import { NavLink } from 'react-router-dom';
import style from './category.module.css';
import "../App.css";
import { useEffect, useState } from "react";
import Img from '../elements/img';


function Category() {
  // const [categories, setCategories] = useState([]);
  // const [newName, setNewName] = useState("");
  // const [newCreatedAt, setNewCreatedAt] = useState("");
  // const [newUpdatedAt, setNewUpdatedAt] = useState("");

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/category")
  //     .then((response) => response.json())
  //     .then((json) => setCategories(json));
  // }, []);

  // const addUser = () => {
  //   const name = newName.trim();
  //   const created_at = newCreatedAt.trim();
  //   const updated_at = newUpdatedAt.trim();
  //   if (name && created_at && updated_at) {
  //     fetch("http://127.0.0.1:8000/api/category", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name,
  //         created_at,
  //         updated_at,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCategories([...categories, data]);
  //         setNewName("");
  //         setNewCreatedAt("");
  //         setNewUpdatedAt("");
  //       });
  //   }
  // };

  // const updateUser = (id) => {
  //   const category = categories.find((category) => category.id === id);

  //   fetch(`http://127.0.0.1:8000/api/category/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(category),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then(() => {
        
  //     });
  // };

  // const deleteUser = (id) => {
  //   fetch(`http://127.0.0.1:8000/api/category/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then(() => {
  //       setCategories((values) => {
  //         return values.filter((item) => item.id !== id);
  //       });
        
  //     });
  // };

  // const onChangeHandler = (id, key, value) => {
  //   setCategories((values) => {
  //     return values.map((item) =>
  //       item.id === id ? { ...item, [key]: value } : item
  //     );
  //   });
  // };
  
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/category`)
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, [])

  const clothList=categories.filter(cloth=>cloth.category_id===2).map((clothes) =>
  <li key={clothes.id} className={style.li}>
    <div className={style.cart}>
      <NavLink to={`/category/${clothes.id}`} className={style.link}>
        <Img className={style.img} src={"/imagess/"+clothes.image} alt="cpu"></Img>
        <h5 className={style.title}>{clothes.title.length>25 ? clothes.title.slice(0, 20) + "...":clothes.title }</h5>
        <p>Price: <span className={style.price}>{clothes.price} $</span>
        {/* <span className={style.prodStat} style={clothes.status_id===1?{ color: 'green' }:{ color: 'orange' }}><br />{product.status.name}</span> */}
        </p>
        <button className={style.btn}>Buy</button>
      </NavLink>
    </div>
  </li>
  );

  return (
    <>
    <Layout>
      <h1 className={style.hh1}>Категорія</h1>
      <NavLink to="/asd" className={style.button}>{clothList}</NavLink>
      <NavLink to="/asdasd" className={style.button}>{clothList}</NavLink>
    </Layout>
    </>
  );
}

export default Category;

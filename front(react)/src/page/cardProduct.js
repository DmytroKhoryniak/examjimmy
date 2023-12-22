import React from 'react';
import Layout from '../component/layout/layout';
import Cart_products from '../component/main/content/cart_products';
import "../App.css";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

function CardProduct() {
  // const [clothes, setClothes] = useState([]);
  // const [newName, setNewName] = useState("");
  // const [newCreatedAt, setNewCreatedAt] = useState("");
  // const [newUpdatedAt, setNewUpdatedAt] = useState("");

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/clothing")
  //     .then((response) => response.json())
  //     .then((json) => setClothes(json));
  // }, []);

  // const addUser = () => {
  //   const name = newName.trim();
  //   const created_at = newCreatedAt.trim();
  //   const updated_at = newUpdatedAt.trim();
  //   if (name && created_at && updated_at) {
  //     fetch("http://127.0.0.1:8000/api/clothing", {
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
  //         setClothes([...clothes, data]);
  //         setNewName("");
  //         setNewCreatedAt("");
  //         setNewUpdatedAt("");
  //       });
  //   }
  // };

  // const updateUser = (id) => {
  //   const cloth = clothes.find((cloth) => cloth.id === id);

  //   fetch(`http://127.0.0.1:8000/api/clothing/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(cloth),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then(() => {
        
  //     });
  // };

  // const deleteUser = (id) => {
  //   fetch(`http://127.0.0.1:8000/api/clothing/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then(() => {
  //       setClothes((values) => {
  //         return values.filter((item) => item.id !== id);
  //       });
        
  //     });
  // };

  // const onChangeHandler = (id, key, value) => {
  //   setClothes((values) => {
  //     return values.map((item) =>
  //       item.id === id ? { ...item, [key]: value } : item
  //     );
  //   });
  // };
  
  return (
    <>
    <Layout>
    <Cart_products/>
    </Layout>
    </>
  );
}

export default CardProduct;

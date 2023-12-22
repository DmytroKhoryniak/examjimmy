import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import CardProduct from "./page/cardProduct";
import Cart from "./page/cart";
import Category from "./page/category";
import Contact from "./page/contact";
import DeliveryPayment from "./page/deliveryPayment";
import Asd from "./page/asd";
import Asdasd from "./page/asdasd";
import Admin from "./page/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cardProduct" element={<CardProduct/>}></Route>
        <Route path="/cart/:id" element={<Cart/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/deliveryPayment" element={<DeliveryPayment/>}></Route>
        <Route path="/asd" element={<Asd/>} />
        <Route path="/asdasd" element={<Asdasd/>} />
        <Route path="/admin" element={<Admin/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

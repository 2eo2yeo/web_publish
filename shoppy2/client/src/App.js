import {useState} from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/style/shoppy.css';
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Carts from './pages/Carts.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import DetailProduct from './pages/DetailProduct.jsx'

export default function App() {

  const [cartList, setCartList] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addCart = (cartItem) => {
    setCartList([...cartList, cartItem]); 
    setCartCount(cartCount +1);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout cartCount={cartCount} />} >
            <Route index element={<Home />} />
            <Route path='/all' element={<Products />} />
            <Route path='/cart' element={<Carts cartList={cartList} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/products/:pid' element={<DetailProduct addCart={addCart} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
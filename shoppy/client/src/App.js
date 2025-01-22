import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/shoppy.css';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx';
import DetailProductPractice from './pages/DetailProductPractice.jsx';

export default function App() {

  const [cartList, setCartList] = useState([]);   /* 장바구니 리스트 : [] */
  const [cartCount, setCartCount] = useState(0); /* 장바구니 상품 갯수 추가 */

  const addCart = (cartItem) => {
    setCartList([...cartList, cartItem]); 
    // 스프레드 연산자를 이용하여 카트리스트유지 하면서 새로운 카트아이템 추가
    setCartCount(cartCount + 1);
  }; 

  console.log('cartCount ::', cartCount );
  console.log('cartList ::', cartList );
  

  return (
    <div>
        <BrowserRouter>
            <Routes>
              {/* layout을 기본으로 products, carts.. 등의 컴포넌트가 동작함 */}
                <Route path='/' element={<Layout cartCount={cartCount}/>} >   
                    <Route index element={<Home />} />   
                    <Route path='/all' element={<Products />} />
                    <Route path='/cart' element={<Carts cartList={cartList}/>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/products/:pid' element={<DetailProductPractice addCart={addCart} />} />
                    {/* 여기서 pid 값을 받을 수 있다 value이기때문에 이렇게 사용이 가능 */}
                    {/* path를 통해서 넘어오는 값은(pid)는 리액트가 관리한다.
                    여기까지만 작성하면 리액트가 알아서 해줌 -> useParams안에 pid가 들어있음 */}
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}


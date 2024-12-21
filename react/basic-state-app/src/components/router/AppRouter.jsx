import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Support from './Support.jsx'
import CgvLoginForm from '../form/CgvLoginForm.jsx'
import Signup from '../form/Signup.jsx'
import AppBestSeller from '../yes24/AppBestSeller.jsx'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                    {/* 화면 구성 페이지 컴포넌트명은 Layout or root를 사용함 */}
                    <Route index element={<Home />} />   
                    <Route path='/login' element={<CgvLoginForm />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/support' element={<Support />} />
                    <Route path='/bestseller' element={<AppBestSeller />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


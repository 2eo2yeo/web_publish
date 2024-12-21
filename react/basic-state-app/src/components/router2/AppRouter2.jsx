import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Airbnb from'../airbnb/AppAirbnb.jsx'
import Aladin from'../aladin/AppAladin.jsx'
import Avatar from'../avatar/AppAvatar.jsx'
import Counter from'../counter/AppCounter.jsx'
import Olive from'../olive/AppOlive.jsx'
import Yes24 from'../yes24/AppBestSeller.jsx'

export default function AppRouter2() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>} > {/* 레이아웃 관련 컴포넌트 */}
                        <Route index element = {<Home />} /> 
                        <Route path='aladin' element={<Airbnb/>} /> 
                        <Route path='airbnb' element={<Aladin/>} /> 
                        <Route path='avatar' element={<Avatar/>} /> 
                        <Route path='counter' element={<Counter/>} /> 
                        <Route path='olive' element={<Olive/>} /> 
                        <Route path='yes24' element={<Yes24/>} /> 
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function Home() {
    return (
        <h1>홈</h1>
    );
}
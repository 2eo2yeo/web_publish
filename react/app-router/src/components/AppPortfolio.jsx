import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx'
import About from './about/About.jsx'
import Skills from './skills/Skiils.jsx'
import MyWork from './mywork/MyWork.jsx'
import Testimonial from './testimonial/Testimonial.jsx'
import './css/style.css'

export default function AppPortfolio() {
    return (
        <div>
            <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>} /> 
                        {/* <Route path='about' element={<About/>} /> 
                        <Route path='skills' element={<Skills/>} /> 
                        <Route path='mywork' element={<MyWork/>} /> 
                        <Route path='testimonial' element={<Testimonial/>} />  */}
                    
                </Routes>
            </BrowserRouter>
        </div>
        </div>
    );

}


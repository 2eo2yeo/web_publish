import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Introduce from './header/Introduce';
import About from './about/About';
import Skills from './skills/Skiils.jsx';
import Arrowup from './Arrowup';
import Mywork from './mywork/MyWork.jsx';
import Navigation from './header/Navigation';
import Testimonial from './testimonial/Testimonial.jsx';
import Contact from './Contact.jsx';

export default function Layout() {
    return (
        <div>
            <Header>
                <div className="header__logo">
                <img className="header__logo__img" src="/images/avata.png" alt="logo" />
                <h1 className="header__logo__title">2eo</h1>
                <Arrowup />
            </div>
                < Navigation />
            </Header>
                <Introduce />
                <About/>
                <Skills/>
                <Mywork/>
                <Testimonial/>
            <Outlet>
            </Outlet>
            <Footer>
                <Contact /> 
            </Footer>
        </div>
    );
}


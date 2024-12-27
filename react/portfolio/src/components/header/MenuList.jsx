import { useState } from 'react';
import React from 'react';
import Menu from './Menu';

export default function MenuList() {


    const [selected, setSelected] = useState('Home');
    const handleSelected = (menuName) => {
        setSelected(menuName);
    }
    
    


    const list = [
        { 'href': '#home', 'name': 'Home' },
        { 'href': '#about', 'name': 'About' },
        { 'href': '#skill', 'name': 'Skill' },
        { 'href': '#work', 'name': 'Work' },
        { 'href': '#testimonial', 'name': 'Testimonial' },
        { 'href': '#contact', 'name': 'Contact' },
    ];

    return (
        <nav>
            <ul className="header__menu">
                {list && list.map((menu) =>
                    <li>
                        <Menu href={menu.href} menuName={menu.name}
                            click={handleSelected} style={menu.name === selected ? 'header__menu__item active' : 'header__menu__item'}/>
                    </li>
                )}
            </ul>
        </nav>
    );
}


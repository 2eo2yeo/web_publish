import React, { useEffect, useState } from 'react';
import NavigationItem from './NavigationItem';

export default function HeaderTop() {

    const [menuList,setMenuList] = useState([]);
    const [category,setCategory] = useState('');

    useEffect(()=> {
                fetch("/json/data.json")
                .then(data => data.json())
                .then((jsonData) => {
                    setMenuList(jsonData.menuList);
                    })
                .catch(error => console.log(error))
            },[category]);
    
        const handleClickMenu2 = (category) => {
            setCategory(category);
        }

    return (
    <nav>
            <ul className="header__menu">
                {menuList && menuList.map((menu)=>
                <li>
                    <NavigationItem
                        href={menu.href}
                        name={menu.name}
                        click={handleClickMenu2}
                        category={menu.category}
                        isSelected={category === menu.category}
                        />
                </li>
                )}
            </ul>
    </nav>
    );
}


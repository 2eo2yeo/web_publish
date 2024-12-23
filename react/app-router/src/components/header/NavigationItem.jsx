import React from 'react';

export default function NavigationItem({href, name, click, category, isSelected}) {

    const handleClickMenu = () => {
        click(category);
    }

    const categorySelect = () => {
        return isSelected ? 'header__menu__item active' : 'header__menu__item'
    }

    return (
            <a class={categorySelect()} href={href}
            onClick={handleClickMenu}
            >{name}</a>
    );
}


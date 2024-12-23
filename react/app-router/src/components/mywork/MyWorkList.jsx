import React from 'react';

export default function MyWorkList({name, category, count, click, isSelected}) {

    //MyWorkList로 카테고리 전달
    const handleClickMenu = () => {
        click(category);
    }

    const categorySelect = () => {
        return isSelected ? 'category category--selected' : 'category'
    }

    return (
        <>
            <button 
                className={categorySelect()}
                onClick={handleClickMenu}>{name}
                <span class="category__count">{count}</span>
            </button>
        </>
    );
}


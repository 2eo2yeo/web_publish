import React from 'react';

export default function MyWorkList({name, category, count}) {

    //click 함수 넣기

    return (
        <>
            <button class="category category--selected">{name}
                <span class="category__count">{count}</span>
            </button>
        </>
    );
}


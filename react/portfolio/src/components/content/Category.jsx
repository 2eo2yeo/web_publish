import React from 'react';

export default function Category({name, count, style,click }) {


    return (
        <div>
            <button className={style} onMouseover={()=>{click(name)}}>{name}<span class="category__count">{count}</span></button>
        </div>
    );
}


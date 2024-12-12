import React from 'react';

export default function Book({img, title}) {
    return (
        <div style={{width:200}}>
            <img src={img} style={{width:200}} />
            <span>{title}</span>
        </div>
    );
}


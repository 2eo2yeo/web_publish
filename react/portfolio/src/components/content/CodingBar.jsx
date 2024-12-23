import React from 'react';

export default function CodingBar({title, percent}) {
    return (
        <div>
            <div class="bar__metadata"><span>{title}</span><span>98%</span></div>
            <div class="bar__bg"><div class="bar__value" style={{'width':`${percent}%`}}></div></div>
        </div>
    );
}


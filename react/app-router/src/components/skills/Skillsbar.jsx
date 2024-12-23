import React from 'react';

export default function SkillsItem({name, per}) {
    return (
        <>
            <div class="bar__metadata">
                <span>{name}</span>
                <span>{per}</span>
            </div>
            <div class="bar__bg">
                <div class="bar__value" style={{ 'width':`${per}%`}}></div>  
            </div>
        </>
    );
}


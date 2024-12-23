import React from 'react';

export default function MyWorkItem({src, alt, name, text }) {


    return (
        <>
            <img class="project__img" src={src} alt={alt} />
            <div class="project__metadata">
                <h3 class="project__metadata__title">{name}</h3>
                <p>{text}</p>
            </div>
        </>
    );
}


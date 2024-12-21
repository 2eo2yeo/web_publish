import React from 'react';
export default function AboutItem({ icon, name, description }) {
    return (
        <div>
            <div class="fa-solid fa-mobile major__icon">{icon}
            </div>
            <p class="major__title">{name}</p>
            <p>{description}</p>
        </div>
    );
}


import React from 'react';

export default function TestimonialItem({src,alt,lorem,name,company}) {
    return (
        <>
            <img class="testimonial__img" src={src} alt={alt}/>
            <div class="testimonial__bubble">
                <p>{lorem}</p>
                <p><a href="#" class="testimonial__bubble__name">{name}</a> / {company}</p>
            </div>
        </>
    );
}


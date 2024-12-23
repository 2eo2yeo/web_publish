import React from 'react';

export default function Testimonial({img,alt,text,name,company }) {
    return (
        <>
            <img class="testimonial__img" src={img} alt={alt} />
                <div class="testimonial__bubble">
                    <p>{text}</p>
                    <p><a href="#" class="testimonial__bubble__name">{name}</a> / {company}</p>
                </div>
            </>
            );
}


import React from 'react';
import Testimonial from './Testimonial';

export default function Testimonials() {

    const testimonialList = [
        {
            'img': 'images/testimonials/people1.webp',
            'alt': 'people1',
            'text': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?',
            'name': 'James Kim',
            'company': 'Google'
        },
        {
            'img': 'images/testimonials/people2.webp',
            'alt': 'people2',
            'text': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?',
            'name': 'Smith Park',
            'company': 'Samsung'
        },
        {
            'img': 'images/testimonials/people3.webp',
            'alt': 'people3',
            'text': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?',
            'name': 'Anna Jin',
            'company': 'Samsung'
        }
    ]

    return (
        <ul class="testimonials">
            {testimonialList.map((test) =>
                <li class="testimonial">
                    <Testimonial
                        img={test.img}
                        alt={test.alt}
                        text={test.text}
                        name={test.name}
                        company={test.company}
                    />
                </li>

            )}
        </ul>
    );
}


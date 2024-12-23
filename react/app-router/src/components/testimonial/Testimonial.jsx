import React, { useEffect, useState } from 'react';
import TestimonialItem from './TestimonialItem';

export default function Testimonial() {

    const [testList, setTestList] = useState();
    useEffect(()=> {
        fetch("/json/data.json")
        .then(data => data.json())
        .then(jsonData => setTestList(jsonData.testiList) )
        .catch(error => console.log(error))
    },[]);

    return (
        <section id="testimonial" class="section max-container" style={{'color':'var(--color-darkgreen)', 'background':'linear-gradient(to bottom , #424240 0%, #fff 40%)'}}>
            <h2 class="title testimonial-tle">Testimonial</h2>
            <p class="description testimonial-des">See what they say about me</p>
            <ul class="testimonials">
                {testList && testList.map((item, index) => (  
                    <li className="testimonial" key={index} style={{order : item.order}}>
                        <TestimonialItem
                            src = {item.src}
                            alt = {item.alt}
                            lorem = {item.lorem}
                            name = {item.name}
                            company = {item.company}
                            />
                    </li>
                ))}
            </ul>
        </section>
    );
}


import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import {faServer} from '@fortawesome/free-solid-svg-icons';
import AboutItem from './AboutItem';
import Jobs from './Jobs';

export default function About() {

    const list = [
        {
            'img' : 'images/jobs/google.png',
            'alt' : 'google',
            'profile': 'Google as Junior Software Engineer',
            'description': '2019 Oct - Until now'
        },
        {
            'img' : 'images/jobs/samsung.png',
            'alt' : 'samsung',
            'profile': 'Samsung as Junior Software Engineer',
            'description': '2010 Oct - 2019 Oct'
        }
        
    ]

    return (
        <>
            <section id="about" class="section max-container">
                <h2 class="title">About me</h2>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure natus, temporibus perspiciatis repudiandae nostrum modi
                    doloremque expedita non eius ipsum! Beatae porro adipisci
                    omnis architecto dignissimos. Iusto ipsa inventore adipisci.</p>
                <ul class="majors">
                        <li class="major">
                            <AboutItem
                                icon={<FontAwesomeIcon icon={faCss3Alt} />}
                                name="Front-end"
                                description='HTML, CSS, JavaScript, TypeScript, React, WebAPIs' /></li>
                                <li class="major">
                                <AboutItem
                                
                                icon ={<FontAwesomeIcon icon={faMobile} />}
                                name='Mobile'
                                description='Android Studio, React Native, iOS, Swift, Java, Kotlin'  /> 
                                </li>
                                <li class="major">
                            <AboutItem
                                icon={<FontAwesomeIcon icon={faServer} />}
                                name='Back-end'
                                description='Java, JavaScript, Go, Kotlin, Spring, Spring Boot'
                            />
                        </li>
                </ul>
                <ul class="jobs">
                    {list && list.map(item => 
                    <li class="job">
                        <Jobs img = {item.img} 
                                alt = {item.alt}
                                profile = {item.profile}
                                description = {item.description}
                                />
                    </li>
                    )}
                </ul>
            </section>
        </>
    );
}


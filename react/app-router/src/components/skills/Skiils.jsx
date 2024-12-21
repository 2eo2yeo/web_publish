import React, { useEffect, useState } from 'react';
import Skiilsbar from './Skillsbar.jsx'
import Tools from './Tools.jsx'
import EtcTools from './EtcTools.jsx'

export default function Skiils() {

    const [barList, setBarList] = useState();
    const [toolsList, setToolsList] = useState();
    const [etcToolList, setEtcToolList] = useState();


    useEffect(()=> {
        fetch("/json/data.json")
        .then(data => data.json())
        .then((jsonData) => {
            setBarList(jsonData.barList);
            setToolsList(jsonData.toolsList);
            setEtcToolList(jsonData.etcToolList);
        })
        .catch(error => console.log(error))
    },[]);


    return (
        <section id="skill" class="section max-container">
            <h2 class="title">My Skills</h2>
            <p class="description">Skills & Attributes</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nobis beatae, aliquid ratione commodi nam ex voluptate rem
                eveniet cupiditate optio natus? Cum, harum eum sint id quod
                nulla adipisci. Sunt?</p>
            <div class="skills">
                <article class="sklls__coding">
                    <h3 class="skill__title">Coding Skills</h3>
                    <ul>
                        {barList && barList.map((item)=>
                        <li class="bar">
                            <Skiilsbar name={item.name} per={item.per} />
                        </li>
                        )}
                    </ul>
                </article>
                <article class="skills__tools">
                    <h3 class="skill__title">Tools</h3>
                    <ul>
                        {toolsList && toolsList.map((item) => 
                            <li>
                            <Tools tool={item.tool} />
                            </li>    
                        )}
                    </ul>
                </article>
                <article class="skills__etc">
                    <h3 class="skill__title">Etc</h3>
                    <ul>
                        {etcToolList && etcToolList.map((item) =>
                            <li>
                                <EtcTools etc={item.etc} />
                            </li>
                        )}
                    </ul>
                </article>
            </div>
        </section>

    );
}


import React, { useEffect, useState } from 'react';
import MyWorkList from './MyWorkList';
import MyWorkItem from './MyWorkItem';

const [workList,setWorkList] = useState([]);
const [projectList,setProjectList] = useState([]);

    useEffect(()=> {
        fetch("/json/data.json")
        .then(data => data.json())
        .then((jsonData) => {
            setWorkList(jsonData.workList);
            setProjectList(jsonData.projectList);
        })
        .catch(error => console.log(error))
    },[]);

export default function MyWork() {
    return (
        <section id="work" class="section max-container">
            <h2 class="title">My work</h2>
            <p class="description">Projects</p>
            <ul class="categories">
                {projectList && projectList.map((item)=>
                    <li>
                        <MyWorkList name={item.name}
                                    category={item.category}
                                    count={item.count}/>
                    </li>
                )}
            </ul>
            <ul class="projects">
                {workList && workList.map((item)=>
                <li class="project">
                    <MyWorkItem 
                        src={item.src}
                        alt={item.alt}
                        name={item.name}
                        text={item.text}
                        />
                </li>
                )}
            </ul>
        </section>
    );
}


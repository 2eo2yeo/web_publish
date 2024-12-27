import React, { useEffect, useState } from 'react';
import MyWorkList from './MyWorkList';
import MyWorkItem from './MyWorkItem';


export default function MyWork() {
    const [workList,setWorkList] = useState([]);
    const [projectList,setProjectList] = useState([]);
    const [category,setCategory] = useState('all');
    
    useEffect(() => {
        fetch("/json/data.json")
            .then(data => data.json())
            .then((jsonData) => {
                // 프로젝트 카운트 계산
                const projectCounts = {
                    all: jsonData.projectList.length,
                    front: jsonData.projectList.filter(project => project.category === 'front').length,
                    back: jsonData.projectList.filter(project => project.category === 'back').length,
                    mobile: jsonData.projectList.filter(project => project.category === 'mobile').length,
                };

                // workList 업데이트
                const updatedWorkList = jsonData.workList.map((work) => ({
                    ...work,
                    count: projectCounts[work.category], 
                }));

                setWorkList(updatedWorkList);
                setProjectList(jsonData.projectList); // 초기 projectList 설정
            })
            .catch(error => console.log(error));
    }, []);


        useEffect(()=> {
            fetch("/json/data.json")
            .then(data => data.json())
            .then((jsonData) => {
                setWorkList(jsonData.workList);
                if(category === 'all') {
                    setProjectList(jsonData.projectList);                    
                } else {
                    const filterProjects =
                    jsonData.projectList.filter((project) => project.category === category); setProjectList(filterProjects);
                }
                })
            .catch(error => console.log(error))
        },[category]);


        const handleClickMenu2 = (category) => {
            setCategory(category);
        }

    return (
        



        <section id="work" class="section max-container">
            <h2 class="title">My work</h2>
            <p class="description">Projects</p>
            <ul class="categories">
                {workList && workList.map((item)=>
                    <li>
                        <MyWorkList name={item.name}
                                    category={item.category}
                                    click={handleClickMenu2}
                                    count={item.count}
                                    isSelected={category === item.category}
                                    />
                    </li>
                )}
            </ul>
            <ul class="projects">
            {projectList && projectList.map((item)=>
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


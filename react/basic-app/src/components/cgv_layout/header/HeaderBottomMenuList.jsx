import HeaderBottomMenu from "./HeaderBottomMenu.jsx";
import { useState, useEffect } from "react";
import { fetchJSON } from "../js/commons.js";

export default function HeaderBottomMenuList() {

    const [names, setNames] = useState([]);

    useEffect(()=>{
        // 공통모듈로 하나 만들어서 여러곳에서 공통으로 사용하는 방법
        fetchJSON("/data/cgv_header.json")
            .then(result => setNames(result.bottomMenuList))
            .catch(error => console.log(error));

        // 기존에 fetch 함수를 이용해서 promise를 바로 사용
        // fetch("/data/cgv_header.json")
        //     .then(data => data)
        //     .then(jsonData => setNames(jsonData.bottomMenuList))
        //     .catch(error => console.log(error));

    },[]);

    // const names=[
    //     {"name":"영화"},
    
    //     {"name":"극장"},
    //     {"name":"예매"},
    //     {"name":"스토어"},
    //     {"name":"이벤트"},
    //     {"name":"혜택"}
    // ];
    
    return(
        <ul className="flex-container">
            {names && names.map(item =>
                <li>
                <HeaderBottomMenu name={item.name}/>
                </li>
            )}
        </ul>
    
    );
}
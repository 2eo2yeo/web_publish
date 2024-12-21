import Dwitter from "./Dwitter.jsx";
import './Dwitter.css'
import { useEffect, useState } from "react";

//부모쪽에만 css파일 import해놓으면 자식 컴포넌트는 알아서 적용됨

export default function AppDwitter() {
    
    //지역변수에 있는 jsonData를 전역으로 꺼내는 작업 진행
    const [dwitters, setDwitters] = useState([]);  //useStatus()가 ->  dwitters의 상태를 관리함 
    //          set을 붙이는게 공식  배열으로 초기화 
    

    //https://react.dev/reference/react/useEffect 리액트 설명관련 사이트
    // useEffect(callback함수, dependencies?) : 맨 처음에 실행되는 함수 / 콜백안에 fetch가 들어감, dependencies는 없으면 굳이 안써도됨

    useEffect(()=>{ //맨처음 한번만 호출하도록 상태 관리
        fetch("data/dwitters.json") //fetch 이용시 network를 통해서 접속
            .then((result) => result.json()) //이게 성공하면 jsondata가됨
            .then((jsonData) => setDwitters(jsonData)) //여기서 성공한 값을 가져와서 처리 
            .catch(error => console.log(error));        
    },[]); 

    console.log(`dwitters --> ${dwitters}`);

    return(
        <div className="dwitter-container">
            <h1>Dwitter</h1>
            <ul className="dwitter-menu">
                <li>All Dwitter</li>
                <li>My Dwitter</li>
                <li>Login / SignUp</li>
            </ul>

            {dwitters.map((dwitter) => 
                <Dwitter
                    img = {dwitter.img}
                    name = {dwitter.name}
                    id = {dwitter.id}
                    date={dwitter.date}
                    content={dwitter.content} />
                )} 

            
            
        </div>
    );
    
}
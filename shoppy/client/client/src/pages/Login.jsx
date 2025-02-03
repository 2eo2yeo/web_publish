import { useState, useRef } from 'react';
import React from 'react';
import '../styles/login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { validateLogin } from '../utils/funcValidate.js'; //함수의 이름을 {}안에

export default function Login() {
    // const idRef = useRef(null);
    // const pwdRef = useRef(null);     

    const refs = {
        'idRef' : useRef(null),
        'pwdRef' : useRef(null)
    }  // 객체를 통으로 보내면 구조분해 할당으로 받을 수 있음


    const msgRefs = {
        'msgRef' : useRef(null)
    }


    const [formData, setFormData] = useState({'id':'', 'pwd':''});  
    //아이디 비번 다 넘겨야함, 초기값을 블레이스로 묶기
    // 리턴쪽의 name 값이랑 맞춰줘야함 // 초기값이 null로 되어있으면 유효성 체크가 어려워짐

    /* form데이터 입력 함수 */
    const handleChangeForm = (event) => {
        //setFormData에 아이디, 패스워드 저장
        const {name, value} = event.target; // 구조분해할당으로 name, value 꺼냄
        setFormData({...formData, [name]:value}); 
        //set함수에 name, value 넣음, 저장소 타입에 맞춰서 넣어야함{}
        //property값이 변수에 저장된 경우 []안에 넣고 호출
        // 스프레드 연산자 사용 : 최종으로 들어간 값만 나오기 때문에 데이터를 유지하며 쌓아야함
        // 중요!! 기존 객체 유지후 추가
    }



    /* submit 함수 */
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        
        if(validateLogin(refs, msgRefs)) {
            console.log('send data --> ', formData);
            // 리액트 ---> 노드서버(express) 데이터 전송
        // 빈값이 넘어가면 안되기 때문에 유효성 체크 함수 생성
        }
    }



    return (
        <div className="content">
            <h1 className="center-title">LOGIN</h1>
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <ul>
                    <li>
                        <p className="login-form-message">✔ 아이디와 비밀번호를 입력하신 후, 로그인을 진행해주세요.</p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <span className="login-form-input-icons"><FaUser/></span>
                            <input type="text" 
                                    name="id" 
                                    id="id"
                                    ref={refs.idRef}
                                    onChange={handleChangeForm}
                                    placeholder="아이디를 입력해주세요" />
                        </div>
                        <p id="error-msg-id"></p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <span className="login-form-input-icons"><FaLock/></span>
                            <input type="password" 
                                    name="pwd" 
                                    id="pwd"
                                    ref={refs.pwdRef}
                                    onChange={handleChangeForm}
                                    placeholder="패스워드를 입력해주세요" />
                        </div>
                        <p id="error-msg-pwd"></p>
                    </li>
                    <li>
                        <span style={{fontSize:"0.7em", color:"white"}}
                            ref={msgRefs.msgRef}>아이디 또는 패스워드를 입력해주세요</span>
                    </li>
                    <li>
                        <button type="submit" className="login-button">로그인</button>
                        {/* 로그인 버튼을 submit(서버로 넘기는 것) */}
                    </li>
                    <li>
                        <div  className="login-form-checkbox">
                            <input type="checkbox" name="status" />
                            <label for="">아이디 저장</label>
                        </div>
                        <div>
                            <a href="#">아이디 찾기</a> 
                            <span>&gt;</span>
                            <a href="#">패스워드 찾기</a> 
                            <span>&gt;</span>
                        </div>
                    </li>
                    <li>
                        <button type="button" className="login-button-naver">네이버 로그인</button>
                        
                    </li>
                </ul>
                <div className="loginplus-image">
                    <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="" />
                </div>
            </form>
        </div>
    );
}


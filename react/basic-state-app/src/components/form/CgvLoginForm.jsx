//함수들 레퍼런스 정리

import React, { useRef, useState } from 'react';
import './cgv.css'
import './commons.css'
import { validata } from '../../apis/validate.js';

export default function CgvLoginForm() {

    // const idRef = useRef(null);
    // const pwdRef = useRef(null);

    const refs = {
        idRef: useRef(null), //주솟값을 넣는 참조변수 refs.idRef
        pwdRef: useRef(null)
    };

    const initFormData = {'id':'', 'pwd':''};   //input의 name 값 가져오기
    const [formData, setFormData] = useState(initFormData);
    const [errorMsg, setErrorMsg] = useState({'id':'', 'pwd':''});

    const handleChangeForm = (event) => {
        const {name, value} = event.target //구조분해할당으로 데이터 가져오기
        setFormData({...formData,[name]:value});  //setFormData()에 가져온 데이터 넣어주기
        if(name === 'id') {
            (value === '') ?
            setErrorMsg({...errorMsg, ['id']:'아이디를입력해주세요'}) : 
            setErrorMsg({...errorMsg, ['id']:''}) ; //입력시 사라지게
        } else if (name === 'pwd') {
            (value === '') ?
            setErrorMsg({...errorMsg, ['pwd']:'비밀번호를입력해주세요'}) :
            setErrorMsg({...errorMsg, ['pwd']:''}) ;
        }
    }





    const handleSubmit = (event) => {
        event.preventDefault();

        //validate.js에 파라미터로 객체리터럴 데이터를 넘겨줌(내용이 많아서)
        const param = {
            // 'idRef':idRef, 
            // 'pwdRef':pwdRef,
            'refs' : refs, //참조의 참조...
            'errorMsg':errorMsg,
            'setErrorMsg': setErrorMsg };
        if(validata(param)) console.log(formData);
    }

    return (
                <div className="center-layout login-form">
            <h1 className="center-title">로그인</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <i className="fa-regular fa-user"></i>
                            <input type="text" 
                                name="id" 
                                id="id" 
                                // oninput="handleChange(event)" 
                                onChange={handleChangeForm}
                                ref={refs.idRef} 
                                placeholder="아이디를 입력해주세요" />
                        </div>
                        <p id="error-msg-id" style={{'color':'red'}}>{errorMsg.id}</p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <i className="fa-solid fa-lock"></i>
                            <input type="password" 
                                    name="pwd"
                                    id="pwd" 
                                    // oninput="handleChange(event)"
                                    onChange={handleChangeForm} 
                                    ref={refs.pwdRef} 
                                    placeholder="비밀번호를 입력해주세요" />
                        </div>
                        <p id="error-msg-pwd" style={{'color':'red'}}>{errorMsg.pwd}</p>
                    </li>
                    <li>
                        <button type="submit" className="btn-main-color">로그인</button>
                    </li>
                    <li>
                        <div>
                            <input type="checkbox" name="status" />
                            <label for="">아이디 저장</label>
                        </div>
                        <div>
                            <a href="#">아이디 찾기</a> 
                            <span>&gt;</span>
                            <a href="#">비밀번호 찾기</a> 
                            <span>&gt;</span>
                        </div>
                    </li>
                    <li>
                        <button className="btn-main-color-naver">네이버 로그인</button>
                    </li>
                </ul>
                <div>
                    <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="" />
                </div>
            </form>
        </div> 
    );
}


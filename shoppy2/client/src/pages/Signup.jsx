import React, { useState } from 'react';
import '../style/signup.css';
import {validateSignup} from '../utils/funcValidate.js'

export default function Signup() {

    const names = ['id','pwd','cpwd','name','phone','emailname'] 
    const namesKor = ['아이디','비밀번호','비밀번호 확인','이름','전화','이메일주소']
    const placeholderKor = ['아이디(6~12자 이내)','비밀번호를 입력하세요', '비밀번호를 확인하세요', '이름을 입력하세요',  '전화번호를 입력하세요', '이메일주소를 입력하세요']

    // 배열 함수 정의 
    const placeholder = names.reduce((acc, name, idx)=>{
        acc[name] = placeholderKor[idx]; return acc;
    },{})

    const labels = names.r


    const msgRefs = {
        'msgIdRef' : useRef(null),
        'msgPwdRef' : useRef(null),
        'msgCpwdRef' : useRef(null),
        'msgNameRef' : useRef(null),
        'msgPhoneRef' : useRef(null),
        'msgEmailnameRef' : useRef(null),
        'msgEmaildomainRef' : useRef(null)
    }

    const refs = {
        'idRef' : useRef(null),
        'pwdRef' : useRef(null),
        'cpwdRef' : useRef(null),
        'nameRef' : useRef(null),
        'phoneRef' : useRef(null),
        'emailnameRef' : useRef(null),
        'emaildomainRef' : useRef(null)
    }

    const initFormData = {
        'id':'', 
        'pwd':'',
        'cpwd':'',
        'name':'',
        'phone':'',
        'emailname':''
    } 



    const [formData, setFormData] = useState(initFormData);

    //changeform
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }


    //submit함수
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // 서버로 전송
        if (validateSignup(refs, msgRefs)) {
            console.log(formData);
            
        }
    }


    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSignupSubmit}>
                <ul>
                    <li>
                        <label for="" ><b>아이디</b></label>
                        <span ref={msgRefs.msgIdRef}>아이디를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="id"
                                    id="id"
                                    onChagne={handleChangeForm}
                                    ref={refs.idRef}
                                    placeholder = "아이디 입력(6~20자)" />
                            <button type="button" >중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                        <span ref={msgRefs.msgPwdRef}>12자 이내의 비밀번호를 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="pwd"
                                    id="pwd"
                                    onChagne={handleChangeForm}
                                    ref={refs.pwdRef}
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호 확인</b></label>
                        <span ref={msgRefs.msgCpwdRef}>비밀번호 확인을 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="cpwd"
                                    id="cpwd"
                                    onChagne={handleChangeForm}
                                    ref={refs.cpwdRef}
                                    placeholder="비밀번호 재입력" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                        <span ref={msgRefs.msgNameRef}>이름을 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="name"
                                    id="name"
                                    onChagne={handleChangeForm}
                                    ref={refs.nameRef}
                                    placeholder="이름을 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>휴대폰번호</b></label>
                        <span ref={msgRefs.msgPhoneRef}>휴대폰번호를 입력해주세요('-' 포함)</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    id="phone"
                                    onChagne={handleChangeForm}
                                    ref={refs.phoneRef}
                                    placeholder="휴대폰 번호 입력('-' 포함)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span ref={msgRefs.msgEmailnameRef} >이메일 주소를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="emailname"
                                    id = "emailname"
                                    onChagne={handleChangeForm}
                                    ref={refs.emailnameRef}
                                    placeholder="이메일 주소" />
                            <span>@</span>       
                            <select name="emaildomain" 
                                    id="emaildomain" 
                                    ref={refs.emaildomainRef}
                                    onChagne={handleChangeForm} >
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}
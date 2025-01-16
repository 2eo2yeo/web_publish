import React, { useRef, useState } from 'react';
import '../styles/signup.css';
import {validateSignup} from '../utils/funcValidate.js'

export default function Signup() {

    // 또는 alert가 아닌 글자를 띄우는 방식
    // -> 글자를 띄우는 객체를 reference하는 참조값이 또 필요함 
    const msgRefs = {
        'msgIdRef' : useRef(null),
        'msgPwdRef' : useRef(null),
        'msgCpwdRef' : useRef(null),
        'msgNameRef' : useRef(null),
        'msgPhoneRef' : useRef(null),
        'msgEmailnameRef' : useRef(null),
        'msgEmaildomainRef' : useRef(null)
    }
    
    //form을 참조하는 것이 refs 
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
    } //이벤트가 발생할때마다 여기 + 추가해서 넣어야함

    const [formData, setFormData] = useState(initFormData)
        // 또는 

    /* change form */
    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value}); 
    } //name이라는 변수가 property가 되기위해서는 []대괄호 사용

    /* submit함수 */
    const handleSignupSubmit = (event) => {
        event.preventDefault();
        
        // 서버로 전송
        if(validateSignup(refs,msgRefs)) { //formData 찍기 전 validate진행
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
                                    ref={refs.idRef}
                                    onChange={handleChangeForm}
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
                                    ref={refs.pwdRef}
                                    onChange={handleChangeForm}
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
                                    ref={refs.cpwdRef}
                                    onChange={handleChangeForm}
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
                                    ref={refs.nameRef}
                                    onChange={handleChangeForm}
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
                                    ref={refs.phoneRef}
                                    onChange={handleChangeForm}
                                    placeholder="휴대폰 번호 입력('-' 포함)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span ref={msgRefs.msgEmailnameRef}>이메일 주소를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="emailname"
                                    id = "emailname"
                                    ref={refs.emailnameRef}
                                    onChange={handleChangeForm}
                                    placeholder="이메일 주소" />
                            <span>@</span>       
                            <select name="emaildomain" 
                                    id="emaildomain"
                                    ref={refs.emaildomainRef}
                                    onChange={handleChangeForm}  >
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



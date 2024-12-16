import React, { useState,useRef } from 'react';
import { validateSignup } from '../../apis/validate';
import { errorCheckSignup } from '../../apis/errorCheck.js';

export default function Signup() {


    //유효성 체크 주소
    const refs = {
        idRef : useRef(null),
        pwdRef : useRef(null),
        cpwdRef : useRef(null),
        nameRef : useRef(null),
        phoneRef : useRef(null),
        emailNameRef : useRef(null),
        emailDomainRef : useRef(null)
    };

    //폼데이터 저장소
    
    const init = {
            'id':'',
            'pwd':'',
            'cpwd':'',
            'name':'',
            'phone':'',
            'emailName':'',
            'emailDomain':'',
        }
    const initErrors = {
            'id':'',
            'pwd':'',
            'cpwd':'',
            'name':'',
            'phone':'',
            'emailName':'',
            'emailDomain':'',
        }
    const [formData, setformData] = useState(init);
    const [errors, setErrors] = useState(initErrors);

    //폼의 입력이 변경되는 경우 호출되는 함수 
    const handleChangeSigup = (event) => {
        const {name, value} = event.target
        setformData({...formData, [name]:value});
        errorCheckSignup(name, value, errors, setErrors);
        // if(name === 'id') {
        //     (value === '') ? setErrors({...errors, ['id']:'아이디를 입력해주세요.'}) :
        //     setErrors({...errors,['id']:''});
        // }
    };



    //폼의 입력이 종료된 후 submit 함수
    const handleSubmitSignup = (event) => {
        event.preventDefault();
        if(validateSignup(refs, errors, setErrors)) console.log(formData);
    };

    return (
        <div class="content">
            <div class="join-form center-layout">
                <h1 class="center-title">회원가입</h1>
            <form onSubmit={handleSubmitSignup}>
                <ul>
                    <li>
                        <label for="" ><b>아이디</b></label>
                        <span id ="error-msg-id">{errors.id}</span>
                        <div>
                            <input type="text" 
                                    name="id" 
                                    id="id" 
                                    value={formData.id}
                                    onChange={handleChangeSigup}
                                    ref={refs.idRef}
                                    placeholder="아이디 입력(6~20자)"
                                    /> 
                            <button type="button" onclick="idCheck(event)">중복확인</button>       
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                        <span id ="error-msg-pwd" >{errors.pwd}</span>
                        <div>
                            <input type="password" 
                                name="pwd" 
                                id="pwd"
                                onChange={handleChangeSigup}
                                // onblur="passwordCheck()"
                                value={formData.pwd}
                                ref={refs.pwdRef}
                                placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" 
                                    />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호 확인</b></label>
                        <span id ="error-msg-cpwd">{errors.cpwd}</span>
                        <div>
                            <input type="password" 
                                name="cpwd"
                                id="cpwd"
                                onChange={handleChangeSigup}
                                ref={refs.cpwdRef}
                                value={formData.cpwd}
                                placeholder="비밀번호 재입력" 
                                />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                        <span id ="error-msg-name">{errors.name}</span>
                        <div>
                            <input type="text" 
                                    name="name"
                                    id="name"
                                    onChange={handleChangeSigup}
                                    ref={refs.nameRef}
                                    value={formData.name}
                                    placeholder="이름을 입력해주세요" 
                                    />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>전화번호</b></label>
                        <span id ="error-msg-phone">{errors.phone}</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    id="phone"
                                    onChange={handleChangeSigup}
                                    ref={refs.phoneRef}
                                    value={formData.phone}
                                    placeholder="휴대폰 번호 입력('-' 포함)" 
                                    />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span id ="error-msg-emailname">{errors.emailName}</span>
                        <div>
                            <input type="text" 
                                    name="emailName"
                                    id="emailName"
                                    onChange={handleChangeSigup}
                                    ref={refs.emailNameRef}
                                    value={formData.emailName}
                                    placeholder="이메일 주소" 
                                    />
                            <span>@</span>       
                            <select name="emailDomain"
                                id="emailDomain"
                                onChange={handleChangeSigup}
                                ref={refs.emailDomainRef}
                                value={formData.emailDomain}
                                >
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
        </div>
    );
}


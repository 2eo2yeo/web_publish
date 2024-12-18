import React, { useState, useRef } from 'react';
import { validateSignup, handleIdCheck, handlePasswordCheck } from '../../apis/validate';
import { errorCheckSignup } from '../../apis/errorCheck.js';
import { initFormNames } from '../../apis/initial.js';

export default function Signup() {

    //유효성 체크 주소
    const idMsgRef = useRef(null);
    const passMsgRef = useRef(null);
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailNameRef: useRef(null),
        emailDomainRef: useRef(null)
    };

    //폼데이터 저장소
    // 공통된 함수를 뽑아서 배열을 만들어서 reduce 함수에 적용
    const names = [
        'id', 'pwd', 'cpwd', 'name', 'phone', 'emailName', 'emailDomain'];

    // const init = { 'id':'', 'pwd':'', 'cpwd':'', 'name':'', 'phone':'', 'emailName':'', 'emailDomain':''}
    // const initErrors = { 'id':'', 'pwd':'', 'cpwd':'', 'name':'', 'phone':'', 'emailName':'', 'emailDomain':'' }

    const [formData, setformData] = useState(initFormNames(names));

    const [errors, setErrors] = useState((names));



    //폼의 입력이 변경되는 경우 호출되는 함수 
    const handleChangeSigup = (event) => {
        const { name, value } = event.target
        setformData({ ...formData, [name]: value });
        idMsgRef.current.style.setProperty('color', 'red');
        idMsgRef.current.style.setProperty('font-weight', 'normal')
        passMsgRef.current.style.setProperty('color', 'red');
        passMsgRef.current.style.setProperty('font-weight', 'normal')
        errorCheckSignup(name, value, errors, setErrors);
        // if(name === 'id') {
        //     (value === '') ? setErrors({...errors, ['id']:'아이디를 입력해주세요.'}) :
        //     setErrors({...errors,['id']:''});
        // }
    };


    // //패스워드 & 패스워드 확인 check
    // const handlePasswordCheck = () => {
    //     const pwd = refs.pwdRef.current;
    //     const cpwd = refs.cpwdRef.current;
    //     if (pwd.value === '') {
    //         errorCheckSignup('pwd', pwd.value, errors, setErrors);
    //         pwd.focus();
    //     } else if (cpwd.value === '') {
    //         errorCheckSignup('cpwd', cpwd.value, errors, setErrors);
    //         cpwd.focus();
    //     } else {
    //         if (pwd.value === cpwd.value) {
    //             setErrors({ ...errors, ['pwd']: '비밀번호가 동일합니다' })
    //             passMsgRef.current.style.setProperty('color', 'green');
    //             passMsgRef.current.style.setProperty('font-weight', 'bold')
    //         } else {
    //             setErrors({ ...errors, ['pwd']: '비밀번호가 일치하지 않습니다. 다시 입력해주세요' })
    //             setformData({ ...formData, ['pwd']: '', ['cpwd']: '' })
    //             refs.pwdRef.current.focus();
    //         }
    //     }
    // }

    //폼의 입력이 종료된 후 submit 함수
    const handleSubmitSignup = (event) => {
        event.preventDefault();
        if (validateSignup(refs, errors, setErrors)) console.log(formData);
    };

    return (
        <div class="content">
            <div class="join-form center-layout">
                <h1 class="center-title">회원가입</h1>
                <form onSubmit={handleSubmitSignup}>
                    <ul>
                        <li>
                            <label for="" ><b>아이디</b></label>
                            <span id="error-msg-id" ref={idMsgRef}>{errors.id}</span>
                            <div>
                                <input type="text"
                                    name="id"
                                    id="id"
                                    value={formData.id}
                                    onChange={handleChangeSigup}
                                    ref={refs.idRef}
                                    placeholder="아이디 입력(6~20자)"
                                />
                                {/* 파라미터 넘겨줄 때 선언된 객체만 가능 */}
                                <button type="button" onClick={() => 
                                    {
                                    const param = {
                                    'idRef' : refs.idRef , 
                                    'errorCheckSignup' : errorCheckSignup , 
                                    'errors' : errors, 
                                    'setErrors' : setErrors , 
                                    'idMsgRef' : idMsgRef
                                        }
                                    handleIdCheck(param)
                                    }}>
                                    
                                    중복확인</button>
                                <input type="hidden" id="idCheckResult" value="default" />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호</b></label>
                            <span id="error-msg-pwd" ref={passMsgRef} >{errors.pwd}</span>
                            <div>
                                <input type="password"
                                    name="pwd"
                                    id="pwd"
                                    onChange={handleChangeSigup}

                                    /* 파라미터에서 보낼 것을 하나하나 열거하는게 아닌 객체 상태로 만들어서 전달하는 것이 효율적이다 */
                                    onBlur={() => 
                                    {
                                        const param = {
                                            'refs' : refs,
                                            'errorCheckSignup' : errorCheckSignup,
                                            'errors' : errors,
                                            'setErrors' : setErrors,
                                            'passMsgRef' : passMsgRef,
                                            'formData' : formData,
                                            'setformData' : setformData

                                        }
                                        handlePasswordCheck(param) 
                                    }}
                                    value={formData.pwd}
                                    ref={refs.pwdRef}
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)"
                                />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호 확인</b></label>
                            <span id="error-msg-cpwd">{errors.cpwd}</span>
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
                            <span id="error-msg-name">{errors.name}</span>
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
                            <span id="error-msg-phone">{errors.phone}</span>
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
                            <span id="error-msg-emailname">{errors.emailName}</span>
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


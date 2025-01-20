import React, { useState } from 'react';
import '../style/signup.css';
import { validateSignup, handleDuplicateIdCheck , handlePasswordCheck } from '../utils/funcValidate.js'
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js'

export default function Signup() {


    const { names, placeholders, lables, initFormData } = initSignup();
    const { refs, msgRefs } = useInitSignupRefs(names);

    const [formData, setFormData] = useState(initFormData);
    const [idCheckResult, setIdCheckResult] = useState('default');

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
            
            // 서버 전송 전 아이디 중복확인 체크 
            if(idCheckResult === 'default') {
                alert('아이디 중복확인을 진행해주세요');
                return false;
            } else {
                console.log(formData);
            }

        }
    }


    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSignupSubmit}>
                <ul>
                    {names && names.map((name) => (
                        <li>
                            <label for="" ><b>{lables[name]}</b></label>
                            <span ref={msgRefs.current[name.concat('MsgRef')]}>{lables[name]}를 입력해주세요.</span>
                            <div>
                                {(name === 'emailname') ? (
                                    <>
                                        <input type={(name === 'pwd' || name === 'cpwd') ? "password" : "text"}
                                            name={name}
                                            onChange={handleChangeForm}
                                            ref={refs.current[name.concat('Ref')]}
                                            placeholder={placeholders[name]} />
                                        <span>@</span>
                                        <select name="emaildomain"
                                            ref={refs.current["emaildomainRef"]}
                                            onChange={handleChangeForm} >
                                            <option value="default">선택</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="daum.net">daum.net</option>
                                        </select>
                                    </>

                                ) : (

                                    <>
                                        <input type={(name === 'pwd' || name === 'cpwd') ? "password" : "text"}
                                            name={name}
                                            ref={refs.current[name.concat('Ref')]}
                                            onChange={handleChangeForm}
                                            onBlur={
                                                ( name === 'cpwd') ? (

                                                    () => {
                                                        handlePasswordCheck(
                                                            refs.current['pwdRef'],
                                                            refs.current['cpwdRef'],
                                                            msgRefs.current['pwdMsgRef'],
                                                            msgRefs.current['cpwdMsgRef'],
                                                            refs.current['nameRef']
                                                        )
                                                    }
                                                ) : null
                                            }
                                            placeholder={placeholders[name]} />

                                        {(name === 'id' &&
                                            <>
                                                <button type="button"
                                                    onClick={
                                                        () => {handleDuplicateIdCheck(
                                                            refs.current['idRef'],
                                                            msgRefs.current['idMsgRef'],
                                                            refs.current['pwdRef'],
                                                            setIdCheckResult
                                                        )}
                                                        }>중복확인</button>
                                                <input type="hidden" 
                                                    value={idCheckResult}
                                                    />
                                            </>
                                        )}
                                    </>
                                )}

                            </div>
                        </li>
                    ))} {/* End of map */}
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}
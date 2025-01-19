import React, { useState } from 'react';
import '../style/signup.css';
import { validateSignup } from '../utils/funcValidate.js'
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js'

export default function Signup() {


    const {names, placeholders, lables, initFormData} = initSignup();
    const {refs, msgRefs} = useInitSignupRefs(names);

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
                    {names && names.map((name) => (
                        <li>
                            <label for="" ><b>{lables[name]}</b></label>
                            <span ref={msgRefs[name.concat('MsgRef')]}>{lables[name]}를 입력해주세요.</span>
                            <div>
                                {(name === 'emailname') ? (
                                    <>
                                        <input type="text"
                                            name={name}
                                            onChange={handleChangeForm}
                                            ref={refs[name.concat('Ref')]}
                                            placeholder={placeholders[name]} />
                                        <span>@</span>
                                        <select name="emaildomain"
                                            ref={refs["emaildomainRef"]}
                                            onChange={handleChangeForm} >
                                            <option value="default">선택</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="daum.net">daum.net</option>
                                        </select>
                                    </>

                                    ) : (

                                    <>
                                        <input type = {(name === 'pwd' || name === 'cpwd') ? "password" : "text" }
                                            name={name}
                                            onChagne={handleChangeForm}
                                            ref={refs[name.concat('Ref')]}
                                            placeholder={placeholders[name]}/>
                                        
                                        {(name === 'id' &&
                                            <>
                                            <button type="button" >중복확인</button>
                                            <input type="hidden" id="idCheckResult" value="default" />
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



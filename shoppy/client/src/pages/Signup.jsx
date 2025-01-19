import React, { useRef, useState } from 'react';
import '../styles/signup.css';
import { validateSignup } from '../utils/funcValidate.js'
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js'



export default function Signup() {

    // funcInitialize 파일 내부의 함수 구조분해 할당으로 받아옴
    const {names, placeholders, lables, initFormData} = initSignup();
    const {refs, msgRefs} = useInitSignupRefs(names);
    // 위 두개의 순서는 변경이 되면 안됨. 
    // names를 받아온 후 순차적으로 실행해야 되기 때문에

    const [formData, setFormData] = useState(initFormData)


    /* change form */
    const handleChangeForm = (event) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    } //name이라는 변수가 property가 되기위해서는 []대괄호 사용

    /* submit함수 */
    const handleSignupSubmit = (event) => {
        event.preventDefault();

        // 서버로 전송
        if (validateSignup(refs, msgRefs)) { //formData 찍기 전 validate진행
            console.log(formData);
        }
    }


    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSignupSubmit}>
                <ul>
                    {/* li가 반복되니까 li하나만 구조를 남겨놓고 map으로 돌리기 그 중에 div는 emailname의 경우 형태가 다르므로
                        삼항연산자로 조건을 줘서 출력함 */}
                    {
                        names && names.map((name) => (

                            <li>
                                <label for="" ><b>{lables[name]}</b></label>
                                <span ref={msgRefs.current[name.concat('MsgRef')]}>{lables[name]}를 입력해주세요</span>
                                <div>
                                {/*  (name === 'emailname')?(이메일구조):(!이메일구조)  */}
                                    {(name === 'emailname') ? (
                                        <>
                                            <input type="text"
                                                name={name}
                                                ref={refs.current[name.concat('Ref')]}
                                                // refs = {irRef:null...} 
                                                // refs의 idRef를 찾고 null 값 대신에 현재 주소를 추가 하도록 호출
                                                //idRef를 셀렉팅 하기 위해 concat을 이용한다.
                                                onChange={handleChangeForm}
                                                placeholder={placeholders[name]}
                                                />

                                            <span>@</span>
                                            <select name="emaildomain"
                                                ref={refs.current["emaildomainRef"]}
                                                // emaildomain은 name 배열에 없으므로 이름 그대로 접근
                                                onChange={handleChangeForm}  >
                                                <option value="default">선택</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="daum.net">daum.net</option>
                                            </select>
                                        </>
                                    ) : (
                                        <>
                                            <input type=
                                                {(name ==='pwd' || name ==='cpwd') ? "password": "text"}
                                                
                                                name={name}
                                                ref={refs.current[name.concat('Ref')]}
                                                onChange={handleChangeForm}
                                                placeholder={placeholders[name]} />
                                            {(name === 'id' &&
                                                <>
                                                    <button type="button" >중복확인</button>
                                                    <input type="hidden" id="idCheckResult" value="default" />
                                                </>
                                            )
                                            }
                                        </>
                                    )
                                    }
                                </div>
                            </li>
                        ))
                    }  {/* end of map */}

                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}



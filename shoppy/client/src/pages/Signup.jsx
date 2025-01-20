import React, { useRef, useState } from 'react';
import '../styles/signup.css';
import { validateSignup, handleDuplicateIdCheck, handlePasswordChek } from '../utils/funcValidate.js'
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js'



export default function Signup() {

    // funcInitialize 파일 내부의 함수 구조분해 할당으로 받아옴
    const {names, placeholders, lables, initFormData} = initSignup();
    const {refs, msgRefs} = useInitSignupRefs(names);
    // 위 두개의 순서는 변경이 되면 안됨. 
    // names를 받아온 후 순차적으로 실행해야 되기 때문에

    const [formData, setFormData] = useState(initFormData)
    const [idCheckResult, setIdCheckResult] = useState('default')

    /* change form */
    const handleChangeForm = (event) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    } //name이라는 변수가 property가 되기위해서는 []대괄호 사용

    /* submit함수 */
    const handleSignupSubmit = (event) => {
        event.preventDefault();

        // 서버로 전송
        if (validateSignup(refs, msgRefs)) { 
            //  서버 전송 전 아이디 중복확인 체크
            if(idCheckResult  === 'default') {
                alert('중복확인을 진행해 주세요')
                return false;
            } else {
                console.log(formData);
            }
        }
    }




    return (
        <div className="content">
            <h1 className="center-title">SIGN UP</h1>
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
                                                onBlur={ 
                                                    //cpwd 내에서만 함수호출 위해서 삼항연산자 사용
                                                    ( name ==='cpwd' ) ? ( ()=>{ handlePasswordChek(
                                                        refs.current['pwdRef'],
                                                        refs.current['cpwdRef'],
                                                        refs.current['nameRef'],
                                                        msgRefs.current['pwdMsgRef'],
                                                        msgRefs.current['cpwdMsgRef']
                                                            )}
                                                    )  : null
                                                        // 조건불충족시 아무 동작 X
                                                }
                                                placeholder={placeholders[name]} />
                                            {(name === 'id' &&
                                                <>
                                                    <button type="button" 
                                                        onClick={()=>{handleDuplicateIdCheck(
                                                            // 전체객체인 refs나 msgRefs를 보내는 것은 무겁기 때문에 필요한 주소값만 보냄
                                                            refs.current['idRef'],
                                                            msgRefs.current['idMsgRef'],
                                                            refs.current['pwdRef'],
                                                            setIdCheckResult
                                                        )}}
                                                        >중복확인</button>
                                                    <input type="hidden" 
                                                            value={idCheckResult} 
                                                            />
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
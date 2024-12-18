import React, { useState, useRef } from 'react';
import {validateFormSignup2} from'../../apis/validate.js'
import { initFormNames } from '../../apis/initial.js';


export default function Signup2() {

    //배열 + reduce() 함수
    
    const initArray = [ 'id', 'pass', 'name', 'phone1', 'phone2', 'phone3', 'phone3', 'address', 'birth1', 'birth2', 'birth3', 'gender', 'email', 'intro'
    ];

    //리액트에서 관리하는 useRef는 콜백함수에 들어갈 수 없기에 실행이 안됨
    // React 전용useRef함수는 custom hooks을 활용
    // const refs2 = initArray.reduce((acc, key)=>{
    //      acc[key] = useRef(null) //연산식임
    //     return acc
    // }, {})

    const refs = {
        //힙에 생성이 되어지는 주소값을 가져와서 처리 -> 기본값으로 설정, 
        //브라우저에서 실행이 되면 주솟값이 넘어오게 된다.
        //ref 의 목적 ->> 유효성 체크를 위해 같이 씀 
        idRef: useRef(null),
        passRef: useRef(null),
        nameRef: useRef(null),
        phone1Ref: useRef(null),
        phone2Ref: useRef(null),
        phone3Ref: useRef(null),
        addressRef: useRef(null),
        birth1Ref: useRef(null),
        birth2Ref: useRef(null),
        birth3Ref: useRef(null),
        jobRef: useRef(null),
        genderRef: useRef(null),
        emailRef: useRef(null),
        introRef: useRef(null),

    }

    
    const [formData, setformData] = useState(initFormNames(initArray));

    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setformData({...formData, [name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateFormSignup2(refs)) console.log(formData);
        
    }


    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디:</label>
                        <input type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleChangeForm}
                            ref={refs.idRef}
                        />
                    </li>
                    <li>
                        <label>비밀번호:</label>
                        <input type="password"
                            name="pass"
                            value={formData.pass}
                            onChange={handleChangeForm}
                            ref={refs.passRef}
                        />
                    </li>
                    <li>
                        <label>이름:</label>
                        <input type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChangeForm}
                            ref={refs.nameRef}
                        />
                    </li>
                    <li>
                        <label>전화:</label>
                        <input type="text"
                            name="phone1"
                            value={formData.phone1}
                            onChange={handleChangeForm}
                            ref={refs.phone1Ref}
                        />
                        -
                        <input type="text"
                            name="phone2"
                            value={formData.phone2}
                            onChange={handleChangeForm}
                            ref={refs.phone2Ref}
                        />-
                        <input type="text"
                            name="phone3"
                            value={formData.phone3}
                            onChange={handleChangeForm}
                            ref={refs.phone3Ref}
                        />
                    </li>
                    <li>
                        <label>주소:</label>
                        <input type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChangeForm}
                            ref={refs.addressRef}
                        />
                    </li>
                    <li>
                        <label>생일:</label>
                        <input type="text"
                            name="birth1"
                            value={formData.birth1}
                            onChange={handleChangeForm}
                            ref={refs.birth1Ref}
                        />
                        /
                        <input type="text"
                            name="birth2"
                            value={formData.birth2}
                            onChange={handleChangeForm}
                            ref={refs.birth2Ref}
                        />
                        /
                        <input type="text"
                            name="birth3"
                            value={formData.birth3}
                            onChange={handleChangeForm}
                            ref={refs.birth3Ref}
                        />
                    </li>
                    <li>
                        <label>직업:</label>
                        <select name="job" onChange={handleChangeForm} ref={refs.jobRef}>
                            <option value="default">선택</option>
                            <option value="frontend">프론트</option>
                            <option value="backend">백엔드</option>
                            <option value="system">시스템</option>
                        </select>
                    </li>
                    <li>
                        <label>성별:</label>
                        <input type="radio"
                            name="gender"
                            value="m"
                            onChange={handleChangeForm}
                            ref={refs.genderRef}
                        />남
                        <input type="radio"
                            name="gender"
                            value="f"
                            onChange={handleChangeForm}
                            ref={refs.genderRef}
                        />여
                    </li>
                    <li>
                        <label>이메일:</label>
                        <input type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChangeForm}
                            ref={refs.emailRef}
                        />
                    </li>
                    <li>
                        <label>자기소개:</label>
                        <textarea rows="10" cols='50'
                            name="intro"
                            value={formData.intro}
                            onChange={handleChangeForm}
                            ref={refs.introRef}></textarea>
                    </li>
                    <li>
                        <button type='submit'>회원가입</button>
                        <button>취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


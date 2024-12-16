import React, { useState, useRef } from 'react';
import {validateLogin2} from '../../apis/validate.js';

export default function Login2() {


    //4번째 
    const idRef = useRef(null);
    const passRef = useRef(null);

    //1번째
    const [formData, setFormData] = useState({'id':'', 'pass':''});
    //여기 들어가는 키는 form의 name과 맞춰주는게 좋음 

    //7번째 - 아이디 패스워드가 달라질때 에러메세지를 띄우는 것 저장소 생성 -> 유효성 체크시 들어갈 수 있게 하기
    const [errorMsg, setErrorMsg] = useState({'id':'', 'pass':''}); 

    //2번째
    const handleChange = (event) => {
        const {name, value} = event.target; //아래 return에서 name과, value를받음
        setFormData({...formData, [name]:value});
        if(name === 'id'){
            (value === '') ?
            setErrorMsg({...errorMsg, ['id']:'아이디를 입력해주세요'}) :
            setErrorMsg({...errorMsg, ['id']:''}) ;   //에러메시지는 입력시 사라지게 하기
        } else if (name === 'pass') {
            (value === '')?
            setErrorMsg({...errorMsg, ['pass']:'비밀번호를 입력해주세요'}) :
            setErrorMsg({...errorMsg, ['pass']:''}) ;
        }; 
    }

    //6번째
    // const validate = () => {
    //     // let result = true;
    //     if(idRef.current.value === '') {
    //         // alert('아이디를 입력해주세요')
    //         //유효성 체크시 에러메세지 띄우기
    //         setErrorMsg({...errorMsg, ['id']:'아이디를 입력해주세요'});
    //         idRef.current.focus(); 
    //         return false;
    //     } else if(passRef.current.value === '') {
    //         // alert('비밀번호를 입력')
    //         setErrorMsg({...errorMsg, ['pass']:'비밀번호를 입력해주세요'});
    //         passRef.current.focus(); 
    //         return false;
    //     }
    //     return true;
    // }


    //3번째
    const handleSubmit = (e) => {
        e.preventDefault();
        const param = {
            'idRef' : idRef,
            'passRef' : passRef,
            'errorMsg': errorMsg,
            'setErrorMsg' : setErrorMsg
        };
        
        //로그인이 눌렸을 때 벨리데이션 체크
        if(validateLogin2(param)) {console.log(formData);}

    } 
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <ul>
                <li>
                    <label htmlFor="" >아이디</label>
                    <input type="text" 
                        name='id'
                        value={formData.id}
                        onChange={handleChange}
                        ref={idRef}
                        />
                    <span style={{'color':'red'}}>{errorMsg.id}</span>
                </li>
                <li>
                    <label htmlFor="">패스워드</label>
                    <input type="password" 
                        name='pass'
                        value={formData.pass}
                        onChange={handleChange}
                        ref={passRef}
                        />
                    <span style={{'color':'red'}}>{errorMsg.pass}</span>
                </li>
                <li>
                    <button type='submit'>로그인</button>
                </li>
            </ul>
        </form>
    );
}

//form에서 일어나는 모든 데이터는 form으로 받도ㅗ록 한다.
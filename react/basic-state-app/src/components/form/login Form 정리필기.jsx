import React, { useState } from 'react';

export default function Login() {

    // const [id, setId] = useState(''); //id값이 변경이 될 때마다 이런 저장소에 담아놓고 사용
    // const [password, setPassword] = useState(''); //pw값이 변경이 될 때마다 이런 저장소에 담아놓고 사용하기

    
    // const hadleChangeId = (event) => {
    //     setId(event.target.value);
        
    // }; 
    // const hadleChangePassword = (event) => { //input 타입이므로 event라는 임의의 객체명을 통해 값을 받아옴
    //     setPassword(event.target.value);
        
    // }; 

    //위에처럼 id pw 각각 계속 실행하는건 비효율적이라 밑에처럼하기

    /////////////////////////////////////////////
    
    //로그인할 때 값이 객체형태로 넘어가도록 진행
    const initForm = {'id':'', 'password':''}

    const [form, setForm] = useState(initForm); //이벤트가 발생할때마다 이 형태로 넣어줌
    //form에서 객체 형태로 넘어가는 데이터를 여기다 담음 
    // // {"id":"test"...} //id, pwd 넘어가는 이벤트 각각 가져와서 함수는 하나만 실행되도록하기
    const handleChangeForm = (event) => {
        //아이디, 패스워드가 변경되면
        //setForm 함수를 이용하여 "id" : "test"  형식으로 저장
        //event.target으로 받게되면 아래 input태그의 데이터가 {type:text, name=id, value:test} 로 넘어옴, 받을때는 구조분해 할당 통해 키값으로 데이터를 받아오기
        const {name, value} = event.target;  //넘어오는 데이터를 name, value 에 넣겠다??
        //form = {'id':'hong', 'password':''} <-- id input 발생 setForm실해 
        //form = {'id':'hong', 'password':'1234'} <-- pw input 
        setForm({...form, [name]:value}); //스프레드 연산자로 안에있는 요소 가져와서 펼침, 배열 추가
        //오브젝트객체의 필드값을 변수로 입력하는 경우에는 []로 감싼 후 적용        
    }



    const handleSubmit = (event) => {
        event.preventDefault(); //디폴트로 브라우저에서 작동하는 이벤트를 막아줌
                //버튼을 서브밋으로 하게되면 무조건 브라우저 동작이 우선이되기 때문에 리액트에서 동작할 수 있도록 브라우저 이벤트 처리를 막아줘야함
        console.log(form);
        //로그인폼에 입력된 값 --> 서버(express, WAS, ...)
        // 로그인폼에 입력된 값은 오브젝트 리터럴 형태로 넘어간다 {}, form 전체를 의미, form을 사용하면 objectliteral 생성됨
        // submit(form); 
    }

    return (
        <div>
            <h1>Login</h1>
            <form name="login-form" onSubmit={handleSubmit}> {/* onSubmit은 form태그에서 작동하는 이벤트 핸들러 */}
                <div>
                    <label>아이디</label>
                    <input type="text" 
                            name='id' //id:test
                            value={form.id} //id이라는 변수만들고 useState로 관리
                            onChange={handleChangeForm} //값이 바뀔 때마다 일어나는 이벤트
                            />
                            
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" 
                            name='password' //password:1234
                            value={form.password} 
                            onChange={handleChangeForm}
                            />
                </div>
                <div>
                    <button type='submit' >로그인</button>   
                    {/* 서버로 보내는 작업을 onSubmit={}로 함, html 속성인 type='submit'은 브라우저에서 동작하게 하기 때문에 막아줘야함 */}
                    {/* //서버로 전송하려면  type=submit으로 줘야함 이게 위에서 onsubmit 실행됨 */}
                </div>
            </form>
        </div>
    );
}


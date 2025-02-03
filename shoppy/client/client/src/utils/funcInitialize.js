import React, {useRef} from "react";

/********************************
 * signup 컴포넌트 초기화 작업
 ***********************************/

export function initSignup () {
    
        const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
        const namesKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '전화번호', '이메일주소'];
        const placeholdersKor = ['아이디(6~12자이내)', '비밀번호', '비밀번호 확인', '이름', '전화번호', '이메일주소'];
    
    
        /* 배열  reduce(콜백함수, 리턴데이터 타입정의)*/

        // 1sec :  names 배열의 요소를 키로 하여, 
        // placeholdersKor 및 namesKor 배열의 대응되는 값을 값으로 매핑한 객체를 반환
        const placeholders = names.reduce((acc, name, idx) => {
            acc[name] = placeholdersKor[idx]; return acc;
            //index를 사용하여 names와 placeholdersKor를 1ㄷ1로 매핑
        }, {})
    
        const lables = names.reduce((acc, name, idx) => {
            acc[name] = namesKor[idx]; return acc;
            //index를 사용하여 객체 property 호출시에 lable[name] 으로 호출가능
            // namseKor, names 배열을 1ㄷ1로 매핑
        }, {})
    
    
    

        // 2sec. names 배열의 요소를 순회하며 누적하고 빈값으로 초기화하는 객체 생성
        const initFormData = names.reduce((acc, name) => {
            //실행코드 
            acc[name] = ""; // {"id":""...}
            return acc;
        }, {});   // 반환타입 : 객체
    
    
        return {names, placeholders, lables, initFormData}
        // 하나만 리턴하면 변수명으로 리턴, 여러개면 객체로 묶어서 리턴
        // 객체의 이름을 그대로 쓰고 싶다면 signup에서는 구조분해 할당으로 받으면 됨
        //refs,msgRefs 객체는 리액트훅을 사용하였기 때문에 여기서 리턴이 불가능.
        // use가 붙은 커스텀훅을 사용한다.
}


// use(대소문자 구분주의)를 붙여 커스텀 훅을 만든 이유: 
// 일반함수 -> 일반 메모리 영역에 생성, use붙은 함수 -> 리액트가 관리하는 메모리 영역에 생성
// 리액트가 관리하는 메모리 영역에 들어가야 가져다 쓸 수 있음


/******************** 
    Signup 참조 객체 생성 
*********************/
export function useInitSignupRefs(names) { 
    //names : initSignup 내부의 names 배열을 -> useInitSignupRefs 파라미터로 받고
    // 받아온 배열의 요소를 기준으로 refs와 msgRefs에 참조 객체를 생성
    
        // createRef만 사용할 경우 리랜더링으로 인한 TypeError 발생 -> useRef로 감싸서 사용
    const refs = useRef(   
        names.reduce((acc, name) => {
            acc[name.concat('Ref')] = React.createRef(); 
                // useRef는 컴포넌트의 최상위 레벨에서만 호출가능하기 때문에
                // 클래스 내부에서 사용할 수 있는 createRef를 사용함
            return acc;
        }, {})
    );

    // namse배열에 emaildomain 요소가 없기에 별도 생성
    refs.current.emaildomainRef = useRef(React.createRef());


    const msgRefs = useRef( //useRef로 감쌈, 리랜더링 방지
        names.reduce((acc, name) => {
            acc[name.concat('MsgRef')] = React.createRef();
            return acc;
        }, {})
    );
    
    return {refs, msgRefs}
    
}


import React, {useRef} from "react";

/********************************
 * signup 컴포넌트 초기화 작업
 ***********************************/

export function initSignup () {
    
        //initFormData를 배열로 만들어서 돌리기(foreach는 사용 못하니 reduce)
        //emaildomain은 emailname을 기준으로 잡아서 같이처리 예정
        const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
        const namesKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '전화번호', '이메일주소'];
        const placeholdersKor = ['아이디(6~12자이내)', '비밀번호', '비밀번호 확인', '이름', '전화번호', '이메일주소'];
    
    
        /* 배열  reduce(콜백함수, 리턴데이터 타입정의)*/
    
        const placeholders = names.reduce((acc, name, idx) => {
            acc[name] = placeholdersKor[idx]; return acc;
            //names와 placeholdersKor를 1ㄷ1로 매핑
        }, {})
    
        const lables = names.reduce((acc, name, idx) => {
            acc[name] = namesKor[idx]; return acc;
            // namseKor, names 배열을 1ㄷ1로 매핑
        }, {})
    
        //객체 property 호출시에 lable[name] 으로 호출가능
    
    
    
        const initFormData = names.reduce((acc, name) => {
            //실행코드 
            acc[name] = ""; // {"id":""...}// acc는 name을 가져와서 빈값으로 초기화 
            //name은 []사용 property이고 acc는 객체형태로 만들어짐
            //acc는 연산을 어떻게 하느냐에 따라서 타입이 달라짐. 
            return acc;
            // acc : 누산 → 값이 acc에 계속 누적되고 쌓임. 이 값이  리턴한다. 
        }, {});   // 반환타입
    
    
    
        return {names, placeholders, lables, initFormData}
        // 이 함수에서 만들어진 객체들은 리턴해야지 밖에서 사용이 가능
        // 함수가 하나면 변수로 리턴, 여러개면 객체로 리턴
        // 객체의 이름을 그대로 쓰고 싶다면 signup에서는 구조분해 할당으로 받으면 됨
        //ref ->> useRef라는 객체는 리액트훅이기 때문에 리턴이 불가능.  
        // 리액트 훅은 별도의 리액트 훅 메모리 영역에 생성이 되기 때문에 일반적으로 가져다 사용할 수 없고 규칙에러남  
}

// 함수명에 use 안붙이면 일반 메모리 영역에 생성이 되므로 훅 영역에 생성이 되도록
// use를 붙여서 커스텀훅을 만들음
 // use들만 모여있는 함수를 별도로 만듦 -> 커스텀 훅 
// 소문자 use를 붙여주면 리액트가 관리하는 메모리 영역에 들어간다!!


export function useInitSignupRefs(names) {  //names --> signup으로 보냄
    const refs = useRef(   // useRef로 감싸서 사용
        names.reduce((acc, name) => {
            acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로 호출 x
            // 앞에를 고정하고 뒤에를 수정할 수 있게끔 하기
            return acc;
        }, {})
    );
    refs.current.emaildomainRef = React.createRef();



    const msgRefs = useRef( //useRef로 감쌈
        names.reduce((acc, name) => {
            acc[name.concat('MsgRef')] = React.createRef();
            return acc;
        }, {})
    );
    
    return {refs, msgRefs}
    
}
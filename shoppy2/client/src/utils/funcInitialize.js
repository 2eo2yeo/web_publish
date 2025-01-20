import React, {useRef} from "react";

/**************************
    signup 컴포넌트 초기화 함수 
 **************************/

const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname']
const namesKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '전화', '이메일주소']
const placeholderKor = ['아이디(6~12자 이내)', '비밀번호를 입력하세요', '비밀번호를 확인하세요', '이름을 입력하세요', '전화번호를 입력하세요', '이메일주소를 입력하세요']


export function initSignup () {
    const initFormData = names.reduce((acc, name) => {
        acc[name] = "";
        return acc;
    },{});

    const lables = names.reduce((acc, name, idx) => {
        acc[name] = namesKor[idx];
        return acc;
    }, {})


    const placeholders = names.reduce((acc, name, idx) => {
        acc[name] = placeholderKor[idx];
        return acc;
    }, {})


    return {names, placeholders, lables, initFormData }

}

<<<<<<< HEAD

=======
   
>>>>>>> 487fac65a3af5967fe0579a5ebec584a961edc0b
/******************** 
    Signup 참조 객체 생성 
*********************/

export function useInitSignupRefs(names) {
    const refs = useRef(
        names.reduce((acc, name) => {
        acc[name.concat('Ref')] = React.createRef();
        return acc;
    }, {}))

    const msgRefs = useRef(
        names.reduce((acc, name) => {
        acc[name.concat('MsgRef')] = React.createRef();
        return acc;
    }, {}))

    return { refs, msgRefs }
<<<<<<< HEAD
}

=======
}
>>>>>>> 487fac65a3af5967fe0579a5ebec584a961edc0b

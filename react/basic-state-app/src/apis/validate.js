
/**********************************
 *  CgvLoginForm 유효성 체크 함수
 * @returns
***********************************/


//바로 갖다 쓸 수 없기 때문에 메인페이지에서 파라미터로 전달해줘야함
//컴포넌트가 아닌 함수이기때문에 props로 받는게 아님!! 
// 객체 리터럴을 넘기면 callbyreference 임
export const validata = (param) => {
    let result = true;

    if(param.refs.idRef.current.value === '') {
        param.setErrorMsg({...param.errorMsg, ['id']:'아이디를입력해주세요'})
        param.refs.idRef.current.focus();
        result = false;
    } else if (param.refs.pwdRef.current.value === '') {
        param.setErrorMsg({...param.errorMsg, ['pwd']:'비밀번호를 입력해주세요'})
        param.refs.pwdRef.current.focus();
        result = false;
    } return true
}




/**********************************
 *  Login2 컴포넌트 유효성 체크 함수
***********************************/

export const validateLogin2 = (param) => {
    // let result = true;
    if(param.idRef.current.value === '') {
        // alert('아이디를 입력해주세요')
        //유효성 체크시 에러메세지 띄우기
        param.setErrorMsg({...param.errorMsg, ['id']:'아이디를 입력해주세요'});
        param.idRef.current.focus(); 
        return false;
    } else if(param.passRef.current.value === '') {
        // alert('비밀번호를 입력')
        param.setErrorMsg({...param.errorMsg, ['pass']:'비밀번호를 입력해주세요'});
        param.passRef.current.focus(); 
        return false;
    }
    return true;
}


/**********************************
 *  UserInfo 컴포넌트 유효성 체크 함수
***********************************/




export const validateForm = (param) => {
    let result = true; 
    if(param.nameRef.current.value === '') {
        alert('이름을 입력해주세요')
        param.nameRef.current.focus();
        result = false;
    } else if (param.addressRef.current.value === '') {
        alert('주소를 입력해주세요')
        param.addressRef.current.focus();
        result = false;
    } else if (param.ageRef.current.value === '') {
        alert('나이를 입력해주세요')
        param.ageRef.current.focus();
        result = false;
    } return result;
}


/**********************************
 *  Signup 컴포넌트 유효성 체크 함수
***********************************/


export const validateSignup = (refs, errors, setErrors) => {
    let checkResult = true; 
    if(refs.idRef.current.value === '') {
        setErrors({...errors, ['id'] : '아이디를 입력해주세요'});
        // refs.idRef.current.styleProperty('color','red');  
        // 레퍼런스 주소값으로 스타일 적용하기
        refs.idRef.current.focus();
        checkResult = false;
    } else if (refs.pwdRef.current.value === '') {
        setErrors({...errors, ['pwd'] : '12자 이내의 비밀번호를 입력해주세요'});
        refs.pwdRef.current.focus();
        checkResult = false;
    } else if (refs.cpwdRef.current.value === '') {
        setErrors({...errors, ['cpwd'] : '비밀번호를 확인해주세요'});
        refs.cpwdRef.current.focus();
        checkResult = false;
    } else if (refs.nameRef.current.value === '') {
        setErrors({...errors, ['name'] :'이름을 입력해주세요'})
        refs.nameRef.current.focus();
        checkResult = false;
    } else if (refs.phoneRef.current.value === '') {
        setErrors({...errors, ['phone'] :'전화번호를 입력해주세요'})
        refs.phoneRef.current.focus();
        checkResult = false;
    } else if (refs.emailNameRef.current.value === '') {
        setErrors({...errors, ['emailName'] :'이메일 주소를 입력해주세요'})
        refs.emailNameRef.current.focus();
        checkResult = false;
    } else if (refs.emailDomainRef.current.value === 'default') {
        refs.emailDomainRef.current.focus();
        checkResult = false;
    }
    return checkResult;
}
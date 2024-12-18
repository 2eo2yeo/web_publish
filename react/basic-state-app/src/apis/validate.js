
/**********************************
 *  Signup 아이디 중복체크 함수
***********************************/
    export const handleIdCheck = ({idRef, errorCheckSignup, errors, setErrors, idMsgRef}) => {
        const id = idRef.current;
        if(id.value === '') {
            errorCheckSignup('id', id.value, errors, setErrors);
        } else {
            const did = 'test';
            if( did === id.value ) {
                setErrors({...errors, ['id']:'이미 사용 중인 아이디 입니다. 다시 입력ㄱㄱ'})
                id.focus();
            } else {
                setErrors({...errors, ['id']:'사용가능 아이디 입니다'});
                idMsgRef.current.style.setProperty('color','green');
                idMsgRef.current.style.setProperty('font-weight','bold')
            }
        }
    }

/**********************************
 *  패스워드 & 패스워드 확인 check
***********************************/

//여기서는 param으로 한번에 받았지만 파라미터로 보낼때는 객체로 묶어서 한번에 보내고
// 받을때는 구조분해 할당으로 받는 것이 좋다 (코드수정때문에 아래의 방법은 추천x)
    export const handlePasswordCheck = (param) => {
        const pwd = param.refs.pwdRef.current;
        const cpwd = param.refs.cpwdRef.current;
        if (pwd.value === '') {
            param.errorCheckSignup('pwd', pwd.value, param.errors, param.setErrors);
            pwd.focus();
        } else if (cpwd.value === '') {
            param.errorCheckSignup('cpwd', cpwd.value, param.errors, param.setErrors);
            cpwd.focus();
        } else {
            if (pwd.value === cpwd.value) {
                param.setErrors({ ...param.errors, ['pwd']: '비밀번호가 동일합니다' })
                param.passMsgRef.current.style.setProperty('color', 'green');
                param.passMsgRef.current.style.setProperty('font-weight', 'bold')
            } else {
                param.setErrors({ ...param.errors, ['pwd']: '비밀번호가 일치하지 않습니다. 다시 입력해주세요' })
                param.setformData({ ...param.formData, ['pwd']: '', ['cpwd']: '' })
                param.refs.pwdRef.current.focus();
            }
        }
    }


    

/**********************************
 *  Signup2Form 유효성 체크 함수
***********************************/

export const validateFormSignup2 = (refs) => {
    
    /* 가져오기 */
        // const refValues = Object.values(refs); //객체의 값을 가져오기
        // console.log(refValues);
        // const refkeys = Object.keys(refs); //객체의 키를 가져오기
        // console.log(refkeys);
        const refEntries = Object.entries(refs); // 키, 값 쌍을 배열 형태로 리턴
        console.log(refEntries);

    const msgs = {
    'idRef' : '아이디', 'passRef' : '패스워드'};


        /* !!! 배열.map() or 배열.forEach() 함수는 배열 객체를 순회하는 것이 목적이므로 
        if 체크 후 focus가 적용되지 않음 -> 그래서 for을 사용 */

    for(const item of refEntries) {
        const name = item[0]; //item 0번지가져오기
        const ref = item[1]; //item 1번지가져오기
        if(ref && ref.current.value === '') {
            alert(`${msgs[name]}를 입력해주세요`)
            ref.current.focus();
            return false;
        }
    }
    
    // let checkResult = true;
    // if (refs.idRef.current.value === '') {
    //     alert('아이디를 입력해주세요');
    //     refs.idRef.current.focus();
    //     checkResult = false;
    // } else if (refs.passRef.current.value === '') {
    //     alert('비밀번호를 입력해주세요');
    //     refs.passRef.current.focus();
    //     checkResult = false;
    // }  else if (refs.nameRef.current.value === '') {
    //     alert('이름을 입력해주세요');
    //     refs.nameRef.current.focus();
    //     checkResult = false;
    // }  else if (refs.phone1Ref.current.value === '') {
    //     alert('번호1을 입력해주세요');
    //     refs.phone1Ref.current.focus();
    //     checkResult = false;
    // }  else if (refs.phone2Ref.current.value === '') {
    //     alert('번호2을 입력해주세요');
    //     refs.phone2Ref.current.focus();
    //     checkResult = false;
    // }  else if (refs.phone3Ref.current.value === '') {
    //     alert('번호3을 입력해주세요');
    //     refs.phone3Ref.current.focus();
    //     checkResult = false;
    // }  else if (refs.addressRef.current.value === '') {
    //     alert('주소를 입력해주세요');
    //     refs.addressRef.current.focus();
    //     checkResult = false;
    // }  else if (refs.birth1Ref.current.value === '') {
    //     alert('생일 1을 입력해주세요');
    //     refs.birth1Ref.current.focus();
    //     checkResult = false;
    // }  else if (refs.birth2Ref.current.value === '') {
    //     alert('생일 2를 입력해주세요');
    //     refs.birth2Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.birth3Ref.current.value === '') {
    //     alert('생일 3을 입력해주세요');
    //     refs.birth3Ref.current.focus();
    //     checkResult = false;
    // }   else if (refs.jobRef.current.value === 'default') {
    //     alert('직업을 입력해주세요');
    //     refs.jobRef.current.focus();
    //     checkResult = false;
    // }  else if (refs.genderRef.current.value === '') {
    //     alert('성별을 입력해주세요');
    //     refs.genderRef.current.focus();
    //     checkResult = false;
    // }  else if (refs.emailRef.current.value === '') {
    //     alert('이메일을 입력해주세요');
    //     refs.emailRef.current.focus();
    //     checkResult = false;
    // }  else if (refs.introRef.current.value === '') {
    //     alert('소개를 입력해주세요');
    //     refs.introRef.current.focus();
    //     checkResult = false;
    // } 
    // return checkResult; 
}


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
/*****************************
    로그인 폼 체크 함수 (validate)
********************************/

export const validateLogin = ({idRef, pwdRef}, {msgRef}) => {
    let result = true; 
    if(idRef.current.value === '') {
        // alert('아이디를 입력해주세요')
        msgRef.current.style.setProperty('color', 'red');
        idRef.current.focus();
        result = false;
    } else if (pwdRef.current.value === ''){
        msgRef.current.style.setProperty('color', 'red');
        pwdRef.current.focus();
        result = false;
    } else {
        msgRef.current.style.setProperty('color', 'white');
    }
    return result;
}


/******************************
 * 회원가입 폼 체크 함수
 *******************************/

export const validateSignup = (refs, msgRefs) => {

    // 가져온 객체를 2차원 배열로 변환
    const refEntries = Object.entries(refs.current);
    const msgRefEntries = Object.entries(msgRefs.current);

    // 배열을 for문을 통해 돌리기
    for(let i=0; i < refEntries.length; i++) {
        const item = refEntries[i]
        const name = item[0]
        const ref = item[1]

        //메세지 초기화
        let msgItem, msgName, msgRef = null;

        if(i < refEntries.length - 1 ) {
            msgItem = msgRefEntries[i];
            msgName = msgItem[0];
            msgRef = msgItem[1];
        }
    

        if( name !== 'emaildomainRef'){
            if(ref.current.value === '' ) {
                msgRef.current.style.setProperty('color','red');
                ref.current.focus();
                return false;
            }
        } else {
            if(ref.current.value === 'default') {
                ref.current.focus();
                return false;
            }
        }
    }
    return true;

}



/*****************************
 * 아이디 중복함수 체크
 **************************/


export const handleDuplicateIdCheck = (idRef, idMsgRef, pwdRef, setIdCheckResult ) => {

    if (idRef.current.value === '') {
        idMsgRef.current.style.setProperty('color', 'red');
        idRef.current.focus();
        return false;
    } else {
        const did = 'test';
        if (idRef.current.value === did) {
            alert('이미 사용중인 아이디입니다')
            idRef.current.focus();
            return false;
        } else {
            alert('사용이가능한 아이디입니다');
            setIdCheckResult('complete');
            pwdRef.current.focus();
            return false;
        }
    }
}



/*******************************
  * Signup 비밀번호 일치 확인
  *******************************/


export const handlePasswordCheck = (pwdRef, cpwdRef, pwdMsgRef, cpwdMsgRef, nameRef ) => {
    
    if(pwdRef.current.value === '') {
        pwdMsgRef.current.style.setProperty('color','red');
        pwdRef.current.focus();
        return false;
    } else if (cpwdRef.current.value === '') {
        cpwdMsgRef.current.style.setProperty('color','red');
        cpwdMsgRef.current.focus();
        return false;
    } else {
        if(pwdRef.current.value === cpwdRef.current.value ){
            alert('비밀번호가 일치합니다')
            nameRef.current.focus();
            return false;
        } else { 
            alert('비밀번호가 일치하지 않습니다'); 
            pwdRef.current.value = '';
            cpwdRef.current.value = '';
            pwdRef.current.focus()
            return false;
        }
    }
}

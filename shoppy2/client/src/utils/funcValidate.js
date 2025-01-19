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
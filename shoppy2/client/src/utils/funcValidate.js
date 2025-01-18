/*****************************
    로그인 폼 체크 함수 (validate)
********************************/

export const validateLogin = ({idRef, pwdRef}) => {
    let result = true; 
    if(idRef.current.value === '') {
        alert('아이디를 입력해주세요')
        idRef.current.focus();
        result = false;
    } else if (pwdRef.current.value === ''){
        pwdRef.current.focus();
        result = false;
    } 
    return result;
}


/******************************
 * 회원가입 폼 체크 함수
 *******************************/

export const validateSignup = (refs, msgRefs) => {

    // 가져온 객체를 2차원 배열로 변환
    const refEntries = Object.entries(refs);
    const msgRefEntries = Object.entries(msgRefs);

    // 배열을 for문을 통해 돌리기
    for(let i=0; i < refEntries.length; i++) {
        const item = refEntries[i]
        const name = item[0]
        const ref = item[1]

        //메세지 초기화
        let msgItem, msgName, msgRef = null;

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

/****************************
    title : 로그인 폼 체크
*******************************/
export const validateLogin = ({ idRef, pwdRef }, { msgRef }) => { //구조분해 할당으로받음
    let result = true; //submit함수 보낼때 true값으로 보내야하므로
    //idRef가 가리키고 있는 객체에서(form) 현재 입력된 값을 가져온다. 
    if (idRef.current.value === '') {
        // alert('아이디를 입력해주세요');
        msgRef.current.style.setProperty('color', 'red');
        idRef.current.focus();
        result = false;
    } else if (pwdRef.current.value === '') {
        // alert('패스워드를 입력해주세요')
        msgRef.current.style.setProperty('color', 'red');
        pwdRef.current.focus();
        result = false;
    } else {
        msgRef.current.style.setProperty('color', 'white');
    }
    return result;
}



/**
 * title : 회원가입 폼 체크
 */
export const validateSignup = (refs, msgRefs) => {

    // createRef는 넘어오는 값에 current가 붙어서 객체가 형성됨 
    const refEntries = Object.entries(refs.current);
    const msgRefEntries = Object.entries(msgRefs.current);

    //refEntries 배열객체와 msgRefEntries 배열객체의 인덱스를 동일하게 체크한다!!
    // entires 객체를 -> 배열로 변환
    for (let i = 0; i < refEntries.length; i++) {
        const item = refEntries[i];   // 배열의 i번째 요소       
        const name = item[0]; // 가져온 i 요소의 0번지
        const ref = item[1];    // 데이터 입력폼 객체 주소

        let msgItem, msgName, msgRef = null;

        if (i < refEntries.length - 1) {
            msgItem = msgRefEntries[i];
            msgName = msgItem[0];
            msgRef = msgItem[1]; // 데이터 입력폼의 메시지 객체 주소 
        }

        if (name !== 'emaildomainRef') {
            if (ref.current.value === '') {
                msgRef.current.style.setProperty('color', 'red');
                ref.current.focus();
                return false;
            }
        } else {
            if (ref.current.value === 'default') {
                // alert('이메일 주소를 선택해주세요')
                ref.current.focus();
                return false;
            }
        }
    }
    return true;
} 
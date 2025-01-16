
/****************************
    title : 로그인 폼 체크
*******************************/
export const validateLogin = ({idRef,pwdRef}) => { //구조분해 할당으로받음
    let result = true; //submit함수 보낼때 true값으로 보내야하므로
    //idRef가 가리키고 있는 객체에서(form) 현재 입력된 값을 가져온다. 
    if(idRef.current.value === ''){
        alert('아이디를 입력해주세요');
        idRef.current.focus();
        result = false;
    } else if (pwdRef.current.value ==='') {
        alert('패스워드를 입력해주세요')
        pwdRef.current.focus();
        result = false;
    }
    return result;
}



/****************************
    title : 회원가입 폼 체크
*******************************/
// 로그인과 다르게 alert가 아닌 글자를 띄우는 방식으로 체크 진행
// entries() -> 객체를 배열로 만들어줌
export const validateSignup = (refs, msgRefs) => { //{idRef:xxx, ...}
    const refEntries = Object.entries(refs); // [[idRef, {xxxx}],[pwdRef, {xxxx}] 2차원 배열로 만듦
    const msgRefEntries = Object.entries(msgRefs); 

    //refEntries 배열 객체와 msgRefEntries 배열 객체의 인덱스를 동일하게 체크한다!!
    // for(const item of refEntries) {}   //하나일 경우에는 이렇게사용 가능함 
    // but  아니기 때문에 일반적인 for문 사용
    for(let i = 0; i < refEntries.length; i++) {   
        // [idRef, {xxxx}]
        //id입력폼체크와 msg입력폼 표시를 같이 돌려야하기 때문에 인덱스 번짓수를 동일하게 가야함
        const item = refEntries[i];  
        const msgItem = msgRefEntries[i];  
        const name = item[0];   
        const ref = item[1];   // 데이터 입력폼 객체 주소
        const msgName = msgItem[0];  
        const msgRef = msgItem[1];  // 데이터 입력폼의 메시지 객체 주소
        
        if(name !== 'emaildomainRef') {  // 이메일 도메인이 아닐때 '' 체크 
            if(ref.current.value === ''){
                //msgRef는 유효성 체크할 필요가 없는 부분이기 때문에 스타일만 지정한다.
                msgRef.current.style.setProperty('color','red');
                ref.current.focus();
                return false;
            }
        } else if(name === 'emaildomainRef') { // default 
            if(ref.current.value === 'default'){ //이메일도메인일때는 default로 체크
                alert('이메일주소를 입력해주세요');
                ref.current.focus();
                return false;
            }
        } 
    }
    return true; // for문 바깥에서 true값 리턴해야함
}

// const refEntries = [
//     [idRef, {xxxx}],
//     [pwdRef, {xxxx}]
//     ... 
// ]
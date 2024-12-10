
import Counter from './Counter.jsx'
import { useState } from 'react';
import './Counter.css'

export default function AppCounter() {

    const [totalNumber, settotalNumber] = useState(0);

    //totalNumber 변경 => 자식인 Counter 컴포넌트 이벤트가 발생했을 때
    const handleClick = (number, type) => { //컴포넌트 3개이므로 total 값은 30까지 증가
        if( number < 10 && type === '+' ) {   /* number < 10 비교식이 앞에 있는 것은 숏컷연산자의 논리임 */
            settotalNumber(totalNumber+1)
            
        }else if (number > 0 && type === '-' ){
            settotalNumber(totalNumber-1)
        }
    }
    
    //
    //상태관리는 부모한테서 해야함 but 값은 자식에서 입력되기 때문에 부모에서 만든함수를
    //자식이 호출해서 사용하기 위해 handleClick 함수를 통해서 전달한느 것
    //자식 컴포넌트에서 특정 데이터를 부모 컴포넌트로 전달하기 위한 역할을 함.
    // 자식이 값을 호출하면 위의 함수에서 처리한다.

    return(
        <div className="counter-container">
            <Counter total = {totalNumber} click={handleClick} />  {/* 부모쪽에서 보내는건 키값일 뿐이다 onClick으로 넘겨도 키의 이름일뿐 이벤트리스너가 아님 */}
            <Counter total = {totalNumber} click={handleClick} />
            <Counter total = {totalNumber} click={handleClick} />
        </div>
    );
}

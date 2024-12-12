import React, { useState } from 'react';


export default function Counter2({total, click}) {

    const [count, setCount] = useState(0);




    return (
        <div style={{width:500,margin:'auto'}}>
            <div>
                <span style={{fontSize:27}}>{count}</span> {/* count는 해당 컴포넌트에서만 관리 */}
                <span>/</span>
                <span style={{fontSize:30}}>{total}</span> {/* total은 부모쪽에서 받아서 관리함(props로) */}
            </div>
            <button type='button' onClick={()=>{
                setCount(count+1);
                click('+');   /* 부모쪽에서 함수 호출 */
                }}>증가</button>
            <button type='button'>감소</button>
        </div>
    );
}


import React, { useState } from 'react';
import Counter2 from './Counter2.jsx'

export default function AppCounter2() {

    const [total, setTotal] = useState(0);

    const handleTotal = (type) => {
        type === '+' ? setTotal(total+1) : setTotal(total-1)
    }

    return (
        <div>
            {/* hadleTotal은 함수의 주소가 넘어가는 것 total은 값이 넘어가는 것 */}
            <Counter2 total={total} click={handleTotal}/>   
            <Counter2 total={total} click={handleTotal}/>   
            <Counter2 total={total} click={handleTotal}/>   
            <Counter2 total={total} click={handleTotal}/>   
            <Counter2 total={total} click={handleTotal}/>   
            <Counter2 total={total} click={handleTotal}/>   
        </div>
    );
}


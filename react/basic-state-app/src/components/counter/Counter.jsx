
import { useState } from "react";

export default function Counter({total, click}) {
    
    const [number, setNumber] = useState(0); 
    
    function increment () {
            (number < 10) ? setNumber(number+1): setNumber(number);
            click(number, '+');   //부모의 handleClick 함수에서 props로받아온 것
        }
    function decrement () {
        (number > 0) ? setNumber(number-1): setNumber(number);
        click(number, '-');   //부모의 handleClick 함수에서 props로 받아온 것
            
    }

    return(
        <div className="container">
            <div>
                <span className="number">{number} / </span>
                <span className="total-number">{total}</span>  {/* 두 컴포넌트의 합산을 여기에서 반영하고 싶음 -> 부모에서 처리 */}
            </div>
            <button type="button" 
                className="button"
                onClick={increment}>증가(+)</button>
            <button type="button" 
                className="button"
                onClick={decrement}>감소(-)</button>
        </div>
    );
}
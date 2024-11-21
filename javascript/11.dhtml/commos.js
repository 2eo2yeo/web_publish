// 공통 모듈 저장




//함수 실행이 바깥에서 되도록 빼놓기
/* sum(number1, number2) */
export function sum(number1, number2) {
    return parseInt(number1) + parseInt(number2);
}
// 디폴트는 공통모듈에 하나 있어야함

/* sub(number1, number2) */
export function sub(number1, number2) {
    return parseInt(number1) - parseInt(number2);
}


/* mul(number1, number2) */
export function mul(number1, number2) {
    return parseInt(number1) * parseInt(number2);
}

/* div(number1, number2) */
export function div(number1, number2) {
    return parseInt(number1) / parseInt(number2);
}


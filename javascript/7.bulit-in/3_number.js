// Number 클래스들의 메소드 
// Number객체.valueOf()

let a = 100;  //기본적인 원시 데이터 타입
let b = new Number(100);    //클래스로 생성했을 때
console.log(typeof a, typeof b);
console.log(a === b.valueOf());    // 



//Number객체.toLocalString() 10000 => 10,000 
// 세자리씩 끊어서 쉼표로 구분

let num = 123000;
let num2 = new Number(1231246576); //넘버클래스로 정의되는 함수들도 찍을때 똑같이 사용이 가능하다.
console.log(num.toLocaleString());
console.log(num2.toLocaleString());


//MAX_VALUE, MIN_VALUE... Number.MAX_VALUE       //static이 앞에 붙어있기 때문에 모두 대문자
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
let num3 = 1234.45;
console.log(num3.toFixed()); //정수로 반올림

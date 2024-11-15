// 기본(원시) 데이터타입(Primitive DataType) - number, string, boolean... 
// 기본 데이터타입을 클래스로 생성해 놓은 객체들을 wrapper 클래스라 함 
// 래퍼 객체 : 기본 데이터 타입을 객체처럼 다룰 수 있도록 하는 객체
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number



/*      number class       */
// ------ 기존 로직
let a = "123";  // a는 현재 문자열 "123"임
if (typeof a === "string") a = parseInt(a);  // 문자열일 경우, parseInt로 정수로 변환
if (a === 123) console.log(a);  // a가 123과 같으면 출력



// 래퍼객체
if(Number("123") === 123) console.log(`a=>${a}`);

let aa = new Number(100);
console.log(Number.isNaN());





let maxValue = Number.MAX_VALUE; // 최댓값
let minValue = Number.MIN_VALUE; // 최솟값

console.log(maxValue);
console.log(minValue);


let x = 100; 
let y = new Number(100);     //new가 나오면 무조건 heap으로 감 객체의 주솟값을 y에 넣음
console.log(typeof x);
console.log(typeof y);
console.log(x === y); //false가 나오는 이유 x는 callstack에 기본숫자타입으로 저장  y는 heap에 생성되는 주솟값 이므로
console.log(x === y.valueOf()); // y 주소 값을 통해 객체에 있는 100이라는 값을 가져와서 true가 나옴




/*      string class + Templeat literal(``)       */
let str = "hello~";                 // \랑 +을 문장에 사용하는 이유 정리하기, 큰데이터타입을 사용할때는 탬플릿리터럴(최신방법)
let str2 = new String("hello~")
console.log(typeof str);
console.log(typeof str2);
console.log(str === str2); 
console.log(str === str2.valueOf()); //객체에서 값을 가져와서 비교




/*  boolean class  */

let flag = true;
let flag2 = new Boolean(true);
console.log(typeof flag);
console.log(typeof flag2);
console.log(flag === flag2);
console.log(flag === flag2.valueOf());

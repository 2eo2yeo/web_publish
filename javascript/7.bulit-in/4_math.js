// Math는 Number 자료형만 지원하며 BigInt와는 사용할 수 없습니다.
// Math 클래스 - 정의된 모든 변수, 상수, 함수 값은 static 선언
// Math.변수, Math.상수, Math.함수명 

let num1 = 123.456; 

console.log(num1);
console.log(`Math.abs(num1) = ${Math.abs(num1)}`); //절댓값
console.log(`Math.floor(num1) = ${Math.floor(num1)}`); //소수점 절삭
console.log(`Math.trunc(num1) = ${Math.trunc(num1)}`); //소수점 절삭 
console.log(`Math.round(num1) = ${Math.round(num1)}`); //반올림  
console.log(`Math.max(1,2,3,4,5) = ${Math.max(1,2,3,4,5)}`); //최댓값
console.log(`Math.min(1,2,3,4,5) = ${Math.min(1,2,3,4,5)}`); //최솟값

//자릿수별 절삭 (앞에서부터)
let num2 = 1.123415431321231312352;
console.log(Number(num2.toPrecision(4))); // 1.123 출력


//0~1사이의 숫자를 랜덤하게 반환
console.log(`Math.random() = ${Math.random()}`); 

// 1~100 사이의 숫자를 랜덤하게 출력
let rnumber = Math.floor(Math.random()*100 + 1) ;   // 1을 더한건 0. 으로 나오는걸 방ㅈㅣ
console.log(rnumber);

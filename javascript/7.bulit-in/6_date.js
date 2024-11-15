// 날짜 형식 - Date 클래스 
console.log(Date.now());
console.log(new Date()); 

let date = new Date();      //현재 사용하는 시스템의 날짜를 객체로 생성
console.log(date.getFullYear()); //2024
console.log(date.getMonth()+1); //10  +1하는 이유 : 월을 0부터 시작하는 값으로 반환하기 때문
console.log(date.getDate()); //15 


let year = date.getFullYear().toString(); //toString : 데이터타입을 바꿔주는 메서드
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// '2024년 11월 15일 ' => String.concat()
// let display = year + "년" + month + "일" + day + "일"
let  display = year.concat('년', month, '월', day, '일');
console.log(display);



// '2024년 11월 15일 ' => 템플릿리터럴
display = `${year}년 ${month}월 ${day}일 ${hour}시 ${minutes}분 ${seconds}초 `;
console.log(display);

//날짜 출력 타입 지정
console.log(date.toLocaleString('ko-KR'));
console.log(date.toLocaleString('en-US'));

console.log(date.toLocaleDateString('ko-KR'));
console.log(date.toLocaleDateString('en-US'));

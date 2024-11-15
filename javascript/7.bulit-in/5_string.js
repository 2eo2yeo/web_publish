// string 클래스의 메소드 정리

let name = "홍길동";
let sname = new String("홍길동");
console.log(typeof name, typeof sname);
console.log(name === sname);
console.log(name === sname.valueOf());

let text = "Hello JavaScript~~!!!"
console.log(text.charAt(0)); //텍스트에서 index 번호로 뽑아냄
console.log(text.charAt(3)); //텍스트에서 index 번호로 뽑아냄
console.log(text[0]); /*  text는 메모리에 만들어질때 배열형태로 만들어지기 때문에 이것또한 가능 */
console.log("Welocome~".concat(text)); // 문자를 이어붙일 때?? 
console.log(text.indexOf('a')); //  text 문자열에서 문자 'a'가 처음으로 나타나는 인덱스를 출력
console.log(text.toUpperCase()); //다 대문자    //입력폼 -->     --> DB 저장시 소문자 저장
console.log(text.toLowerCase()); //다 소문자


//문자열 추출
console.log(text.substring(0, 2));   //start-num , end-num어디부터 어디까지 자를지 인덱스 번호로 추출 // end 자리수는 포함이 안됨, end 자릿수까지만 추출됨 해당코드에서는 0~1까지만 추출
console.log(text.slice(0, 2));  
console.log(text.slice(4));  
console.log(text.slice(-3));  // 마이너스 붙으면 뒷자리부터 찾음 


//문자열 공백 삭제
text = '          JavaScript!            ';
console.log(text.trim()); 
text = '          Java       Script!            '; // 양 옆 공백 삭제되지만 문자 사이의 공백은 삭제가 불가능하다.
console.log(text.trim());


//구분자를 이용하여 문자열을 추출
const fruit = '🍎,🍊,🍏,🍋';
const fruitArray = fruit.split(',');    //우리는 쉼표를 기준으로 데이터를 출력하겠다
console.log(fruit);
console.log(fruitArray); 

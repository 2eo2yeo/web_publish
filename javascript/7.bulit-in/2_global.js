// global 함수 : 함수명으로 호출이 가능
// ex) parseInt(), parseFloat() .. 
// parseInt(데이터) : 데이터를 정수로 변환
// parseFloat(데이터) : 데이터를 실수로 변환
let a = "100.10";
a = parseInt(a);           
a = parseFloat(a);
console.log(typeof a);
console.log(a);





/* url 인코딩 : ex) http://www.naver.com */

//링크가 아니라 문자형태로 나옴
let uri = 'http://www.naver.com'; 

//링크도, 문자도 넣고싶을 때 
let encode = encodeURI(uri);
console.log(encode);



/* uri 디코딩 */
let decode = decodeURI(encode);
console.log(decode);

//iterable 개념적인 object 규칙을 지키기 위해서 만들어진 객체들
// iterabla(이터러블) object - Iternaition Protocol : 순회를 위한 규칙, 조약
// for...of, ...(spread : 전개구문), 구조분해 할당(destructing object) -> 분해해서 자동으로 변수에 할당함
//String-하나하나를 배열로 저장한다, Array, Map, set ...


//"Hello~ JavaScript~!!!!"

const text = new String("Hello~ JavaScript~!!!!");
for( let element of text ) {
    console.log(`element = ${element}`);
    
}

// [1,2,3,3,4,5]

let numbers = [1,2,3,4,5]
for (let number of numbers ) console.log(number);

//number 클래스 생성 및 실행
const numberClass = new Number(12345);
// for (n of numberClass) console.log(n);
// typeError : numberClass is not iterable - number는 이터러블 객체가 아니기때문에 오류가 남 


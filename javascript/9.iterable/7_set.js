// set 클래스 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

//  Set의 값은 한 번만 나타날 수 있다 (중복불가)
// set : 다양한 데이터 (primitive, 객체참조) 저장 
// 데이터 추가 : add(value) -> key값이 없음 value만 넣음, 

// 중복되는 데이터를 거를 때 사용하면 좋음, 한번만 저장되고 고유한 값을 저장하기 때문


/* 구문 
new Set(iterable)
-> 생성자에 interble 객체를 넣으면 set의 형식으로 구조분해
*/

let mySet = new Set();
mySet.add(10);
mySet.add('홍길동');
mySet.add({age: 20});
mySet.add([1,2,3]);
console.log(mySet);



for ( let value of mySet) {
    console.log(`value => ${value}`);
}

mySet.forEach( (value) => { //value값과 key값이 동일
    console.log(value); 
});


// 데이터 확인
console.log(mySet.has(10));
console.log(mySet.has(100));

// 데이터 삭제
if(mySet.has(10)) {
    mySet.delete(10); 
    console.log('삭제완료'); }  //100값이 있다면(if로 조건 체크) 100을 삭제하라
else console.log('데이터가 존재하지 않음');

// 전체삭제
mySet.clear();
console.log(mySet);

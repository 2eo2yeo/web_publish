
// Map은 자바스크립트의 새로운 키-값 쌍 저장 객체로, 객체와는 다르게 모든 데이터 타입을 키로 사용할 수 있다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map

//key, value를 한쌍으로 가지는 클래스
//set(key, value) : 데이터를 맵에 추가
//get(key) : 데이터 출력
//has(key) : 데이터 존재 여부 확인 true, false 
//delete(key) : 데이터 삭제
// Map은 iterable object 이므로 for...of, spread, destructure 가능함 

let fruitMap = new Map();

fruitMap.set('apple','🍎'); // 여러개여도 애플은 하나만 저장 됨
fruitMap.set('apple','🍎');   //여기서 apple은 key 사과이모지는 value가 됨
fruitMap.set('orange','🍊');
console.log(fruitMap);


console.log(fruitMap.get('apple'));
console.log(fruitMap.get('orange'));

console.log(fruitMap.has('orange'));
console.log(fruitMap.has('lemon'));

if(fruitMap.has('orange'))
    fruitMap.delete('orange');   //오렌지가 존재하면 오렌지를 삭제하겠다.

console.log(fruitMap);

// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다
// 순회메소드가 적용되는 map 함수는 파라미터 인자로 콜백함수를 입력 받아,
// 처리한 결과를 새로운 배열객체로 생성하여 반환함!!! 
let numbers = [1,2,3,4,5];
let fnumbers = [1.001, 2.002 ,3.03 ,4.04, 5.05];

// numbers 배열 요소에 각각 10을 곱한 결과 출력
let numbers2 = numbers.map((item) => item * 10 );  // [10,20,...50] // map이라서 새로운 배열 자동 생성
// foreach는 순회만 하고 새로운 배열객체를 만들지는 않는다.
// map은 순회를 하면서 새로운 배열 객체로 return함
console.log(`numbers2 = ${numbers2}`);


//fnumbers 배열 요소의 소수점을 절삭하여 출력
let fnumbers2 = fnumbers.map((X) => Math.floor(X) ); //콜백함수의 원형 이걸 위주로 생각하기
// let fnumbers2 = fnumbers.map(Math.floor); 

console.log(`fnumbers2 = ${fnumbers2}`);


//배열의요소로 object literal 값이 같이 있는 경우 
let object = [
    { name : "홍길동", age : 20},
    { name : "김철수", age : 20},
    { name : "최영희", age : 20}
];

object.forEach((obj, i) => {console.log(i, obj)});


// [{홍길동: 홍길동, age:20} ~~ ]
// 홍길동, 최영희 이름을 가진 학생 정보만 배열 출력
let objects2 = object.map((obj) => {   //obj ==> name:"홍길동 "
    let rObj = {};
    if(obj.name === "홍길동") {
        rObj = obj;
    } else if (obj.name === "최영희") {
        rObj = obj;
    }
    return rObj;
    // let resultObj= {};  //새로운 객체를 만드려고 하는 애를 빈값으로 초기화
    // resultObj[obj.name] = obj.value; //key가 들어가는 자리에 object 의 값이 들어가고
    // resultObj[obj.name] = "name";     //value 에는 object의 값이 들어간다. 
    // resultObj[obj.age] = obj.value;
    // resultObj[obj.age] = "age";
    // return resultObj;
});
console.log(objects2);


// map(전체 데이터 받을 때) 과 filter(전체 데이터 중 뽑아날 때) 차이 정리하기
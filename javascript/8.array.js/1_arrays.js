/*
1. primitiv Datatype : 기본 데이터 타입
    - string, number, boolean
    ex) 100, "홍길동", '홍길동', true ... 
let number = 100; 
2. Reference DataType : 참조 데이터 타입
    - object literal({}), class array([]).. 
    let obj = {name:"홍길동",...}
    let arr = [1,2,3...]
    let arrayObj = [{..},{..},{..}]

array(배열) 
    개념 : 동일한 데이터타입의 요소를 여러개 저장하는 공간
    인덱스 주소를 통해 요소를 저장하고 관리함, 인덱스 주소는 0부터! 
    //new는 클래스 형태로 HEAP에 생성 ()안은 생성자함수
    let array1 = new Array(10);  // 크기 정의 (갯수)
    let array2 = [1,2,3,4];      // 크기와 요소의 초기화
    let array3 = ['1','2','3'];
    let array4 = [{name:"홍길동"}, {name:"김철수"},...]
    let obj1 = {key:value, key:value ...}
    let obj2 = {key:value, key:value ...}
    let array5 = [obj1, obj2 ]

    !! 배열의 생성은 [] ->값이 정해져있을때 이걸 사용,
    new 두개를 이용하여 생성, CRUD 작업은 Array의 메소드 사용 권장
    !! for 문의 구문을 사용하여 데이터를 가져옴
    !! 배열의 인덱스는 전체 크기보다 1 작다.
*/


let array1 = new Array(2); //heap에 2자리 생성되고 array1라는 주소를 가짐  값은 없음
console.log(array1.length);
console.log(array1[0]);
console.log(typeof array1);

let array2 = new Array(1,2,3);  //배열로 받는 것과 같음, 크기 할당 및 초기화 아래참고
// let array2 = new Array([1,2,3]);  
console.log(array2[0]);

let array3 = ['🍎','🍊','🍋','🍏'];
console.log([array3.length-1]); // 마지막 요소 출력

let obj1 = {name: '홍길동', age : 20}
let obj2 = {name: '김철수', age : 21}
let objList = [obj1, obj2]   // 모아서 같은곳에 담기
console.log(objList[0]);
console.log(objList[0].name); //프로퍼티 접근시 . 

// 홍길동 출력

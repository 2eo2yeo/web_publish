// 구조 분해 할당 (destructure)
//개념 : 객체의 값을 일일히 선언하지 않고 객체의 형태로 ~~~~~ 
// 보통 함수의 파라미터, 배열 객체 안에서~~~ 등에서 쓰인다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

let numbers = [1, 2, 3, 4, 5]; 
let aa = numbers;
// 구조분해하려면 변수 쪽에 구조를 만들어줘야함 그냥 let 변수명 1 = 변수명 2를 하면 주소만 복사
let [a, b, ...nlist] = numbers;

/* let a = numbers[0]; */   

console.log(aa);
console.log(b);   // 배열을 분해해서 b라는 변수로 만들어주는것임
console.log(nlist);  


let hong = {
    name : "홍길동",
    age : 20,
    address : "서울시 강남구"
}

let {name, age, address} = hong;
/* 아래로 정의 된 것을 한줄로 처리된 것임 
    구조 분해 할당으로 정의되는 변수는 
    객체의 속성(프로퍼티, 키)과 동일한 이름으로 정의되어야 한다.
    let name = hong.name;
    let age = hong.age;
    let address = hong.address;

*/


// hong 이라는 사람의 정보를 각각의 변수로 정의  //
console.log(name);
console.log(age);
console.log(address);

/*  참고

            // 여기의 params를
function test({...params}) {
    let {a,b,c} = params;  //여기서 구조분해 할당을 하는 것 // {a:1, b:1,c:1}
}

let a = 1;
let b = 2;
let c = 3;
test (a, b); */


// 함수의 반환 값을 받아 구조 분해 할당(destructure) 방식으로 정의 
function creatEmoji() {
    return {
        fname : "apple",
        color : "red", 
        emoji : "🍎"
    };
}

let {fname, emoji, color, price=1000} = creatEmoji();   
//가져올 때 순서는 상관이 없다 이름(key 속성) 동일하면 됨 할당되지 않은 값을 추가하고 싶으면 초기화 하여 사용 (여기서 price) 
console.log(fname, color, emoji, price);


let flist = ['🍎','🍊','🍋'];
let [apple, orange, lemon] = flist;
console.log(apple, orange, lemon);

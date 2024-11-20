
//1. spread Operator
function display (...params) {
    for(number of params) console.log(number);
    
}

display (1,2);
display (1,2,3,4);

// for of 엔진이 파라미터에들어가있는 만큼 반복해줌?? 


const hong = {
    name : "홍길동",
    age : 20
}

const hongUpdate = {
    ...hong,
    address : "서울시 강남구"
};
console.log(hongUpdate);


//2. Destructuring object (구조분해할당)
const getObject = () => {
    return{name: "공유", age : 30};
}

const {name , age} = getObject();
console.log(name, age);


const getObject2 = () => {
    return [1,2,3]; 
}

const [n1, n2, n3 ] = getObject2();
console.log(n1, n2, n3 );


// 3. 인스턴스객체.forEach(콜백함수); 
const numbers = [1, 2, 3];
numbers.forEach((element, i )=>console.log(i, element));    // 블레이저는 리턴과 함께 생략함
    //파라미터 순서 1.요소 2.인덱스   //출력 순서는 변경이 가능

const myMap = new Map(); 
myMap.set('name', '홍길동')
myMap.set('age', '20')
myMap.forEach((value, key)=>{console.log(key, value);})
            //디폴트 순서 - 변경X   //출력 순서는 변경이 가능



const mySet = new Set();
mySet.add("홍길동");
mySet.add("홍길동");
mySet.add("서현진");
console.log(mySet);
mySet.forEach((value ,key)=> console.log(key, value));   //키는 value를 복제해서 사용함
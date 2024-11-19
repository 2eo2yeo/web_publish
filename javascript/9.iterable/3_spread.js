// ... (spread Operator, 전개구문)
// 모든 Iterable Object에서 사용 가능
// function 함수명 (...param) <<특히 많이 사용 
// [...iterable] 배열안에서 받을수있음 
// {...iteralbe} 객체 안에서 받을 수 있음


function add(...numbers) { //numbers[ 파라미터..]
    let sum = 0;
    for(number of numbers) sum += parseInt(number);
    return sum;

}
let sum = add(1,2,3,4,5,6,7,213,4,5,'47')
console.log(`sum = ${sum}`);


// 2. [...iterable]
let fruit1 = ['🍏','🍋']
let fruit2 = ['🍓','🍊','🍉']

// fruit1과 fruit2 사이에 🍍 추가
let fruit3 = fruit1.concat('🍍',fruit2);
let fruit4 = [...fruit1, '🍍', ...fruit2];   //스프레드 연산자로 fruit 1,2의 모든 요소를 가져옴 //react에서는 이걸 더 많이 씀

console.log(`fruit3 = ${fruit3} `);
console.log(`fruit4 = ${fruit4} `);


// 3. {...iterable}
const hong = {
    name : "홍길동",
    age : 20,
    address : "서울시 강남구"
}

const hongUpdate = { 
    ...hong,           //위의 object literal을 레퍼런스 하고 싶음
    job : "개발자"
};

console.log(hongUpdate);



//filter
const words =['spray','elite','exberant','destruction','present']
console.log(words.filter ((item) => item.length > 6));   // 앞에 블럭 {}이 있으면 반드시 return 키워드를 준다 중요!! 
// 콜백 함수에 {} 를 추가하면 반드시 return 키워드를 붙여서 값을 반환 !!! 위에는 한줄이라서 없앰
// console.log(words.filter ((item) => { return item.length > 6}));

let numbers = [1, 2, 3, 4, 5, 6, 7];
// 5이상 숫자 출력
let array = [];
numbers.forEach((x) => {
    if (x >= 5) array.push(x);
});
console.log(array);

// let array2 = numbers.filter((x) => { return x >= 5});     // []
let array2 = numbers.filter((x) =>  x >= 5);     // 중괄호 생략시
console.log(array2);


let numbers2 = [1.4, 2.5 , 3.2, 4.7, 5, 6, 7];
// 3보다 크거나 같은 값을 출력

console.log(numbers2.filter((x) => x >= 3));

// numbers2의 모든 값을 반올림한 후 3보다 크거나 같은 값을 출력해보세요.
console.log(numbers2.map((x) => Math.round(x)).filter((x) => x >= 3));
console.log(numbers2.map(Math.round).filter((x) => x >= 3)); //다른 사용법

//아이템 배열의 전체 길이수를 반환하는 함수

function searchItem(array, sItem) {
    array.filter((item) => {item === sItem});
    return array.filter((item) => item === sItem).length; 
}

let fList = ['🍋','🍓','🍎','🍊'];     //4리턴
let nList = [1, 2, 4, 5, 7, 4, 6, 45, 33, 90];       //10리턴

console.log(searchItem(fList,'🍋' ));
console.log(searchItem(nList, 4));





// 이 파일 선생님꺼 다시 다운받기
// 배열의 데이터 출력
// for, forEach 
let numbers = [1,2,3,4,5];

for(let i=0; i<numbers.length; i++) {
    console.log(`numbers[${i}] = ${numbers[i]}`);
    
}


//forEach는 => 순회(iterable) 메소드 지원
numbers.forEach((element, i) => console.log(`numbers[${i}] = ${element}`));
//forEach는 배열에서 활용되는 인스턴스 메소드이기 때문에 앞에 객체가 있어야함 

//replace3 함수를 forEach 형태로 작성해주세요.
function replace3(array, origin, target) { 
    let arrayObject = Array.from(array);
    arrayObject.forEach((element, index) => {
        // if(element === origin) arrayObject[index] = target;
        if(element === origin) arrayObject.splice(index, 1, target);
        }); 
        return arrayObject;
}


let fruits = ['🍎','🍍','🍎'];
let result = replace3(fruits,'🍎','🍋');
console.log(result);

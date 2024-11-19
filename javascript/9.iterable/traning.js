function replace(array, origin, target) { 
    let resultArray = Array.from(array);
    for(let i = 0; i <resultArray.length; i++) {
        let element = resultArray[i];
        if (element === origin) {
            resultArray.splice(i,1, target);
        }
    }
    return resultArray; 
}

let fruits = ['🍊', '🍎', '🍓', '🍎', '🍋', '🍎'];
let result = replace(fruits, '🍎', '🍏'); // 올바르게 함수 호출
console.log(result); // ['🍊', '🍏', '🍓', '🍏', '🍋', '🍏']


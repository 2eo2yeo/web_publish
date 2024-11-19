// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of

//Iterable Object 요소를 순회하여 출력함

/*
구문
for (variable of iterable object) {statement 실행문;}
*/

//예제 1. 배열의 요소를 교체하는 함수를 정의 : for...of
//파라미터의 이름은 다른 곳에서 사용할 것을 생각해서 일반적으로 짓기 (replace랑은 타겟팅이 되도록)
function replace (array, origin, target) {
    let resultArray = Array.from(array);    // 카피본 생성
    
    //foreach 사용
    resultArray.forEach((element, index) => {if(element === origin) resultArray.splice(index, 1 ,target)});


    /*  기본 for문 사용법  
    for(let i = 0; i <resultArray.length; i++) {
        let element = resultArray[i];
        if (element === origin) {
            resultArray.splice(i,1, target);
        }
    } */

    /* for...of를 사용하는 방식
    let index = 0;
    for ( element of resultArray) {
        if(element === origin) {
            //splice(인덱스,1,교체할요소);
            resultArray.splice(index,1,target);
        }
        index++;
    } */
    return resultArray;
}

let fruits = ['🍊','🍎','🍓','🍎','🍋','🍎'];
let result = replace(fruits, '🍎','🍏');
console.log(result);


let number = [1, 2, 3, 4, 2, 2, 5, 2];
let result2 = replace(number, 2, 7);
console.log(result2);

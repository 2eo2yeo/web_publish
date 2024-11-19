//배열이 나오면 for문 을 같이 생각하기??
// 1. 배열의 '🍎' 요소를 '🍓'로 교체해 주세요. 

let fruits = ['🍎','🍍','🍎'];
//output => ['🍓','🍍','🍓']

// 1-1. for문의 index 주소 활용        //for문을 돌릴때만 사용이 가능, 다른 곳에서는 사용이 불가능하다. 이 코드를 함수에 넣어서 사용해야함
for (let i=0; i<fruits.length; i++) {
    if(fruits[i] === '🍎') fruits[i] ='🍓';
    console.log(fruits[i]);
}

// 1-2. 함수 : 파라미터(배열객체, old, new) //new만쓰면 클래스에서만 쓰는 것이기 때문에 value를 붙임
//다른 곳에서 사용할 수 있도록하기, 함수명도 일반화 하는 것이 중요
// 교체한 값을 콘솔창에 출력

function replace (array, oldValue, newValue) {
    let result = " ";
    for (let i=0; i<array.length; i++) {
        if(array[i] === oldValue) array[i] =newValue;
        result += `${array[i]}\t`
    }
    console.log(result);
}

replace(fruits,'🍎', '🍓',);
let numbers = [1,2,3,1,2,1,5]
replace(numbers, 1, 9); //numbers란 배열객체에서 1을 9로 바꿔서 출력


//  1-3. 함수 : 파라미터(배열객체, old, new)
// 배열 객체를 반환

function replace2 (array, oldValue, newValue) {
    let resultArray = Array.from(array); //array를 얕은복사 (copy)해서 원본을 지키자
    for (let i=0; i<resultArray.length; i++) {
        if(resultArray[i] === oldValue) resultArray[i] =newValue;
    }
    return resultArray;
}

let names =['hong', 'kim','park','hong'];
let resultObj = replace2(names, 'hong','gong');
console.log(resultObj);


// 
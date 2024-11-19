// Array 빌트인 객체의 메소드 익히기 -> MDN 사이트 참조
let array1 = [1,2,3,4,5];
console.log(array1[0]); //array1.0 X <이렇게 찾으면 안됨
console.log(array1['0']);
console.log(`array.length = ${array1.length}`);

// push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
let fruits =['🍏','🍋']
console.log(fruits);

// 빨간사과를 추가
fruits[fruits.length] = '🍎';
console.log(fruits);

// 1. 배열 요소 추가 : push(item1...itemN)
fruits.push('🍊');  // 배열의 마지막에 하나 
console.log(fruits);

// let a = ['🍏','🍋','🍎'];   //참고 : 배열로 넣게되면 마지막 인덱스에 배열 형태로 들어감, 배열이 중첩됨
// fruits.push(a);
// console.log(fruits);


//2. fruits 배열의 전체 key값 반환 : object.keys(인스턴스)
// 배열의 key 값은 인덱스 주소
let keyList = Object.keys(fruits);  //여기서 keyList는 배열객체
console.log(keyList[2]); // object.keys는  키를 모아서 배열로 반환하는 메소드이다.

// 3. 배열 요소 삭제
// 3-1. 배열 객체의 마지막  요소 삭제 - pop()
console.log(fruits);
let deleteItem = fruits.pop();   // 삭제된 마지막 요소 저장 
console.log(`deleteItem = ${deleteItem}`);
console.log(fruits);

// 3-2. 배열 객체의 처음 요소 삭제 - shift()
console.log(fruits.shift());
console.log(fruits);

// 3-3. 배열 특정요소 삭제 및 교체 - splice 
fruits.push('🍈','🍉','🍌','🍍');
console.log(fruits);
// [ '🍋', '🍎', '🍈', '🍉', '🍌', '🍍' ]
fruits.splice(0, 1, '🍓')   //0번지에(레몬자리), 1개교체, 딸기로
console.log(fruits);
// 1 ~ 3번지 요소를 삭제 하기  (사과~ 수박까지)
fruits.splice(1,3) // 1번지부터, 3개삭제 
console.log(fruits);   
// 0번지 주소에 수박 추가 하기 
fruits.splice(0,0,'🍉'); // 0번지, 삭제할것 0개, 수박 추가
console.log(fruits);


/* splice는 깊은 복사가 됨, 깊은복사 - 주소를 찾아가서 객체가 변경이 됨(원본에 영향)
slice는 얕은 복사가 됨, 원본에 영향 x, 원본 배열에 있는 주소를 복사만 함 */



// 3-4. 배열 객체의 특정 요소 추출 - slice(index1, index2) //end 미포함
// 원본 배열 객체의 특정 요소를 추출하여 새로운 배열로 생성
fruits.push('🍈','🍉','🍌','🍍');
console.log(fruits);


// 1,2 인덱스의 요소를 추출 (얕은 복사 : shallow copy )
// shallow copy는 원본에 영향을 주지 않음 
let sfruits1 = fruits.slice(1, 3); 
console.log(sfruits1);

// 3-5. 배열 합치기 : concat(배열)
console.clear();
let numberList1 = [1, 2, 3];
let numberList2 = [4, 5, 6];
console.log(numberList1.concat(numberList2));
console.log(numberList2.concat(numberList1));


// 3-6. 배열의 순서 바꾸기 : reverse()
let numbers = [1,2,3,4,5,6];
console.log(numbers.reverse());  //출력 6,5,4,3,2,1 


// 3-7. 배열의 중첩 해제 : flat()  //외부 api 받아올때 중첩될 수 있음
// [1,2,3, [5,6]]  => [1,2,3,4,5]
// 중첩해제시에 heap에 객체를 많이 만들어서 메모리를 많이 잡아먹으므로 별도의 함수를 생성하여 해제하는 것이 좋다.

let fnumbers = [1,2,3, [5,6, [7,8]]]
console.log(fnumbers);
console.log(fnumbers.flat()); // 1 level 중첩 해제
console.log(fnumbers.flat(2)); // 2 level 중첩 해제

// 3-8. 배열의 문자 요소를 하나의 string 문자열로 반환 : join()
// 배열에 있는 문자열들이 문자 하나로 만들어짐
let textList = ['a','b','c'];
console.log(textList);
console.log(textList.join());    //.split 과 반대형태 - 빌트인의 string 참고 // 문자열이 됨
console.log(textList.join().split(','));    // 출력 : ['a', 'b', 'c']




// Map 클래스 생성 

/* 구문 
    new Map(iterable)   ->  iterable 객체를 인자로 담을 수 있다.
*/

const fList = new Map([[ 1, 'one' ],[ 2, 'two']]); 
console.log(fList);
console.log(fList.get(1));
console.log(fList.get(2));


// 사이즈 확인
console.log(`size => ${fList.size}`);

//데이터 추가 
fList.set(3, "three"); 
// fList.set([4, "four"],[5, "five"]); //set 메소드는 구조물에 할당이 되지 않는다.  (배열이나 객체를 키로 사용할 때, 모양이 같아도 서로 다른 것으로 취급된다는 뜻) //set은 key, value값으로 받아야함
console.log(fList);


// 데이터 확인
if(fList.has(3)) console.log(fList.get(3));

// 모든 키 값 출력 
console.log(fList.keys());

// 모든 value 출력
console.log(fList.values());

//key, value를 입력된 순서대로 배열 형태로 변환
let iterableObj = fList.entries();
console.log(iterableObj);   // 출력 :  { [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] } 
console.log(iterableObj.next().value);  // next만 이용했을 때의 출력 : { value: [ 1, 'one' ], done: false }
// 뒤에 꺼내올게 있는지의 진행상태 까지 다 나옴

// 순회 : forEach
fList.forEach((element) => console.log(element)); // value값만 출력이되는 형태 
fList.forEach((value, key, map) => console.log(value, key, map)); //순회시 디폴트가 value 값임 //map에서는 key, value, map 세개만 받을 수 있음

//순회 : for...of
//[key, value]
for(let element of fList) console.log(element);

// key 출력 
for(let key of fList.keys()) console.log(`key => ${key}`); //key들을 가지고 와서 key만 출력하겠다.

// value 출력
for(let value of fList.values()) console.log(`value => ${value}`); 

// entries : 1, one
for(let entry of fList.entries()) console.log(`entry => ${entry}`); 

// 데이터 삭제
if(fList.has(1)) fList.delete(1);  //1에 해당되는 값 삭제
console.log(fList);

// 전체삭제
fList.clear();
console.log(fList);


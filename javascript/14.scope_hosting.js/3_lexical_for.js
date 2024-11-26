// 1~5출력 

for( let i = 1; i < 6 ; i++) {
    console.log(`i --> ${i}`);
} //레코드가 다섯개가 만들어지고 순차적으로 돌음
// for블록마다 레코드가 별도생성되고 공유되지 않고 각각 실행되기 때문에 충돌날 일이 없음

for( var i = 1; i < 6 ; i++) {
    console.log(`i --> ${i}`);
}


// for 루프의 인덱스 값으로 var키워드는 권장하지 않음
let a = [1,2,3]; 
for (let i = 0; i<a.length; i++)
    console.log(`a[${i}] --> ${a[i]}`);


console.log(`a[${i}] --> ${a[0]}`);
console.log(`a[${i}] --> ${a[1]}`);
console.log(`a[${i}] --> ${a[2]}`);


/* for...of  */
for(let element of a) { 
    console.log(element);
    
}
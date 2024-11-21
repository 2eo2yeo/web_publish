//비동기식 처리 함수를 순차적으로 호출해서 실행하고자 할 때
function step1(init, callback) {
    let result = init + 1;
    callback(result);
}
function step2(init, callback) {
    let result = init + 2;
    callback(result);
}
function step3(init, callback) {
    let result = init + 3;
    callback(result);
}

step1(0, (result1) => {
    console.log(`result1 ==> ${result1}`);
    step2(result1, (result2) => {
        console.log(`result2 ==> ${result2}`);
        step3(result2, (result3) => {
            console.log(`result3 ==> ${result3}`);
        })
    });
    
}); 

//순차적으로 실행 해야함 
// return을 콜백함수로 하게되면 중첩이 많이 되어 콜백지옥에 빠지게 됨
// 그래서 promise를 사용
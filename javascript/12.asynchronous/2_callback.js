//비동기식 처리 방식에서 callback 호출
// runInDelay (Callback, second)

function runInDelay(callback, second) {
    setTimeout(callback, second)
}

runInDelay(function(){console.log(`타이머3초경과`);}, 3000); 
runInDelay(() => {console.log(`타이머 1초 경과!!`);}, 1000); 
console.log(`--프로그램 종료--`);

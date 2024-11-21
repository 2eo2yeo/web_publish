function a() {
    c(); // return address(복귀 주소)
    console.log(`-----> a function!!`);  
    
}
function b() {
    setTimeout(()=>{console.log(`1초후 setTimeout 함수 실행!!`)},1000);  
    //가장 먼저 실행되어야 하지만 비동기식이므로 backgroud로 보내고 다른 것 먼저 실행 
    console.log(`-----> b function!!`); 
    
}
function c() {
    b();
    console.log(`-----> c function!!`); 
    
}

a(); //a -> c -> 동기식 b 출력, 비동기식은 back으로 ->  c출력 -> a 출력 -> 비동기b 출력



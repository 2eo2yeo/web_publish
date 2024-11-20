// 에러 처리 : try ~ catch

let numbers = [1,2,3]; //length:3 , index: 0,1,2 
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]); //undefiend

numbers[0] = 100; 
console.log(numbers[0]);

// 자바스크립트에서는 동적으로 배열을 재생성한 후 값을 입력한다.
// 자바언언에서는 동적으로 배열을 재생성하지 x
//ArrayIndexOutOfBoundsException 예외상황이 발생함
numbers[9] = 900;      //자스에서는 새로운 객체를 생성해서 10개를 다시 생성해버림 //데이터 유실방지를 위한 자스의 유연한 특성
console.log(numbers[9]);


let number = 1234;   //number는 이터러블 아니라 에러발생
try {
    for (n of number) console.log(n);
} catch (error) {
    console.log('에러는 엔진한테 넘김 !'); //에러로 넘어가면 프로그램이 멈추지 않고 이게 출력이 되도록함
}

    
    

console.log('--프로그램종료!--');

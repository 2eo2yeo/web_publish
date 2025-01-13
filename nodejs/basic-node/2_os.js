const os = require('os'); //require 내장 객체는 nodejs에서 제공하는 내장모듈을 호출
// 윈도우의 정보를 os라는 객체로 만들어 놓음 

console.log(os.type()); // 출력 : Windows_NT
console.log(os.hostname()); // 출력 : 사용자명
console.log(os.homedir()); // 출력 : C:\Users\기본사용폴더
// console.log(os.cpus()); // 출력 : {cpu의 정보들}
console.log(os.freemem()); // 출력 : 사용가능 메모리 용량(RAM)
console.log(os.totalmem()); // 출력 : 전체 메모리 용량

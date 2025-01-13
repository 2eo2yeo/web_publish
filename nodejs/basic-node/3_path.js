const path = require('path');
const string = __filename; // 현재 실행중인 파일의 경로

console.log(path.sep); //출력 : \
console.log(string); //출력 : 현재 실행중인 파일 경로
console.log(path.dirname(string)); //출력 : 현재 실행중인 파일의 경로 중에 디렉토리 이름까지만 출력
console.log(path.extname(string)); //출력 : 현재 실행중인 파일의 확장자
console.log(path.basename(string)); //출력 : 현재 실행중인 파일명 (파일명+확장자)
console.log(path.basename(string, path.extname(string))); //출력 : 현재 실행중인 파일명
console.log(path.dirname(string),path.join('/images')); // C:\web_publish\nodejs\basic-node \images    images 경로 추가

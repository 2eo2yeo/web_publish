// write.txt 파일에 'hello~nodejs' 문자를 추가한 후 
// 파일의 내용을 출력 

const fs = require('fs'); 

fs.appendFileSync('./writeme.txt', 'hello~ nodejs ~', 
                        (err) => console.log(err)); 

let data = fs.readFileSync('./writeme.txt');
console.log(data.toString());

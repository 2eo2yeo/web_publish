// express 웹 서버 : 웹 클라이언트 받아서 처리 한 후 결과를 전송

const express = require('express');  //express 가져오기
const server = express();    // express 함수를 server 변수에 할당 

/*
    GET/POST 방식으로 요청 들어오는 처리를 나열
*/

// 브라우저가 접속하는 url - http://localhost:8080/ 
// path : /(root)
// path 경로는 루트이다.

server.get('/', (req, res)=>{ //req:요청정보(클라이언트(브라우저) --> 서버), res:응답정보(서버 ---> 클라이언트)
    res.send('<h1>express 서버에서 전송합니다</h1>');     
        // send 명령어를 통해 브라우저에 보냄. 브라우저는 html형태이기 때문에 html 형태로 보낸다. 
});


// 브라우저가 접속하는 url - http://localhost:8080/test
// path : /test

server.get('/test', (req, res)=>{
    res.send('<h1> /test로 요청한 결과 전송! </h1>');   // 브라우저에 보냄 
    console.log('/test 전송 완료!!');    //서버(콘솔)로 보냄
    
    
});

// path : /param/홍길동          -- param까지는 경로, 그 뒤는 데이터
server.get('/param/:name', (req, res)=>{
    console.log('name -->>', req.params.name);
    res.send(`${req.params.name} 전송완료`)
})




// server.get();     //get 방식으로 받을 때
// server.post();     //post 방식으로 받을 때
// server.use();





server.listen(8080, () => {console.log('서버 실행중')});         
                    // http://localhost:8080/ 
                    // 포트 번호는 react랑 겹치지 않는 선에서 준다.


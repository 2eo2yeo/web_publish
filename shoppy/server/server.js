
import express from 'express';
import mainRouter from'./router/mainRouter.js'; //확장자 js 잘 붙여줘야함
import helloRouter from'./router/helloRouter.js';
import employeeRouter from'./router/employeeRouter.js'; 
import cors from 'cors';

// 서버 생성 및 포트 정의
const server = express();
const port = 9000;


/* 서버의 공통적인 작업 */
server.use(express.json()); //express(node)를 json타입으로 바꿔서 아래서 요청한 도메인에 넘기겠다.
server.use(express.urlencoded()); //한글 인코딩 하겠다.
server.use(cors()); // 어떤프로토콜이든 이걸 작업하겠다

/** 서버 요청을 처리하는 미들웨어 정의 */
server.use('/', mainRouter ); //mainRouter 에게 넘겨줌
server.use('/hello', helloRouter);
server.use('/employee', employeeRouter);


server.listen(port, ()=>{
    console.log(`server start ===>> ${port}`);    
});

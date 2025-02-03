import express from 'express'; 
// import { getHello, getHelloTest } from '../controller/helloController.js'; 
import * as controller from '../controller/helloController.js';  // 별칭 정의

export const router = express.Router();     // 라우터에 계속 등록

/* 라우터 경로 추가 */ 
router.get('/', controller.getHello);   // /hello/  ~ hello/아래의 경로를 추가하는 것
router.get('/test', controller.getHelloTest);

export default router;
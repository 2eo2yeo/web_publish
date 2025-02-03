import express from 'express'; 
import * as controller from '../controller/employeeController.js'

const router = express.Router();

router.get('/all', controller.getEmployeeAll); // 경로:/employee/all  //router는 컨트롤러로 보내기만 하면되어서 괄호를 안붙임

export default router;
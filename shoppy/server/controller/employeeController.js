import * as repository from '../repository/employeeRepository.js';

export const getEmployeeAll = async(req, res) => { //파라미터는 정해져있음
    // 외우기 db연동 -> 무조건 비동기 
    // promise는 동기이기 때문에 await async 무조건 써야함

    const result = await repository.getEmployeeAll(); //자스 함수이기 때문에 여기서는 괄호 붙음, 괄호가 있음 -> 결과를 여기로 받는다는 뜻 
    res.json(result); // json타입을 보낼때는 send가 아닌 json으로 보냄 //문자리턴은 send 가능
    res.end(); 
}


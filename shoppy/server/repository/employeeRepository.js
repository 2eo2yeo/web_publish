import { db } from './db.js'

export const getEmployeeAll = async () => {
    // 1. sql 쿼리 작성 
    // sql은 탬플릿 리터럴안에서 여러줄 정의한다. 탬플릿 리터럴 사용시 여러줄 사용이 가능 // 별칭 사용시 별칭으로 바뀜
    const sql = `      
                    select row_number() over(order by emp_id) as no,
                            emp_id as id, 
                            emp_name as name, 
                            eng_name as ename,
                            gender,
                            left(hire_date,10) as hiredate, 
                            salary,
                            concat(format(salary,0),'원') as osalary
                    from employee
                    
                        `;

    // 2. db.js의 connection을 이용하여 실행한 후 결과 가져오기
    // 쿼리가 가져올때 execute vs query 
        // excute(안정성, prepared statement, 반복되는 쿼리를 저장했다가 불러내서 계속 씀, 반복되는 쿼리일 경우 이걸 씀) 
        // query(simple query, 항상 완성된 커리로 실행해야함, 쿼리가 정해져있다면 simple쿼리 가능)의 차이 
    const [employees, fields] = await db.execute(sql)                 // db에 있는 다리를 하나 가져와서 mysql으로 감 //axios랑 비슷한 개념 promise로 리턴
                            .then(result => result) // [rows:[],fields:[]] //구조분해 할당은 이름 똑같이 해야함
                            .catch(error => console.log(error));


    // 3.  호출한 곳에 결과 리턴 
    return employees;   // result가이 여기로 와야함 // 정의한 후 가져오기
}

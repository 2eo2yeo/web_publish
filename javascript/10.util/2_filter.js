// text 배열을 입력받아, 길이가 3자 이상인 text 들을 새로운 배열 객체로 생성하여 반환해주세요..

const textFilter = (object) => {
    //여기의 result는 로컬 변수
    return object.filter((text) => text.length>= 3);
                                //text를 순회해서 길이가 3이상이면 []배열로 리턴
};

// 형태만 변경한 동일한 기능
function textFilter2(object) {
    return object.filter((text) => text.length >= 3);
}

let textArray = ['nodejs','javascript','re','ja'];
let result = textFilter(textArray);
//얘는 글로벌변수
console.log(result);


//2. 숫자 배열을 입력받아, 짝수만 필터링하여 출력하는 함수를 생성해주세요.
//출력되는 값들은 배열 객체 담아 반환해주세요.

//짝수만 필터 
const evenNumber = (array) => {
    return array.filter((number) => !(number % 2) );  // 여기서 flase값은 return되지 않고 버려짐 (0이)
                                                    // 0을 부정연산자를 사용해서 1값으로 바꿔주면 true가 됨
}

//홀수만 필터
const oddNumber = (array) => {
    return array.filter((number) => number % 2);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(evenNumber(numbers));
console.log(oddNumber(numbers));



//3. 사원의 아이디를 받아서, 7자리 번호를 랜덤하게 생성하세요.
// 아이디와 번호를 조합하여 사번을 생성해주세요.
// 사원의 아이디는 배열객체로 입력받고, 출력도 배열형태로 출력해주세요.
// 전체, 배열 형태로 생성 -> map 사용
const creatEmployeeNumber = (array) => {
        //중복된 데이터 처리
        let array2 = new Set(array);  
    
        return Array.from(array2).map((id) => 
        id.concat('_', Math.trunc(Math.random() * 100000000)));
}

const employeeIds = ['hong', 'test', 'abcd', 'test1234','hong','test']
const employeeNumber = creatEmployeeNumber(employeeIds);
console.log(employeeNumber);

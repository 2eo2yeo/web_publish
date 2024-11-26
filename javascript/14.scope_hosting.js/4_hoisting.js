// 호이스팅(Hoisting) : 코드 실행 전 메모리에 객체를 선언하고 할당하는 작업
// 콜스택인지 힙인지 구분

//함수 호출
hoist1();
// hoist2();  왜 에러가 뜨는지 정리


    function hoist1() {  //fuction 키워드는 호이스팅되기 때문에 먼저 메모리에 올라가있기 때문에 먼저 호출 가능
        console.log("호이스팅 1");
    }

    const hoist2 = () => { //let이나 const로 선언한 arrow펑션은 호출 전에 선언이 되어있어야함
        console.log("호이스팅 2");
        
    }


hoist2(); //arrow함수는 반드시 선언후 함수 호출!! 

//호이스팅 형태로 사용하는 이유 정리
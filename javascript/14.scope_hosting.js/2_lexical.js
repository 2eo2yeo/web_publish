// lexical(렉시컬) - 실행컨택스트안에 포함된 개념으로 
// 스코프별로 메모리를 효율성 있게 관리하는 영역, 변수선언, 실행코드, 외부호출코드를 연결하는 것이 포함되어있다.
// 콜스택(call Stack) - 호출되는 코드(함수)를 순차적으로 실행
//변수의 선언시 let, const를 활용하여 정호가한 스코프 범위 설정 중요!

/* 콜스택과 실행컨택스트의 관계 */
// 코드를 한줄한줄 읽는 콜스택과(실제 일을 담당), 실행컨텍스트로 이뤄져있음
// 실행컨택스트에는 LexicalEnvironment와 VariableEnvironment라는 컴포넌트가 있다
// LexicalEnvironment는 코드를 전체적으로 읽어서 scope이 몇개있는지 체크, scope끼리의 단방향 관계를 스코프체이닝, 
// let, const 선언 위치가 중요함, var는 어디서 선언하든 전역으로 선언이되어서 렉시컬 환경 구축이 어려움
// 콜스택 -> 싱글스레드 , 콜스택은 실행컨택스트가 가지고있는 LexicalEnvironment와 VariableEnvironment 이용해서 코드를 저장하고 가져와서 실행을 한다.
// 정리하기 -> 콜스택과 실행컨택스트의 관계, lexical enviroment, 스코프체이닝 (단방향 바깥에서 안으로), 


//https://ui.toast.com/weekly-pick/ko_20171006


// lexical environment :  전역 scope(변수, 실행코드 외부연결)/ level 1(변수,실행컨택스트)/ level 2 / 세부분을 scope을 나눠서 저장되어짐

{ //전역 scope는 생략도 가능
    let a = 10;
    console.log(`a --> ${a}`);
    console.log(`a --> ${aa}`); //var는 전역으로 선언되어서 저장은 되어있지만 값은 없기때문에 undefined 

    {
        let b = 20;
        var aa = 100; //var는 전역으로 선언됨 
        console.log(`b --> ${b}`);
        console.log(`a --> ${aa}`);
        
        {
            let c = 30;
            console.log(`c --> ${c}`);
            console.log(`a --> ${a}`); //바깥에 있어서 호출 가능
            console.log(`b --> ${b}`);  //바깥에 있어서 호출 가능
            
        } //level 2
    } //level 1
} //전역 scope


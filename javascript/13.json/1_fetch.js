// fetch(resourceURL) - 비동기식 처리 방식으로 네트워크를 통해 리소스를 가져옴
// fetch의 특징 : response로 넘어올 때 문자열로 넘어옴, fetch는 json함수 꼭들어가야함 json객체로 변환을 해줘야함
// KOBIS - 일별 박스오피스

let key = `32a76f0b374a038b3e1933a983d82f8b`;
let target = `20241121`;
let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;

// 1.Response 객체
fetch(url)
    .then((response)=>{console.log(response)})
    .catch((error)=>{console.log(error)});

//  2. JSON 데이터 가져오기 
let result = await fetch(url);  //JSON객체가 문자열 데이터 타입으로 가져옴
let jsonData = await result.json(); //.json()함수를 통해 JSON 객체 타입 변환
//await를 쓰지 않으면 fetch가 반환하는 Promise가 완료되기 전에 다음 코드가 실행되어 결과를 제대로 다룰 수 없습니다.Promise가 완료될 때까지 기다려야만 데이터를 사용할 수 있으므로 await가 필요합니다.
// await는 async를 붙여줘야함 

console.log(`type => ${jsonData.boxOfficeResult.boxofficeType}`);
console.log(`range => ${jsonData.boxOfficeResult.showRange}`);
console.log(`rankList => 
    ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].rank}`);
console.log(`rankList => 
    ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].movieNm}`);














/*
    Response {
        status: 200,  //200대 성공 // 400대는 에러
        statusText: 'OK', //200을 해석해서 성공했다고 알려줌
            headers: Headers {   //header -> 어떠한 타입인지
            date: 'Fri, 22 Nov 2024 01:29:40 GMT',   
            'content-type': 'application/json;charset=utf-8',
            'transfer-encoding': 'chunked',
            connection: 'keep-alive', //tcp프로토콜 //요청이올때까지기다림
            server: '.'
            },
            body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
            bodyUsed: false,
            ok: true,
            redirected: false,
            type: 'basic',
            url: 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=32a76f0b374a038b3e1933a983d82f8b&targetDt=20241121'
        }
 */
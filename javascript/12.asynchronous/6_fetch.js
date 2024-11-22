//전역함수 fetch - 실행한 결과를 promise가 알려줌
//API의 promise 리턴 값 확인 후 호출

const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=32a76f0b374a038b3e1933a983d82f8b`;

fetch(url) //resolve(result),reject(error)
    .then((result) => {console.log(`result ==> ${result}`)})
    .catch((error) => {console.log(`error ==> ${error}`)});
    //네트워크 주소가 맞는지 안맞는지
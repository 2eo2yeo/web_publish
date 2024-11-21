//전역함수 fetch - 실행한 결과를 promise가 알려줌
//API의 promise 리턴 값 확인 후 호출

const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101`;

fetch(url) //resolve(result),reject(error)
    .then((result) => {console.log(`result ==> ${result}`)})
    .catch((error) => {console.log(`error ==> ${error}`)});
    //네트워크 주소가 맞는지 안맞는지 
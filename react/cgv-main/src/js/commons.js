//jsx처럼 화면 보여주는 것이 아니라 로직(fetch함수)을 실행하는 파일

/* 내용 : 비동기식! 네트워크 연동 실행 함수 
    @param{*} url
    @returns
*/

export async function fetchJSON(url) {
    const data  = await fetch(url); // await 비동기식이니까 기다려라
    const jsonData =await data.json(); // 위에있는 data를 json데이타로 바꿈 //await 비동기식 함수를 가져와서 데이터로 변형할테니까 기다려라
    
    return jsonData;
}


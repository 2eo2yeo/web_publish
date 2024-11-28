import { kobisBoxOffice } from "./kobisCommons.js"; 

creatMovieChartList();

/* index -> 무비차트 리스트 생성 함수 */


function creatMovieChartList() {
    const date = new Date(); //date는 빌트인 객체
    // const year = date.getFullYear(); //date가 갖고있는 연도를 꺼내옴
    // const month = date.getMonth()+1; //기본 +1 
    // const day = date.getDate()-1; //하루 전날꺼를 꺼내오기 때문에 -1

    const searchDt = date.getFullYear().toString()
                        .concat(date.getMonth()+1,date.getDate()-1);

    console.log(searchDt);
    

    // kobisBoxOffice('Daily', '20241127');
}
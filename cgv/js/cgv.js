

import { kobisBoxOffice, searchMoviePoster } from './kobisCommons.js';



createMovieChartList(1);

/* index -> 무비차트 리스트 생성함수  */
function createMovieChartList(page){ //1 page당 인덱스 0~4번지까지 나오도록 체크하기?
    let type = 'Daily';

    const date = new Date();
    const searchDt = date.getFullYear().toString().concat(date.getMonth()+1,date.getDate()-1);

    // console.log(searchDt);
    

    kobisBoxOffice(type, searchDt)
    .then((result) => {
    //   console.log(result);
    const rankList = result.boxOfficeResult.dailyBoxOfficeList; 
    let posterList = [];   //promise 객체타입 10개의 이미지 poster 저장

    rankList.forEach((element) => {
        posterList.push(getPoster(element.movieNm, element.openDt.replaceAll('-',''))); 
    });

    Promise.all(posterList) //비동기식 처리를 묶어서 한번에  실행 및 관리
        .then((poster) => {
            let output = '<ul>';
            (page ===2)?  output += `<li><span class="movie-chart" id="arrow-left">&lt;&lt;</span></li>`: output += '';
            let idx = 0;
            (page !== 1) ? idx +=5 : idx=0 ;
            rankList.forEach((movie, i)=>{
                i += idx;
                if(i < page * 5) { // page당 5개씩 보여주도록
                    output += `
                            <li>
                                <div>
                                    <img src="${poster[i]}" 
                                        alt="Movie-chart1"
                                        width="200px">
                                </div>
                                <div><h3>${rankList[i].movieNm}</h3></div>
                                <div><h5>${rankList[i].audiAcc}</h5></div>
                            </li>
                    `;
                }
            });


            (page ===1)?  output += `<li><span class="movie-chart" id="arrow-right">&gt;&gt;</span></li>`: output += '';
            output += `</ul>`;
            document.querySelector(".content-moviechart-list").innerHTML= output;


            //에러가났을 때 try catch로 묶는 이유 -> v8엔진에 넘기는 역할을 하려고???
            //arrow :: click event

            // 동일한 기능을 수행하는 것들은 class로 그룹핑을 하고  id로 구분을해서 하나하나 실행할 수 있도록 설정한다 (공식처럼 외우기) 요기선 movie-chart 클래스 보기 
            const arrows = document.querySelectorAll(".movie-chart"); //두개의 클래스가 배열로 들어감
            arrows.forEach((arrow)=>{ //화살표 하나하나 마다 이벤트가 들어가야하는데 하나를 꺼내고
                arrow.addEventListener('click',(event)=>{ //이벤트를 객체를 하나하나 꺼내서 실행
                (event.target.id === 'arrow-right')? createMovieChartList(2) : createMovieChartList(1) ;
                    
                });
            });

        /**********   바로 위에서 이 코드를 뽑아서 합침
            try {
            document.querySelector("#arrow-right").addEventListener('click', () => {
                createMovieChartList(2);
            });
            }catch (error) {}

            try {
            document.querySelector("#arrow-left").addEventListener('click', () => {
                createMovieChartList(1);
            });

            }catch(error) {}

        ************************/


        })
        .catch(error=> console.log(error));


    })
    .catch();
}; 

/* kobisCommons.js 파일의 searchMoviePoster 비동기식 함수를 순서대로 호출하는 getPoster 함수 생성*/
async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
}







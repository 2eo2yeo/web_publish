import {kmdb} from './commons.js';
initForm();

function initForm() {
    let output = `
        <h1>KMDB API</h1>
        <div>
            <!-- 자스로 하는거라 name아닌 id로 핸들링  -->
            <select id="type">
                <option value="default">선택</option>
                <option value="director">영화감독</option>
                <option value="actor">영화배우</option>
            </select>
            <input type="text" id="type_value" placeholder="감독/배우">
            <input type="text" id="title" placeholder="영화제목을 입력해주세요">
            <button type="button" id="search">Search</button>
        </div>
        <div id="result"></div>
    `;

    document.querySelector("body").innerHTML = output;

    //버튼 이벤트 추가
    document.querySelector("#search").addEventListener('click', ()=>{

        //validation check(유효성 체크)
        let type = document.querySelector("#type")
        let typeValue = document.querySelector("#type_value")
        let title = document.querySelector("#title") 
        if (type.value === 'default' ) {
            alert('타입을 선택해주세요')
            type.focus();
        }else if (typeValue.value === "") {
            alert("감독/배우를 입력해주세요")
            typeValue.focus();
        } else if (title.value === "") {
            alert("영화제목을 입력해주세요")
            title.focus();
        } else {
            searchMovieResult(type.value ,typeValue.value, title.value); // KMDB API 연동 후 출력화면 //순서 맞춰서 함수로 보내기
        }


    });
} // initForm()


// KMDB API 연동 후 출력화면
function searchMovieResult(type, value, title) { // value만 이름바꿔서 파라미터 매핑
    console.log(type, value, title);

    /* 검색 결과 출력 Promise --> 화면 */
    kmdb(type, value, title)
        .then((result) => {
            let count = result.TotalCount;
            let output = ``;
            let actorFive = []; // 밑에있는 버튼에서 이벤트 처리를 같이하기 위해서 위로 빼놓음 렉시컬~
            let actorAll = [];

            if (count) {
                let info = result.Data[0].Result[0];
                let directors = result.Data[0].Result[0].directors.director;
                let actors = result.Data[0].Result[0].actors.actor;
                let posterArray = result.Data[0].Result[0].posters.split("|");  //문자열이라 바로 split으로 변환이 가능, array는 불가능
                let stillArray = result.Data[0].Result[0].stlls.split("|");
                let staffs = result.Data[0].Result[0].staffs.staff;
                
                let title = info.title.replaceAll('!HS','').replaceAll('!HE','');

                actors.forEach((actor, i) => {
                    if(i<5) actorFive.push(actor.actorNm);
                });
                
                actors.forEach((actor) => {
                    actorAll.push(actor.actorNm);
                });
                
                // console.log(`actorFive --> ${actorFive}`);
                

                output += `
                <div class = "container">
                    <div class="container-content">
                            <h3>${title}</h3>
                            <h5>${info.titleEng} - ${info.prodYear} 년</h5>
                            <hr>
                            <p>[${info.type}] ${info.rating} ${info.nation} ${info.runtime}분 ${info.repRlsDate}(개봉)</p>
                            <p><span>제작사 :: </span><span>${info.company}</span></p>
                            <p><span>감독 :: </span><span></span>${staffs[0].staffNm}</p>
                            <p><span>출연 :: </span><span id="actors">${actorFive.join()}</span>
                                <button type="button" id="more_actors">더보기</button>
                                <button type="button" id="close_actors" style="display:none">접기</button>
                            </p>
                    </div>
                    <div class="container-img">
                        <img src="${posterArray[1]}">
                    </div>
                    </div>
                    <div class="container-stills">`;

                    stillArray.forEach((still)=>{
                        output += `<img src="${still}">`
                    
                    });

                    output += `</div>`;


            } else {
                output += `<h5>검색하신 데이터가 존재하지 않습니다.</h5>`;
            }

            document.querySelector("#result").innerHTML = output;

        /* more_actors 더보기 버튼 이벤트 - innerHTML.output화면을 보여주고 난 다음에 얘가 나와야함 */
        document.querySelector("#more_actors").addEventListener('click', ()=>{ //html more_actors id에 접근. click 발생시 함수실행
            document.querySelector("#actors").textContent = actorAll.join();
            document.querySelector("#more_actors").style.display="none";
            document.querySelector("#close_actors").style.display="inline-block";
        }) 
            

        /* close_actors 접기 버튼 이벤트 */
            document.querySelector("#close_actors").addEventListener('click', ()=>{
                document.querySelector("#actors").textContent = actorFive.join();
                document.querySelector("#more_actors").style.display="inline-block";
                document.querySelector("#close_actors").style.display="none";

            })

        })
        .catch((error) => console.log(error));

}

//data가 없으면 제공되는 api의 키와 값이 totalcount -> 0으로 나오기 때문에 이걸로 데이터 없는 걸 체크
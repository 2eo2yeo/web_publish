/* 제이슨 데이터 필기 : 제이슨 데이터는 객체리터럴 안의 키값에도 따옴표 붙여줘야함 자스는 생략해도 붙여주는 기능이 있음  아이디는 겹치면 안된다. */


window.addEventListener("DOMContentLoaded", (event)=>{
    creatNoticeList();
});


creatNoticeList(); 

function creatNoticeList() {
    fetch("../data/notice.json")
        .then((result)=>result.json()) //이자리의 파라미터 값이 갖고오는 json데이터를 가리킴 //fetch 실행 결과 -> result(문자열) => json
        .then((jsonData) => {
            showNoticeList(jsonData.list);
    })


        .catch(error => console.log(error));
}//creatNoticeList 


/*******************
 * 
*******************/


function onChangeNoticeList(code) {
    alert(code);
    // 1. list 배열에서 code를 filtering 새로운 배열 반환  
    fetch("../data/notice.json")
        .then((result)=>result.json())
        .then((jsonData)=>{
            if(code === "total") {  //토탈이면 전부 가져와서 나타내고 아니라면 code랑 비교해서 해당하는 것만 필터링해서 보이게함
                showNoticeList(jsonData.list); 
            }else {
                let filterList = jsonData.list.filter((object) => object.code === code);   // [{},{}]   
                //json파일 속 배열의 코드 값을 가져와서 입력된 코드값이랑 순차적으로 비교
                showNoticeList(filterList); }
        // 2. 테이블 출력 코드 생성
        // 3. 화면 출력

        })
        .catch(error => console.log(error));


}


/*********** 
 *화면 출력 함수
*************/
function showNoticeList(list) {
    let output = `
    <thead>
            <tr>
                <th>번호</th>
                <th>구분</th>
                <th>제목</th>
                <th>등록일</th>
                <th>조회수</th>
            </tr>
    </thead>
    <tbody>
    `;


    //forEach => <tr>~<tr> ,반복구간
    list.forEach((notice, i)=>{
        output += `
            <tr>
                <td>${i+1}</td>
                <td>${notice.type}</td>
                <td><a href="#">${notice.title}</a></td>
                <td>${notice.date}</td>
                <td>${notice.hits}</td>
            </tr>
        `
    })

    output += `
    </tbody>
    <tfoot>
            <tr>
                <td colspan="5">1 2 3 4 5 >> </td>
            </tr>
    </tfoot>`;

    document.querySelector("table").innerHTML = output;
}
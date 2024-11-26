initForm();

function initForm() {
    let output = `
        <h1>KMDB API</h1>
        <div>
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

document.querySelector("#search").addEventListener('click', () => {
    let type = document.querySelector("#type")
    let typeValue = document.querySelector("#type_value")
    let title = document.querySelector("#title")
    if (type === ) {
        
    }
})  

}
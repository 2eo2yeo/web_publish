//.textcontent로 html데이터를 갖고올때와 .value로 데이터를 갖고올때의 차이 정리하기

//counter 증가/감소  - 따로있는 것을 합치기
function counter(flag) {
    let number = document.querySelector("#number").textContent; //같은장소에서 갖고오므로 공통부분 뽑아내기
    if (flag === 'increment') {
        document.querySelector("#number").textContent = ++number;
    } else {
        if(number > 0)
        document.querySelector("#number").textContent = --number;
    }
}


// counter 증가
function increment() {
    let number = document.querySelector("#number").textContent;  
    document.querySelector("#number").textContent = ++number;
                                // 넣을 곳을 지칭하고 = 값을 할당
}

//counter 감소
function decrement() {
    let number = document.querySelector("#number").textContent;  
    if(number > 0)
    document.querySelector("#number").textContent = --number;
}

import '../css/Avatar.css';

// 이형태로 부모 컴포넌트에서 객체가 넘어옴 
// props = {img:"/images/people1.webp"}
// 이미지 접근시 props.img

export default function AvatarImage({img}) {
    //구조분해 할당 - 오브젝트 안에 있는 것을 분해를 할거기때문에 블레이스로 감쌈
    // 구조분해할당시 넘어오는 객체의 키(부모에 있는 데이터)를 정확히 기재하여 호출
    //컴포넌트 함수이기 때문에 넘어오는 데이터는 파라미터로 받음
    return (
        <img src={img} className="avatar-img"></img>
    );
    
}
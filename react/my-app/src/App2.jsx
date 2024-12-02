import './App2.css';
import Avatar from './components/Avatar.jsx'
import AvatarList from './components/AvatarList.jsx';
/* 디폴트이므로 블레이져 없이 호출 가능 */

export default function App2 () {

     /* 객체형태로 데이터 넘기기 */
    const list = [
        {"img": "/images/people1.webp", "name":"smith" ,"age":"20"},
        {"img": "/images/people2.webp", "name":"james" ,"age":"30"},
        {"img": "/images/people3.webp", "name":"kally" ,"age":"19"},
    ];


        /* 기본형태로 데이터 넘기기 */
    return (
        <>
            <div className='container'>
                <Avatar img="/images/people1.webp" name="smith" age="20" />
                <Avatar img="/images/people2.webp" name="james" age="30" />
                <Avatar img="/images/people3.webp" name="kally" age="19"/>
                {/* 만들어진 컴포넌트는 태그명으로 사용하여 호출이 가능 */}
                {/* 컴포넌트의 값을 넘겨줄 때 속성을 통해서 넘겨주고 함수로 넘길 때 파라미터를 통해서 받는다 ->
                props : 파라미터의 값을 넘기는 방식, 오브젝트 리터럴 형태로 넘어감  */}
            </div>
            <AvatarList list = {list} name="홍길동" />
            {/* {list}는 위에서 선언한 변수이기때문에 블레이스로 감쌈 */}
        </>
            // 같이 감싸기 그럴땐 이름없는 태그로 감싸서 그룹핑
    ); 
}



import './Avatar.css';

// 이렇게 오브젝트 리터럴 형태로 넘어옴
// props = {
//     "img" : "/images/people1.webp"
//     "name" : "smith"
//     "age" : "20"
// }


export default function Avatar({name, img, age}) { 
    /* 구조분해 할당을 사용하여 받을 수 있고 코드를 줄일 수 있음 es6기반, 받을때는 순서는 상관이없고 넘어오는 데이터가 있기만 하면 됨 */

    return (
        <div className='avatar-container'>
            <img src= {img} className="avatar"/>
            <div>{name},{age}</div>
        </div>
    );
}

import '../css/Avatar.css';
import AvatarImage from './AvatarImage.jsx';

export default function Avatar({img, name}) {
    // 외부 데이터를 받아오고 싶으면 avatar를 호출하는 부모한테서 받으면 됨
    return (
        <div className='avatar-container'>
            <AvatarImage img={img} />
            <p>{name}</p>
        </div>
    )
}
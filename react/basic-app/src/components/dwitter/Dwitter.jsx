// import './Dwitter.css';

export default function Dwitter(props) {
/*     //내용이 많을 때에는 구조분해 할당보다는
    // props로 받아서 참조변수로 접근하는게 나음
    // 구조분해 할당시 ({img, name, id, date, content}) 이렇게 풀기  */
    return (
        <div className="dwitter" key={props.id}> {/* 기능엔 문제없는데 반복되는 키를 통합해주는 키가 필요 */}
            <div className="dwitter-image " >
                <img src={props.img} alt="image" />
            </div>
            <div className="title">
                <span>{props.name}</span>
                <span>{props.id}</span>
                <span>{props.date}</span>
            </div>
            <div className="content">{props.content}</div>
        </div>
    );
}
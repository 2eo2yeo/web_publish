import Avatar from "./Avatar";




// 이 형태로 넘어옴
// props = {
//     list :  
//     [{"img": "/images/people1.webp", "name":"smith" ,"age":"20"},
//     {"img": "/images/people2.webp", "name":"james" ,"age":"30"},
//     {"img": "/images/people3.webp", "name":"kally" ,"age":"19"}
//  ],
//   name: "홍길동"
// }


export default function AvatarList ({list}) {

/* 반복하여 리스트 한번에 호출하기 */
    return (
        <ul>
            {list.map((object) => 
                <li><Avatar img={object.img} name={object.name} age={object.age} /></li>
            )} 
        </ul>
    );
}
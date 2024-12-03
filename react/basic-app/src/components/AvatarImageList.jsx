
// {list:[~]} 로 넘어온 것을 구조 분해할당으로 분해

import AvatarImage from "./AvatarImage";

export default function AvatarImageList ({list}) {
    
    return(
        //ul 태그 이용해서 반복
            <ul>
                {list.map((object)=>
                <li><AvatarImage img={object.img}/></li>
                
                )}
            </ul>
    );
}
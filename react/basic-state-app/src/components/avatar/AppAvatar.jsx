
import Avatar from "./Avatar";
import './Avatar.css'

export default function AppAvatar() {
    
    const list = [
        {"img" : "images/people1.webp", "name" : "smith" , "isNew" : true},
        {"img" : "/images/people2.webp", "name" : "james"},
        {"img" : "/images/people3.webp", "name" : "kelly"}
    ]


    return(
        <div className='avatar-container'> 
            {list && list.map((item)=>
                <Avatar img={item.img} name={item.name} isNew={item.isNew} />
    )}
        </div>
    );
    
}
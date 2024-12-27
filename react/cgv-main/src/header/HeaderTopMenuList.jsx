import HeaderTopMenu  from "./HeaderTopMenu.jsx";
import { useState, useEffect } from "react";

export default function HeaderTopMenuList() {
    const [list, setList] = useState([]);
    useEffect(()=>{
        fetch("data/cgv_header.json")
            .then(data => data.json())
            .then(jsonData => setList(jsonData.topMenuList))
            .catch(error => console.log(error));
    },[]);

    // const list = [
    //         {"href":"#",
    //         "src":"https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png",
    //         "name":"로그인"},
    //         {"href":"#",
    //             "src":"https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png",
    //             "name":"회원가입"},
    //         {"href":"#",
    //             "src":"https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png",
    //             "name":"MYCGV"},
    //         {"href":"#",
    //             "src":"https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png",
    //             "name":"고객센터"},    
    //         ];

    return(
        <nav>
            <ul>
                {list && list.map((menu) => (
                    <li>
                        <HeaderTopMenu 
                            href={menu.href}
                            src={menu.src}
                            name={menu.name} />
                    </li>
                ))}
            </ul>
        </nav>
        
    );

}
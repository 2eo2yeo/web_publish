
import { useState, useEffect } from "react";


export default function FooterContent() {
    const [companyInfo, setCompanyInfo] = useState({});
    useEffect(()=>{
        fetch("data/cgv_compinfo.json")
            .then(data => data.json())
            .then(jsonData => setCompanyInfo(jsonData))
            .catch(error => console.log(error));
    }, []);

    return(
        <div class="footer-content">
        <div class="footer-intro">
            <ul>
                {/* useState를 사용하면 여기에들어가는 값을 react가 알아서 관리해줌 */}
                {companyInfo.list && companyInfo.list.map((item) =>    
                    <li><a href="#">{item.name}</a></li>
                )}
            </ul>
        </div>
        <p class="p">{companyInfo.address}</p>
        <p>{companyInfo.ceo}, 사업자등록번호 : 123-12-45678, 통신판매업신고번호 : 2017-서울용산</p>
        <p>호스팅사업자 : CJ올리브네트웍스, 대표이메일 :  cjcgvmaster@cj.net</p>
        <p class="p2">
            <a href="/cgv/admin/admin_main.html" target="_parent">@</a>
            CJ CGV.All Rights Reserved</p>
    </div>
    );

}
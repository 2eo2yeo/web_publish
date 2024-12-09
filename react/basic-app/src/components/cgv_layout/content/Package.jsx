import PackageContent from "./PackageContent";
import { useState, useEffect } from 'react';

export default function Package() {

    const [plist, setPlist] = useState([]);
    useEffect(()=>{
        fetch("/data/cgv_content.json")
        .then(data => data.json())
        .then(jsonData => setPlist(jsonData.packageList)) 
        .catch(error=>console.log(error));
    },[])
    
    return (
        <div className="content-event-special">
            <section className="package-content-list">
            {plist && plist.map(Object =>   /* plist가 있을 때만 출력하겠습니다. */
                            <PackageContent 
                            title={Object.title}
                            list = {Object.list} />  
            )}

        </section>
        </div>
    );

}
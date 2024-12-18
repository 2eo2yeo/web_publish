// import BoxOffice from './BoxOffice.jsx';
import { useEffect, useState } from 'react';
import BoxOffice from './BoxOffice';

export default function AppBoxOffice() {
    const [dailyBoxOffice, setDailyBoxOffice] = useState([]);

    useEffect(()=>{

        const key = `109a9287fde8058116adbf5e0b40fa00`;
        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20241203`;

        fetch(url)
            .then(data => data.json())
            .then(daily => setDailyBoxOffice(daily.boxOfficeResult.dailyBoxOfficeList))
            .catch(error => console.log(error)); 
    }, []);

    return (
        <>
            <h1>KOBIS BoxOffice</h1>
            <div className='title'>
                <BoxOffice
                    rank = "순위"
                    title = "제목"
                    openDt = "개봉일"
                    cnt = "당일관객수"
                    total = "누적관객수"
                    amt = "누적매출액"
                    type= "title"
                />
            </div>
            <div className='content'>
                    {/* 반복이되어지는부분 */}
                    {dailyBoxOffice.map(boxoffice => 
                    <div className='rank'>
                        <BoxOffice
                            rank = {boxoffice.rank}
                            title = {boxoffice.movieNm}
                            openDt = {boxoffice.openDt}
                            cnt = {boxoffice.audiCnt}
                            total = {boxoffice.audiAcc}
                            amt = {boxoffice.salesAmt}
                            type = "content"
                        />
                    </div>
                    )} 
            </div>

        </>
    );
}
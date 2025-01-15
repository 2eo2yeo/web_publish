import React, { useEffect, useState } from 'react';
import ProductAvata from './ProductAvata';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function ProductList() {

    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('data/products.json')
            .then((res) => { setList(res.data) })
            .catch((error) => console.log(error));
    }, []);

    // 출력 리스트 생성 [[{},{},{}], [{},{},{}] [{}]]
    const rows = [];
    for (let i = 0; i < list.length; i += 3) {    // [{0},{1},{2}] 
        rows.push(list.slice(i, i + 3)) // [{0},{1},{2}]
    }
    //slice를 통해 0~3번지까지 자르고 배열에 넣음
    // slice는자동으로 배열을 생성 



    return (
        <div>
            {/* 3개씩 2차원 배열을 통해서 돌린 코드*/}
            {rows.map((rowArray) =>
                <div className='product-list'>
                    {rowArray.map((product) =>
                        // 여기서 path 넘어가는 주소를 pid로 줌
                        // (상품마다 유니크한 코드 부여)
                        // 자바스크립트 코드가 들어가기때문에 블래이스 묶어주고 안에 탬플릿 리터럴을 사용함
                        //이 link 요청을 실행할 수 있는 route를 APP.JS에 추가하기ㄱㄱ 
                        <Link key={product.id} to={`/products/${product.pid}`} >
                            <ProductAvata img={product.image} />
                        </Link>
                    )
                    }
                </div>
            )}
        </div>
    );
}


import React, { useEffect, useState } from 'react';
import Product from './Product';



export default function ProductList({cart}) {

    const [productList ,setProductList] = useState([]);
    useEffect(()=>{
        fetch("/data/olive.json")
            .then(data => data.json())
            .then(jsonData => setProductList(jsonData))
            .catch()
    },[]);

    const totalCart = (id) => {
        // alert(`product list ${id} ::: 클릭!`);
        cart(id); //AppOlive의 handleCartApp 함수 호출
    }

    return (
        <ul className='product-list-container'>
            {productList && productList.map((item)=>
                <li>
                    <Product {...item} totalCart = {totalCart}
                            // img={item.img} 
                            // title={item.title} 
                            // description={item.description}
                            // fprice={item.fprice}
                            // sprice={item.sprice}
                            // isSale={item.isSale}
                            // isCupon={item.isCupon}
                            // isToday={item.isToday} 
                            />
                </li>
            )
        }
        </ul>
    );
}


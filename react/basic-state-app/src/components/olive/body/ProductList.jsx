import React, { useEffect, useState } from 'react';
import Product from './Product';



export default function ProductList({cart}) {

    const [productList ,setProductList] = useState([]); // 전체 상품 리스트
    const [list, setList] = useState([]); //출력용 리스트
    //바로 출력은 불가능 필터링 된것들은 다 없어짐;; 출력을 위한 중간 객체가 또 필요

    useEffect(()=>{
        fetch("/data/olive.json")
            .then(data => data.json())
            .then(jsonData => {
                setProductList(jsonData);
                setList(jsonData); 
            })
            .catch()
    },[]);

    const totalCart = (id) => {
        // alert(`product list ${id} ::: 클릭!`);
        cart(id); //AppOlive의 handleCartApp 함수 호출
        
    }

    const [type, setType] = useState("");
    
    
    const handleTypeChange = (event) => { //input에서 event라는 이름으로 객체를 받아왔음
        setType(event.target.value);
    } 

    console.log(type);


    //라디오 버튼 바뀔 때 useEffect 호출
    //타입이 바뀌면 필터링을 useEffect에서 한다.
    //값을 불러와서 필터링하는 방법임, json데이타에서 실시간으로 가지고오는 방법 또한 있는데
    // 여기서는 비효율적이므로 안씀
    useEffect(()=>{
        // productList에 있는 데이터를필터하기 
        // productList.filter() ---> 결과 : ['<li>~<li>',] 새로운 배열을 만듦
        // productList.map() ---> 결과 : [{item}, {item}] 새로운 배열을 만듦
        //filter가 돌면서 조건을 체크 // list는 필터링한 배열 객체를 할당한 것
        //item은? productList 안의 데이터는 olive.json의 객체 하나

        if(type === 'total') {
            setList(productList);
        } else {
            const list = productList.filter((item) => { 
                if(type === 'sale' && item.isSale) {  //isSale이 true인 것 
                    return item; //생성된 새로운 배열객체를 모두 리턴
                } else if(type === 'coupon' && item.isCoupon ) {
                    return item;
                } else if(type === 'today' && item.isToday ) {
                    return item;
                }
            });
        
        setList(list);
        
    }}, [type]);  //useEffect : type
    
    // console.log(list);
    // setProductList(list); 


    return (
        <>  
            <div>
                {/* name 속성을 동일하게 설정하면 라디오 버튼이 하나의 그룹으로 묶이게 되어 
                한 번에 하나의 버튼만 선택 가능하다. 각 버튼의 구분은 value 속성으로 설정한다.
                input의 경우 자체적으로 value값을 갖고있꼬 이벤트 발생한 경우 자체적으로 발생한 것을 
                함수한테 자동으로 이벤트 객체를 전송함 그래서 우리는 인풋타입의 이벤트로 얻어올 수 있음
                input 태그만의 특성임 */}

                <input type="radio" name="type" value="total" onClick={handleTypeChange}/>전체
                <input type="radio" name="type" value="sale" onClick={handleTypeChange}/>세일
                <input type="radio" name="type" value="coupon" onClick={handleTypeChange}/>쿠폰
                <input type="radio" name="type" value="today" onClick={handleTypeChange}/>오늘드림
            </div>
        
            <ul className='product-list-container'>
            {list && list.map((item)=>
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
        </>

    );
}


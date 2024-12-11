import React, { useState } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import MenuList from './header/MenuList';
import ProductList from './body/ProductList.jsx';

import './olive.css';


export default function AppOlive() {
    
    // const [id, setId] = useState('');   //전역변수로 id를 선언해줌 //초기화 할 때는 각각의 타입에 맞게 하기 여기서는 문자열이라 ''로 초기화 
    //배열에 id저장 하기 위해 = ---> 배열의 전체 길이가 늘어나면 ---> cartCount로 리턴을 해서 진행
    const [cartList, setCartList] = useState([]);
    

    const handleCartApp = (id) => { //App에서 관리하는 장바구니 관리 함수 -> productlist한테 넘겨줌
        // setId(id); //이 아이디를 위에서 전역으로 선언해줌
        setCartList([...cartList,id]); //set함수를 이용함 -> 리액트에서 권장하는 접근, 값을 원 함수에 직접적으로 넣을 수는 없다., cartList 에 들어가는 값을 대체하는 값 
        //스프레드연산자로 객체를 나열하고 id를 추가
        // cartList.push(id); //cartList 직접적인 접근, 알아서 배열을만들어서 값을 넣음 , 바로 객체에 엑세스, 권장x
        
    }

    console.log(`cartList ---> ${cartList}`); 
    

    return (
        <>
            <Header>
                <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png"/>
                <MenuList count={cartList.length}/> 
                {/* 카트버튼을 누를때마다 아이디를 배열로 차곡차곡저장되어 배열의 길이를 장바구니 옆에 표시 */}
            </Header>
            <Body>
                <ProductList cart = {handleCartApp} /> {/* 위의 함수를 자식컴포넌트에게 전달 */}
            </Body>
        </>
    );
}


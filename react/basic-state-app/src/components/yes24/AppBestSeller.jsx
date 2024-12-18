import React, { useEffect, useState } from 'react';
import BestBook from "./BestBook.jsx";
import MenuList from "./MenuList.jsx";
import Menu from "./Menu.jsx";
import './BestBook.css';
import './Menu.css';



export default function AppBestSeller() {

    const [menuList,setMenuList] = useState([]);
    const [bookList,setBookList] = useState([]);
    const [category,setCategory] = useState('total');

    useEffect(()=>{
        fetch('data/yes24.json')
        .then(data => data.json())
        .then(jsonData => {
                setMenuList(jsonData.menuList);
                if(category === 'total'){
                    setBookList(jsonData.bookList);
                } else {
                    //category 값에 따라 필터링 처리 후 setBookList에 추가
                    const filterBooks =
                        //[{book}, {book}]  book을 배열안에 넣어주는 것
                        jsonData.bookList.filter((book) => book.category === category);
                    setBookList(filterBooks);
                }
                })
        .catch(error => console.log(error));
    },[category]);
    //인터뷰 주의 : useEffect 재호출은 디펜던시를 활용하고 디펜던시에 들어가는 값은 useState로 관리해줘야한다.

    //AppBestSeller <-- MenuList <-- Menu 카테고리가 넘어옴
    const handleMenuClickReq2 = (category) => {
        setCategory(category);
    }

    console.log(category);
    

    return(
        <div className='container'>
            <MenuList list={menuList} click = {handleMenuClickReq2} />
            <BestBook list={bookList}/>
        </div>
    );
}


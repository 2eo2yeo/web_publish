import React, { useEffect, useState } from 'react';
import Book from './Book.jsx'

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [category, setCategory] = useState([]);
    const [type, setType] = useState('total') //초기값도 total
    const [selectCategory, setselectCategory] = useState('')

    useEffect(()=>{
        console.log(`selectCategory --> ${selectCategory}`);
        fetch("data/aladin.json")
            .then(data => data.json())
            .then(jsonData => {
                setCategory(jsonData.category);

                if(type === 'total') { //toal -> jsondata 전부 다 출력
                    setBooks(jsonData.books);
                } else { // 그 외에는 타입에 따라 바뀌기
                    //단일 조건이기에 블레이스도 생략 및 if안쓰고 한줄로 처리 중요
                    const filterBooks = jsonData.books.filter((book)=> book.type === type); 
                    setBooks(filterBooks); 
                }    
            })
            .catch(error => console.error(error));
    },[type, selectCategory]);  //디펜던시로 인해 type, selectCategory이 변화될때마다 실시간 업데이트 됨 

    const handleClick = (event) => {   //event객체 받기
        setType(event.target.value);
    }

    const handleChangeCategory = (event) => {
        setselectCategory(event.target.value);
        
    }

    return (
        <>
        <div>
            <input type="radio" name="type" value="total" onClick={handleClick}/>전체도서
            <input type="radio" name="type" value="domestic" onClick={handleClick}/>국내도서
            <input type="radio" name="type" value="overseas" onClick={handleClick}/>국외도서
            {/* 카테고리 데이터 반복 */}
            <select onChange={handleChangeCategory}>
                <option value="선택">선택</option>
                {/* selectbox는 하나기 때문에 onchange로 들어가야함  */}
                {category && category.map((item)=>  /* 외부에서 가지고오는 것은 &&붙이기 */ 
                <option value={item.name}>{item.name}</option>
                )}
            </select>
        </div>
            <ul style={{display:'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                {books && books.map(book => 
                <li style={{'list-style-type':'none'}}>
                    <Book img={book.img} title={book.title}/>
                </li>
                )}
            </ul>
        </>
    );
}


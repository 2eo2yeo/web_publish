//잘 정리하기 이 내용
import React, { useEffect, useState } from 'react';
import Book from '../aladin/Book.jsx'


export default function BookList2() {


    const [books, setBooks] = useState([]);
    //input 이벤트  
    const [type, setType] = useState('total');


    //관리하고 담을 도서 목록 가져오기
    useEffect(()=>{
        fetch('/data/aladin.json')
            .then(data => data.json())
            .then(jsonData => {
                if(type === 'total') {
                    setBooks(jsonData.books)
                } else {
                    //필터한 것을 저장하는 변수
                    const filterBooks 
                        = jsonData.books.filter(book=>book.type === type); 
                    setBooks(filterBooks);
                }
            })
            .catch(error => console.error(error));
    },[type]);  //디펜던시 -> type이 바뀌면 fetch명령어를 처음부터 다시실행하라




    
    const handleTypeClick = (event) => {
        setType(event.target.value);
    }

    return (
        <>
            <div>
                [{type}]
                <input type="radio" name="type" value="total" onClick={handleTypeClick} /> 전체도서
                <input type="radio" name="type" value="domestic" onClick={handleTypeClick} /> 국내도서
                <input type="radio" name="type" value="overseas" onClick={handleTypeClick} /> 국외도서
            </div>
            <div style={{display:'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                {books && books.map(book =>
                    <Book img={book.img} title={book.title} />
                )}
            </div>
        </>
    );
}



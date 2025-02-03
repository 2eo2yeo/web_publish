/*
    1. DB연동 라이브러리 호출 - DB 서버 주소, user, password, port
        mysql과 연동하기 위한 다리를 라이브러리로 만든다

*/

// 기존에 각각 처리하던 것을 여기서 한번에 처리하도록 한다.
// 대소문자 구분 필수


import mysql from 'mysql2';

    const pool = mysql.createPool({
        host: 'localhost', //mysql이 설치된 서버 ip 주소
        port: 3306, //mysql default port 
        user: 'root',
        password: 'mysql1234',
        database: 'hrdb2019',
    });


//다른 곳에서 쓰기위해 export
export const db = pool.promise();
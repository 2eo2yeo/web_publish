

/*
	실습 데이터베이스 연결 : myshop2019
	실습 내용 - 기본적인 데이터 조회 
*/
-- Q01) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from customer;
desc customer;

-- Q02) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from employee;
desc employee; 

-- Q03) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from product;
desc product;

-- Q04) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from order_header;
desc order_header;

-- Q05) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from order_detail;
desc order_detail;

-- Q06) 모든 고객의 아이디, 이름, 지역, 성별, 이메일, 전화번호를 조회하세요.
select customer_id, customer_name, city, gender, email, phone
	from customer;

-- Q07) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
select  employee_name, employee_id, gender, hire_date, phone
	from employee;

-- Q08) 이름이 '홍길동'인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
from customer
where customer_name = '홍길동';

-- Q09) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
from customer
where gender = 'f';

-- Q10) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
from customer
where city = '울산';

-- Q11) 포인트가 500,000 이상인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
from customer
where point >= '500,000';


-- Q12) 이름에 공백이 들어간 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
from customer
where customer_name like '% %';
-- 또는? <<물어보기

-- Q13) 전화번호가 010으로 시작하지 않는 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
from customer
where left(phone,3) != '010';
-- 또는 where phone not like '010%' 

-- Q14) 포인트가 500,000 이상 '서울' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
from customer
where point >= 500000 & city = '서울';


-- Q15) 포인트가 500,000 이상인 '서울' 이외 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
from customer
where point >= '500,000' & city != '서울';

-- Q16) 포인트가 400,000 이상인 '서울' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
from customer
where point >= 400000 & city = '서울'& gender = 'm';


-- Q17) '강릉' 또는 '원주' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.

select customer_name, customer_id, gender, city, phone, point 
from customer
where city = '강릉' or  city = '원주';
-- 또는 where city in ('강릉', '원주');

-- Q18) '서울' 또는 '부산' 또는 '제주' 또는 '인천' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
from customer
where city = '서울' or  city = '부산' or  city = '제주' or  city = '인천' ;
-- 또는 where city in('서울', '부산','제주','인천');

-- Q19) 포인트가 400,000 이상, 500,000 이하인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
from customer
where point >= '400,000' and point <= '500,000';
-- 또는 where point between 400000 and 500000;


-- Q20) 1990년에 출생한 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
SELECT customer_name, customer_id, gender, city, phone, BIRTH_DATE, POINT
	FROM CUSTOMER
    WHERE BIRTH_DATE between '1990-01-01' AND '1990-12-31';
-- 또는 where left(birth_date,4) = '1990';

-- Q21) 1990년에 출생한 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
SELECT customer_name, customer_id, gender, city, phone, BIRTH_DATE, POINT
	FROM CUSTOMER
    WHERE BIRTH_DATE between '1990-01-01' AND '1990-12-31' AND GENDER = 'F';
-- 또는 where left(birth_date,4) = '1990' and gender = 'f';

-- Q22) 1990년에 출생한 '대구' 또는 '경주' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
SELECT customer_name, customer_id, gender, city, phone, BIRTH_DATE, POINT
	FROM CUSTOMER
    WHERE BIRTH_DATE between '1990-01-01' AND '1990-12-31' AND GENDER = 'M' AND city IN('대구', '경주');
-- 또는 where left(birth_date,4) = '1990' and city in ('대구','경주');

-- Q23) 1990년에 출생한 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
--      단, 홍길동(gildong) 형태로 이름과 아이디를 묶어서 조회하세요.
SELECT CONCAT(customer_name, '(',customer_id,')'), gender, city, phone, BIRTH_DATE, POINT
	FROM CUSTOMER
    WHERE BIRTH_DATE between '1990-01-01' AND '1990-12-31' AND GENDER = 'M';
-- 또는 where left(birth_date,4) = '1990' and gender ='m';
-- 설명 : 화면상에 출력하기 때문에 () 형태로 나타나는건 컬럼리스트에서 적용해야한다.

-- Q24) 근무중인 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
SELECT EMPLOYEE_NAME, EMPLOYEE_ID, GENDER, PHONE, HIRE_DATE  
	FROM EMPLOYEE
	WHERE RETIRE_DATE IS NULL;

-- Q25) 근무중인 남자 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
SELECT EMPLOYEE_NAME, EMPLOYEE_ID, GENDER, PHONE, HIRE_DATE  
	FROM EMPLOYEE
	WHERE RETIRE_DATE IS NULL AND GENDER = 'M';

-- Q26) 퇴사한 직원의 이름, 사원번호, 성별, 전화번호, 입사일, 퇴사일를 조회하세요.
SELECT EMPLOYEE_NAME, EMPLOYEE_ID, GENDER, PHONE, HIRE_DATE, RETIRE_DATE  
	FROM EMPLOYEE
	WHERE RETIRE_DATE IS NOT NULL;

-- Q28) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 고객아이디를 기준으로 오름차순 정렬해서 조회하세요.
SELECT *
FROM order_header
where order_date between '2019-01-01' and '2019-01-07'
ORDER BY customer_ID ASC;
    
-- Q29) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 전체금액을 기준으로 내림차순 정렬해서 조회하세요.
SELECT ORDER_ID, customer_ID, EMPLOYEE_ID, ORDER_DATE, SUB_TOTAL, DELIVERY_FEE, TOTAL_DUE
 FROM order_header
 WHERE ORDER_DATE BETWEEN '2019-01-01' AND '2019-01-07'
ORDER BY TOTAL_DUE DESC;


-- Q30) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 사원번호를 기준으로 오름차순, 같은 사원번호는 주문일시를 기준으로 내림차순 정렬해서 조회하세요.
SELECT ORDER_ID, customer_ID, EMPLOYEE_ID, ORDER_DATE, SUB_TOTAL, DELIVERY_FEE, TOTAL_DUE
 FROM order_header
 WHERE ORDER_DATE BETWEEN '2019-01-01' AND '2019-01-07'
ORDER BY EMPLOYEE_ID ASC, ORDER_DATE DESC;


/**
	그룹함수
**/
SELECT * FROM CUSTOMER;

/** customer 테이블 사용 **/
-- Q01) 고객의 포인트 합을 조회하세요.
SELECT CONCAT(FORMAT(SUM(POINT),0),'점') 포인트합계
	FROM CUSTOMER;

-- Q02) '서울' 지역 고객의 포인트 합을 조회하세요.
SELECT CONCAT(FORMAT(SUM(POINT),0),'점') 포인트합계
	FROM CUSTOMER
    WHERE CITY = '서울';

-- 002-2) 
SELECT COUNT(*) 고객수, CONCAT(FORMAT(SUM(POINT),0),'점') 포인트합계
	FROM CUSTOMER
    WHERE CITY = '서울';
    
-- Q03) '서울' 지역 고객의 수를 조회하세요. + 고객수 카운트, 포인트 평균
SELECT CITY, COUNT(*) 고객수
	FROM CUSTOMER
    WHERE CITY = '서울';

-- Q04) '서울' 지역 고객의 포인트 합과 평균을 조회하세요.
SELECT COUNT(*) 고객수, 
		CONCAT(FORMAT(SUM(POINT),0),'점') 포인트합계,
        CONCAT(FORMAT(AVG(POINT),0),'점') 포인트평균,
        CONCAT(FORMAT(MAX(POINT),0),'점') 최대값
	FROM CUSTOMER
    WHERE CITY = '서울';	
    
-- Q05) '서울' 지역 고객의 포인트 합, 평균, 최댓값, 최솟값을 조회하세요.
SELECT COUNT(*) 고객수, 
		CONCAT(FORMAT(SUM(POINT),0),'점') 포인트합계,
        CONCAT(FORMAT(AVG(POINT),0),'점') 포인트평균,
        CONCAT(FORMAT(MAX(POINT),0),'점') 최대값,
        CONCAT(FORMAT(MIN(POINT),0),'점') 최솟값
	FROM CUSTOMER
    WHERE CITY = '서울';

-- Q06) 남녀별 고객의 수를 조회하세요.
SELECT GENDER, COUNT(*) 고객수
	FROM CUSTOMER
	GROUP BY GENDER;
-- 설명 : ~별 -> 무조건 GROUP BY 
-- GROUP BY에 추가가되어있는 컬럼은 넣어도 오류가 안난다.

-- Q07) 지역별 고객의 수를 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
SELECT CITY, COUNT(CITY) AS COUNT
	FROM CUSTOMER
	GROUP BY CITY
	ORDER BY CITY ASC;
 
-- Q08) 지역별 고객의 수를 조회하세요.
--      단, 고객의 수가 10명 이상인 행만 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
SELECT CITY, COUNT(CITY) AS COUNT
	FROM CUSTOMER
	GROUP BY CITY
    HAVING COUNT >= 10
	ORDER BY CITY ASC;
 
-- Q09) 남녀별 포인트 합을 조회하세요.
SELECT GENDER, 
	CONCAT(COUNT(GENDER), '명') COUNT,
	CONCAT(FORMAT(SUM(POINT),0),'점') 'TOTAL POINT'
	FROM CUSTOMER
    GROUP BY GENDER;
-- 또는 
SELECT CASE GENDER 
	WHEN 'F' THEN '여자'
    ELSE '남자'
    END AS GENDER,
    COUNT(GENDER) COUNT,
    CONCAT(FORMAT(SUM(POINT),0),'점') 'TOTAL POINT'
    FROM CUSTOMER
    GROUP BY GENDER;
    
-- Q10) 지역별 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
SELECT CITY, CONCAT(FORMAT(IFNULL(SUM(POINT),0),0),'점') 포인트합계
	FROM CUSTOMER
    GROUP BY CITY
    ORDER BY CITY;

-- Q11) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합이 1,000,000 이상인 행만 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
SELECT CITY, CONCAT(FORMAT(SUM(POINT),0),'점') 포인트합계
	FROM CUSTOMER
    GROUP BY CITY
		HAVING SUM(POINT) >= 1000000 
    ORDER BY SUM(POINT) DESC;

      
-- Q12) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
  SELECT CITY, CONCAT(FORMAT(SUM(POINT),0),'점') 포인트합계
	FROM CUSTOMER
    GROUP BY CITY
    ORDER BY SUM(POINT) DESC; 


-- Q13) 지역별 고객의 수, 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
  SELECT CITY, COUNT(CITY) 고객수, CONCAT(FORMAT(IFNULL(SUM(POINT),0),0),'점') 포인트합계
	FROM CUSTOMER
    GROUP BY CITY
    ORDER BY CITY; 

-- Q14) 지역별 포인트 합, 포인트 평균(소숫점 1자리)을 조회하세요.
--      단, 포인트가 NULL이 아닌 고객을 대상으로 하며, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
SELECT CITY,
	CONCAT(FORMAT(IFNULL(SUM(POINT),0),0),'점') 포인트합계,
	CONCAT(FORMAT(IFNULL(AVG(POINT),1),0),'점') 포인트평균
    FROM CUSTOMER
		WHERE POINT IS NOT NULL
    GROUP BY CITY
    ORDER BY CITY;

-- Q15) '서울', '부산', '대구' 지역 고객의 지역별, 남녀별 포인트 합과 평균을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순, 같은 지역은 성별을 기준으로 오름차순 정렬해서 조회하세요.
SELECT CITY,
	GENDER,
	CONCAT(FORMAT(IFNULL(SUM(POINT),0),0),'점') 포인트합계,
	CONCAT(FORMAT(IFNULL(AVG(POINT),0),0),'점') 포인트평균
     FROM CUSTOMER
		WHERE CITY IN('서울','부산','대구')
	GROUP BY CITY, GENDER
	ORDER BY CITY ASC, GENDER ASC;


/** *****************************
		order_header 테이블 사용 
*******************************/
-- 데이터 조회
SELECT LEFT(ORDER_DATE,4), COUNT(*)
	FROM ORDER_HEADER
    GROUP BY LEFT(ORDER_DATE,4);
    
SELECT *
	FROM ORDER_HEADER;

-- Q16) 2019년 1월 주문에 대하여 고객아이디별 전체금액 합을 조회하세요.
	SELECT CUSTOMER_ID, SUM(TOTAL_DUE) SUM
		FROM ORDER_HEADER
        WHERE LEFT(ORDER_DATE, 7) = '2019-01'
		GROUP BY CUSTOMER_ID WITH ROLLUP;


-- 또는
	SELECT IF(GROUPING(CUSTOMER_ID), '총합계',
		IFNULL(CUSTOMER_ID, '-')) CID,
        SUM(TOTAL_DUE), AVG(TOTAL_DUE)
        FROM ORDER_HEADER
        GROUP BY CUSTOMER_ID WITH ROLLUP;

-- Q17) 주문연도별 전체금액 합계를 조회하세요.
	SELECT LEFT(ORDER_DATE,4) 주문연도, COUNT(*), CONCAT(FORMAT(SUM(TOTAL_DUE),0),'원') 
		FROM ORDER_HEADER
        GROUP BY 주문연도;

-- Q18) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합을 조회하세요.
-- 설명 : 그룹 바이 기준은 연도별 월별로 들어가기
SELECT LEFT(ORDER_DATE,4) 주문연도,
		SUBSTRING(ORDER_DATE,6,2) 월별주문,
        SUM(TOTAL_DUE) 전체금액
FROM ORDER_HEADER
WHERE LEFT(ORDER_DATE,7) BETWEEN '2019-01' AND '2019-06'
GROUP BY 주문연도, 월별주문;


-- Q19) 2018.01 ~ 2018.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합과 평균을 조회하세요.
SELECT SUBSTRING(ORDER_DATE,1,4) 주문연도,
		SUBSTRING(ORDER_DATE,6,2) 월별주문,
        SUM(TOTAL_DUE) 전체금액,
        AVG(TOTAL_DUE) 평균금액
FROM ORDER_HEADER
WHERE LEFT(ORDER_DATE,7) BETWEEN '2018-01' AND '2018-06'
GROUP BY 주문연도, 월별주문;

-- Q20) 주문연도별, 주문월별 전체금액 합과 평균을 조회하고, rollup 함수를 이용하여 소계와 총계를 출력해주세요.
-- 서브쿼리를 이용하기 

SELECT IF(GROUPING(YEAR),'년도별 총합계', IFNULL(YEAR,'-')) AS YEAR,
		IF(GROUPING(MONTH), '월별 총합계', IFNULL(MONTH, '-')) AS MONTH,
        COUNT(*) COUNT, 
        SUM(TOTAL_DUE) SUM, 
        AVG(TOTAL_DUE) AVG 
FROM (SELECT SUBSTRING(ORDER_DATE,1,4) YEAR, 
				SUBSTRING(ORDER_DATE,6,2) MONTH, 
                TOTAL_DUE
		FROM ORDER_HEADER) T1
GROUP BY YEAR, MONTH WITH ROLLUP;


/**
	테이블 조인
*/
-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문수량, 주문일시, 전체금액을 조회하세요.

-- 수량 확인 
SELECT COUNT(*)
	FROM ORDER_HEADER OH, ORDER_DETAIL OD
    WHERE OH.ORDER_ID = OD.ORDER_ID
    AND TOTAL_DUE >= 8500000;

-- 조인 1
SELECT DISTINCT OH.ORDER_ID, 
	OH.CUSTOMER_ID, 
    OH.EMPLOYEE_ID, 
    OD.ORDER_QTY, 
    OH.TOTAL_DUE 
FROM ORDER_HEADER OH, ORDER_DETAIL OD
WHERE OH.ORDER_ID = OD.ORDER_ID
    AND OH.TOTAL_DUE >= 8500000;

-- 조인 2 -> 속도가 더 빠른 쿼리, 
SELECT DISTINCT OH.ORDER_ID, 
	OH.CUSTOMER_ID, 
    OH.EMPLOYEE_ID, 
    OD.ORDER_QTY, 
    OH.TOTAL_DUE 
FROM ORDER_DETAIL OD,
	(SELECT ORDER_ID, CUSTOMER_ID, EMPLOYEE_ID, ORDER_DATE, TOTAL_DUE
		FROM ORDER_HEADER
		WHERE TOTAL_DUE >= 8500000) OH 
WHERE OD.ORDER_ID = OH.ORDER_ID;

-- 25/01/10에 한 것
-- ORDER_HEADER 테이블 : ORDER_ID, CUSTOMER_ID, EMPLOYEE_ID, ORDER_DATE, TOTAL_DUE
SELECT COUNT(*) FROM ORDER_HEADER; -- 903 ROW 
SELECT  COUNT(*) FROM ORDER_HEADER WHERE TOTAL_DUE >= 8500000; -- 7ROW 
SELECT ORDER_ID,
		CUSTOMER_ID,
        EMPLOYEE_ID, 
        ORDER_DATE,
        TOTAL_DUE
FROM ORDER_HEADER
WHERE TOTAL_DUE >= 8500000
ORDER BY TOTAL_DUE DESC;

-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.

SELECT  ORDER_ID,
		O.CUSTOMER_ID,
        CUSTOMER_NAME,
        EMPLOYEE_ID, 
        ORDER_DATE,
        TOTAL_DUE
FROM ORDER_HEADER O, CUSTOMER C
WHERE O.CUSTOMER_ID = C.CUSTOMER_ID
	AND TOTAL_DUE >= 8500000
ORDER BY TOTAL_DUE DESC;

-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
SELECT DISTINCT OH.ORDER_ID, 
		OH.CUSTOMER_ID,
        OH.EMPLOYEE_ID,
        E.EMPLOYEE_NAME,
        OD.ORDER_QTY,
        OH.TOTAL_DUE
	FROM ORDER_HEADER OH, EMPLOYEE E, ORDER_DETAIL OD
	WHERE OH.EMPLOYEE_ID = E.EMPLOYEE_ID
		AND OH.ORDER_ID = OD.ORDER_ID
		AND OH.TOTAL_DUE >= 8500000;

-- 25/01/10에 한 것
SELECT  O.ORDER_ID,
		O.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        E.EMPLOYEE_NAME,
        O.EMPLOYEE_ID, 
        O.ORDER_DATE,
        O.TOTAL_DUE
FROM ORDER_HEADER O, CUSTOMER C, EMPLOYEE E
WHERE O.CUSTOMER_ID = C.CUSTOMER_ID
	AND O.EMPLOYEE_ID = E.EMPLOYEE_ID
	AND TOTAL_DUE >= 8500000
ORDER BY TOTAL_DUE DESC;


-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
SELECT DISTINCT OH.ORDER_ID, 
		OH.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        OH.EMPLOYEE_ID,
        E.EMPLOYEE_NAME,
        OD.ORDER_QTY,
        OH.TOTAL_DUE
	FROM ORDER_HEADER OH, EMPLOYEE E, ORDER_DETAIL OD, CUSTOMER C
	WHERE OH.EMPLOYEE_ID = E.EMPLOYEE_ID
		AND OH.ORDER_ID = OD.ORDER_ID
        AND OH.CUSTOMER_ID = C.CUSTOMER_ID
		AND OH.TOTAL_DUE >= 8500000;

-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
SELECT DISTINCT OH.ORDER_ID, 
		OH.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        OH.EMPLOYEE_ID,
        E.EMPLOYEE_NAME,
        OD.ORDER_QTY,
        OH.TOTAL_DUE,
        C.CITY
	FROM ORDER_HEADER OH, EMPLOYEE E, ORDER_DETAIL OD, CUSTOMER C
	WHERE OH.EMPLOYEE_ID = E.EMPLOYEE_ID
		AND OH.ORDER_ID = OD.ORDER_ID
        AND OH.CUSTOMER_ID = C.CUSTOMER_ID
		AND OH.TOTAL_DUE >= 8500000
        AND C.CITY = '서울';
        
     



SELECT  O.ORDER_ID,
		O.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        E.EMPLOYEE_NAME,
        O.EMPLOYEE_ID, 
        O.ORDER_DATE,
        O.TOTAL_DUE,
        C.CITY
FROM ORDER_HEADER O, CUSTOMER C, EMPLOYEE E
WHERE O.CUSTOMER_ID = C.CUSTOMER_ID
	AND O.EMPLOYEE_ID = E.EMPLOYEE_ID
	AND TOTAL_DUE >= 8500000
	AND C.CITY = '서울'
ORDER BY TOTAL_DUE DESC;


   

-- ANSI SQL 기준으로 변경
SELECT  O.ORDER_ID,
		O.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        E.EMPLOYEE_NAME,
        O.EMPLOYEE_ID, 
        O.ORDER_DATE,
        O.TOTAL_DUE,
        C.CITY
FROM ORDER_HEADER O INNER JOIN CUSTOMER C 
					INNER JOIN EMPLOYEE E 
	ON O.CUSTOMER_ID = C.CUSTOMER_ID
	AND O.EMPLOYEE_ID = E.EMPLOYEE_ID   -- 다 INNNER JOIN이라 한번에 조건 묶는 것이 가능 
/* 또는 아래도 가능
FROM ORDER_HEADER O INNER JOIN CUSTOMER C ON O.CUSTOMER_ID = C.CUSTOMER_ID
					INNER JOIN EMPLOYEE E ON O.EMPLOYEE_ID = E.EMPLOYEE_ID*/
WHERE TOTAL_DUE >= 8500000
	AND C.CITY = '서울'
ORDER BY TOTAL_DUE DESC;


-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
SELECT DISTINCT OH.ORDER_ID, 
		OH.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        OH.EMPLOYEE_ID,
        E.EMPLOYEE_NAME,
        OD.ORDER_QTY,
        OH.TOTAL_DUE,
        C.CITY,
        C.GENDER
	FROM ORDER_HEADER OH, EMPLOYEE E, ORDER_DETAIL OD, CUSTOMER C
	WHERE OH.EMPLOYEE_ID = E.EMPLOYEE_ID
		AND OH.ORDER_ID = OD.ORDER_ID
        AND OH.CUSTOMER_ID = C.CUSTOMER_ID
		AND OH.TOTAL_DUE >= 8500000
        AND C.CITY = '서울'
        AND C.GENDER = 'F';

-- 250110 
SELECT  O.ORDER_ID,
		O.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        E.EMPLOYEE_NAME,
        O.EMPLOYEE_ID, 
        O.ORDER_DATE,
        O.TOTAL_DUE,
        C.CITY,
        C.GENDER
FROM ORDER_HEADER O, CUSTOMER C, EMPLOYEE E
WHERE O.CUSTOMER_ID = C.CUSTOMER_ID
	AND O.EMPLOYEE_ID = E.EMPLOYEE_ID
	AND TOTAL_DUE >= 8500000
	AND C.CITY = '서울'
    AND C.GENDER = 'M'
ORDER BY TOTAL_DUE DESC;


-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.

-- 테이블 컬럼명 변경
DESC ORDER_DETAIL; 
ALTER TABLE ORDER_DETAIL
	RENAME COLUMN drder_detail_id TO order_detail_id;
    
-- ORACLE 방식 
SELECT ORDER_ID, PRODUCT_ID, ORDER_QTY, UNIT_PRICE, LINE_TOTAL
	FROM ORDER_DETAIL;

-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
SELECT  OD.ORDER_ID, 
		OD.ORDER_DETAIL_ID,
		OD.PRODUCT_ID, 
        PD.PRODUCT_NAME,
        OD.ORDER_QTY, 
		OD.UNIT_PRICE, 
        OD.LINE_TOTAL
	FROM ORDER_DETAIL OD, PRODUCT PD
    WHERE OD.PRODUCT_ID = PD.PRODUCT_ID;
		
-- ANSI
SELECT  OD.ORDER_ID, 
		OD.ORDER_DETAIL_ID,
		PD.PRODUCT_ID, 
        PD.PRODUCT_NAME,
        OD.ORDER_QTY, 
		OD.UNIT_PRICE, 
        OD.LINE_TOTAL
	FROM ORDER_DETAIL OD INNER JOIN PRODUCT PD ON OD.PRODUCT_ID = PD.PRODUCT_ID;




		

-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
DESC PRODUCT;

SELECT COUNT(*) FROM PRODUCT; -- 41
SELECT PRODUCT_ID,
		PRODUCT_NAME,
        SUB_CATEGORY_ID
FROM PRODUCT;



-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
-- ORACLE 
SELECT COUNT(*) FROM PRODUCT; -- 41

SELECT P.PRODUCT_ID,
		P.PRODUCT_NAME,
        P.SUB_CATEGORY_ID,
		SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID 
FROM PRODUCT P, SUB_CATEGORY SC
WHERE P.SUB_CATEGORY_ID = SC.SUB_CATEGORY_ID;

-- ANSI
SELECT P.PRODUCT_ID,
		P.PRODUCT_NAME,
        P.SUB_CATEGORY_ID,
		SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID 
FROM PRODUCT P INNER JOIN SUB_CATEGORY SC ON P.SUB_CATEGORY_ID = SC.SUB_CATEGORY_ID;


-- 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 대분류 이름 추가해서 조회 
SELECT DISTINCT P.PRODUCT_ID,
		P.PRODUCT_NAME,
        P.SUB_CATEGORY_ID,
		SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID,
        C.CATEGORY_NAME
FROM PRODUCT P, SUB_CATEGORY SC, CATEGORY C
WHERE P.SUB_CATEGORY_ID = SC.SUB_CATEGORY_ID
	AND SC.CATEGORY_ID = C.CATEGORY_ID ;

-- ANSI 
SELECT P.PRODUCT_ID,
		P.PRODUCT_NAME,
        P.SUB_CATEGORY_ID,
		SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID,
        C.CATEGORY_NAME
FROM PRODUCT P INNER JOIN SUB_CATEGORY SC ON P.SUB_CATEGORY_ID = SC.SUB_CATEGORY_ID
				INNER JOIN CATEGORY C ON SC.CATEGORY_ID = C.CATEGORY_ID;
                
-- 대분류, 소분류 별 상품갯수, 총상품가격 합계, 상품가격 평균을 조회하라
-- 접근 :
-- SELECT 대분류, 소분류, 상품갯수, 총상품가격 합계, 상품가격 평균
-- FROM (상품, 소분류, 대분류 테이블 조인 결과 - 위에서 작성한 쿼리) 별칭
-- GROUP BY 대분류, 소분류;

SELECT CATEGORY_NAME 대분류,
		SUB_CATEGORY_NAME 소분류,
        COUNT(PRODUCT_ID) 상품갯수,
        SUM(UNIT_PRICE) 총상품가격합계,
        AVG(UNIT_PRICE) 총상품가격평균
FROM ( SELECT DISTINCT P.PRODUCT_ID,
		P.PRODUCT_NAME,
        P.SUB_CATEGORY_ID,
		SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID,
        C.CATEGORY_NAME,
        OD.UNIT_PRICE
FROM PRODUCT P, SUB_CATEGORY SC, CATEGORY C, ORDER_DETAIL OD
WHERE P.SUB_CATEGORY_ID = SC.SUB_CATEGORY_ID
	AND SC.CATEGORY_ID = C.CATEGORY_ID
	AND P.PRODUCT_ID = OD.PRODUCT_ID
		) T1
GROUP BY CATEGORY_NAME, SUB_CATEGORY_NAME;  


-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
-- EMPLOYEE, ORDER_HEADER, ORDER_DETAIL, PRODUCT
SELECT E.EMPLOYEE_NAME,
        OH.ORDER_DATE,
        P.PRODUCT_NAME,
        OH.ORDER_ID,
        OD.ORDER_DETAIL_ID
FROM EMPLOYEE E, ORDER_HEADER OH, ORDER_DETAIL OD, PRODUCT P
WHERE E.EMPLOYEE_ID = OH.EMPLOYEE_ID
	AND OH.ORDER_ID = OD.ORDER_ID
    AND OD.PRODUCT_ID = P.PRODUCT_ID
    AND E.EMPLOYEE_NAME = '다정한'
    AND LEFT(OH.ORDER_DATE,4) = '2019';
    
-- 2019년도 1월 주문아이디별 다정한 사원의 주문건수 조회
-- 접근 : 주문 아이디별 그루핑
SELECT ORDER_ID, COUNT(ORDER_ID)
	FROM (
	   SELECT E.EMPLOYEE_NAME,
        OH.ORDER_DATE,
        P.PRODUCT_NAME,
        OH.ORDER_ID,
        OD.ORDER_DETAIL_ID
			FROM EMPLOYEE E, ORDER_HEADER OH, ORDER_DETAIL OD, PRODUCT P
			WHERE E.EMPLOYEE_ID = OH.EMPLOYEE_ID
				AND OH.ORDER_ID = OD.ORDER_ID
				AND OD.PRODUCT_ID = P.PRODUCT_ID
				AND E.EMPLOYEE_NAME = '다정한'
                AND LEFT(OH.ORDER_DATE,7) = '2019-01'
                ) T1 
GROUP BY ORDER_ID;                -- 서브쿼리로 가져온 결과를 그루핑진행 하는 것


-- 주문년도별, 주문월별, 주문아이디별 다정한 사원의 주문건수 조회			
-- 2019년도만 조회 -- HAVING 사용

SELECT LEFT(ORDER_DATE,4) AS YEAR, 
		SUBSTRING(ORDER_DATE,6,2) AS MONTH,
        COUNT(ORDER_ID) 아이디별주문
	FROM (
	   SELECT E.EMPLOYEE_NAME,
        OH.ORDER_DATE,
        P.PRODUCT_NAME,
        OH.ORDER_ID,
        OD.ORDER_DETAIL_ID
			FROM EMPLOYEE E, ORDER_HEADER OH, ORDER_DETAIL OD, PRODUCT P
			WHERE E.EMPLOYEE_ID = OH.EMPLOYEE_ID
				AND OH.ORDER_ID = OD.ORDER_ID
				AND OD.PRODUCT_ID = P.PRODUCT_ID
				AND E.EMPLOYEE_NAME = '다정한'
                ) T1 
GROUP BY LEFT(ORDER_DATE,4), SUBSTRING(ORDER_DATE,6,2)
HAVING YEAR = '2019' AND MONTH;   -- 별칭 사용해서 별칭으로 조건 안주면 에러


-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.

SELECT ROW_NUMBER() OVER(ORDER BY OH.ORDER_DATE DESC) AS NO,
				OH.CUSTOMER_ID, 
                OH.EMPLOYEE_ID, 
                OH.ORDER_ID, 
                OH.ORDER_DATE, 
                P.PRODUCT_NAME
FROM ORDER_HEADER OH, ORDER_DETAIL OD, PRODUCT P
WHERE OH.ORDER_ID = OD.ORDER_ID
	AND OD.PRODUCT_ID = P.PRODUCT_ID
	AND PRODUCT_NAME LIKE '%청소기%';


/**
	서브쿼리
*/
-- Q13) 'mtkim', 'soyoukim' 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.  
SELECT ORDER_ID, CUSTOMER_ID, ORDER_DATE, TOTAL_DUE
FROM ORDER_HEADER
WHERE CUSTOMER_ID IN('mtkim','soyoukim');


-- 김마트, 김소유 고객의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요. 
SELECT ORDER_ID, CUSTOMER_ID, ORDER_DATE, TOTAL_DUE
FROM ORDER_HEADER 
WHERE CUSTOMER_ID IN( SELECT CUSTOMER_ID 
						FROM CUSTOMER WHERE CUSTOMER_NAME IN ('김마트', '김소유'));
							-- 서브쿼리 : 김마트, 김소유 고객의 아이디를 가져오는 쿼리

-- Q14) '전주' 지역 고객의 아이디, 고객명, 고객 생일을 조회하세요.
SELECT CUSTOMER_ID, CUSTOMER_NAME, BIRTH_DATE
FROM CUSTOMER
WHERE CITY = '전주';

-- '전주' 지역 고객이 주문한 주문 상품의 주문번호를 조회 
SELECT * 
FROM ORDER_HEADER
WHERE CUSTOMER_ID IN (
		SELECT CUSTOMER_ID FROM CUSTOMER WHERE CITY = '전주');

-- Q15) 위 두 쿼리문을 조합해서 하위 쿼리를 사용해 '전주' 지역 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
-- 만약 고객명을 함께 출력하고자 한다면, ORDER_HEADER & CUSTOMER 조인해야 함
SELECT ORDER_ID, CUSTOMER_ID, ORDER_DATE, TOTAL_DUE
FROM ORDER_HEADER
WHERE CUSTOMER_ID IN (
		SELECT CUSTOMER_ID FROM CUSTOMER WHERE CITY = '전주');

-- Q16) 고객의 포인트 최댓값을 조회하세요.
SELECT MAX(POINT) FROM CUSTOMER;


-- Q17) 하위 쿼리를 사용해 가장 포인트가 많은 고객의 이름, 아이디, 등록일, 포인트를 조회하세요.
SELECT CUSTOMER_NAME, 
		CUSTOMER_ID,
		REGISTER_DATE,
		POINT
FROM CUSTOMER
WHERE POINT = (SELECT MAX(POINT) FROM CUSTOMER);
				-- 서브쿼리 : 가장 포인트가 많은 값

-- Q18) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하세요.
SELECT CUSTOMER_NAME,
		CUSTOMER_ID, 
        REGISTER_DATE,
		POINT
FROM CUSTOMER
WHERE POINT > (SELECT MAX(POINT) FROM CUSTOMER WHERE CUSTOMER_NAME='홍길동'); 
			-- 서브쿼리 : 홍길동 사원의 포인트


-- Q19) 하위 쿼리를 사용해 홍길동(gdhong) 고객과 같은 지역의 고객 이름, 아이디, 지역, 등록일, 포인트를 조회하세요.
--      단, 고객 이름을 기준으로 오름차순 정렬해서 조회하세요.

SELECT CUSTOMER_NAME,
		CUSTOMER_ID, 
        REGISTER_DATE,
		POINT,
        CITY
FROM CUSTOMER
WHERE CITY = (SELECT CITY FROM CUSTOMER WHERE CUSTOMER_NAME='홍길동') 
			-- 서브쿼리 : 홍길동 사원의 지역
ORDER BY CUSTOMER_NAME;
            
-- Q20) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하고, 행번호를 추가하여 출력하세요.

SELECT 	ROW_NUMBER() OVER(ORDER BY POINT DESC) AS NO,
		CUSTOMER_NAME,
		CUSTOMER_ID, 
        REGISTER_DATE,
		POINT
FROM CUSTOMER
WHERE POINT > (SELECT MAX(POINT) FROM CUSTOMER WHERE CUSTOMER_NAME='홍길동'); 
			-- 서브쿼리 : 홍길동 사원의 포인트



-- 2016 ~ 2017년도 까지 주문한 고객의 아이디, 고객명, 주문번호, 주문총금액을 조회


SELECT COUNT(*) FROM ORDER_HEADER; -- 903 
SELECT COUNT(*) FROM ORDER_HEADER2016; -- 596 
SELECT COUNT(*) FROM ORDER_HEADER2017; -- 561 

-- 구조 동일한지 확인
DESC ORDER_HEADER; 
DESC ORDER_HEADER2016;
DESC ORDER_HEADER2017;

-- UNION ALL 후 합친 테이블의 전체 갯수 확인
SELECT COUNT(*)
FROM (SELECT * FROM ORDER_HEADER
		UNION ALL
		SELECT * FROM ORDER_HEADER2016
		UNION ALL
		SELECT * FROM ORDER_HEADER2017) T1 ;

-- UNION ALL 
SELECT T1.CUSTOMER_ID, C.CUSTOMER_NAME, T1.ORDER_ID, T1.TOTAL_DUE
FROM 	CUSTOMER C, 
		(SELECT * FROM ORDER_HEADER
		UNION ALL
		SELECT * FROM ORDER_HEADER2016
		UNION ALL
		SELECT * FROM ORDER_HEADER2017) T1
WHERE C.CUSTOMER_ID = T1.CUSTOMER_ID;
        
-- 연도별 주문 건수, 총판매합계 연도기준 오름차순 정렬
-- 년도 : YEAR, 건수 : COUNT, 합계 : SUM 
-- '년도', '건', 3자리구분, '만원'
SELECT CONCAT(LEFT(ORDER_DATE, 4),'년도') YEAR, 
		CONCAT(COUNT(ORDER_ID),'건') COUNT, 
        CONCAT(FORMAT(SUM(TOTAL_DUE),0),'만원') SUM
FROM 	CUSTOMER C, 
		(SELECT * FROM ORDER_HEADER
		UNION ALL
		SELECT * FROM ORDER_HEADER2016
		UNION ALL
		SELECT * FROM ORDER_HEADER2017) T1 -- 작동 방식 : 서브쿼리인 인라인뷰가 맨처음 실행됨
WHERE C.CUSTOMER_ID = T1.CUSTOMER_ID
GROUP BY YEAR
ORDER BY YEAR ASC;
        
-- VIEW를 이용하여 ORDER_HEADER_TOTAL (2016~2019)
SELECT *
	FROM INFORMATION_SCHEMA.VIEWS
    WHERE TABLE_SCHEMA = 'MYSHOP2019';

-- VIEW 생성
CREATE VIEW ORDER_HEADER_TOTAL
AS
SELECT * FROM ORDER_HEADER
		UNION ALL
		SELECT * FROM ORDER_HEADER2016
		UNION ALL
		SELECT * FROM ORDER_HEADER2017;
        
-- VIEW를 이용하여 조회하는 쿼리
SELECT CONCAT(LEFT(ORDER_DATE, 4),'년도') YEAR, 
		CONCAT(COUNT(ORDER_ID),'건') COUNT, 
        CONCAT(FORMAT(SUM(TOTAL_DUE),0),'만원') SUM
FROM 	CUSTOMER C, 
		ORDER_HEADER_TOTAL T1
WHERE C.CUSTOMER_ID = T1.CUSTOMER_ID
GROUP BY YEAR
ORDER BY YEAR ASC;

-- 다정한 사원 예제 VIEW 변경
-- 기존 쿼리는 ORDER_DETAIL2019의 내용만 있음 2016, 2017 파일도 사용할 수 있도록 변경
-- 2016 ~ 2019 : ORDER_HEADER_TOTAL (VIEW)
-- 2016 ~ 2019 DETAIL : ORDER_DETAIL_TOTAL(VIEW) 

-- 갯수확인
SELECT COUNT(*) FROM ORDER_DETAIL; -- 2425
SELECT COUNT(*) FROM ORDER_DETAIL2016; -- 1582
SELECT COUNT(*) FROM ORDER_DETAIL2017; -- 1479 

SELECT COUNT(*)   -- 5486 
FROM( SELECT * FROM ORDER_DETAIL
	UNION ALL
	SELECT * FROM ORDER_DETAIL2016
	UNION ALL
	SELECT * FROM ORDER_DETAIL2017) T;

-- VIEW 생성
CREATE VIEW ORDER_DETAIL_TOTAL
AS
	SELECT * FROM ORDER_DETAIL
	UNION ALL
	SELECT * FROM ORDER_DETAIL2016
	UNION ALL
	SELECT * FROM ORDER_DETAIL2017;

-- 생성확인 
SELECT * FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_SCHEMA = 'MYSHOP2019';
SELECT COUNT(*) FROM ORDER_DETAIL_TOTAL; -- 5486 



SELECT LEFT(ORDER_DATE,4) AS YEAR, 
		SUBSTRING(ORDER_DATE,6,2) AS MONTH,
        COUNT(ORDER_ID) 아이디별주문
	FROM ( SELECT E.EMPLOYEE_NAME,
        OH.ORDER_DATE,
        P.PRODUCT_NAME,
        OH.ORDER_ID,
        OD.ORDER_DETAIL_ID
			FROM EMPLOYEE E, ORDER_HEADER_TOTAL OH, ORDER_DETAIL_TOTAL OD, PRODUCT P
			WHERE E.EMPLOYEE_ID = OH.EMPLOYEE_ID
				AND OH.ORDER_ID = OD.ORDER_ID
				AND OD.PRODUCT_ID = P.PRODUCT_ID
                ) T1 
GROUP BY LEFT(ORDER_DATE,4), SUBSTRING(ORDER_DATE,6,2)
ORDER BY YEAR ASC;   

-- 카테고리 활용
SELECT * FROM CATEGORY;

-- 대분류로 '가전제품' 선택 후 소분류 값 가져오기
-- INNER JOIN  서브쿼리 둘 다 가능하나 서브쿼리로 진행하는 것이 좋다 
SELECT SUB_CATEGORY_NAME 
	FROM SUB_CATEGORY
    WHERE CATEGORY_ID IN (SELECT CATEGORY_ID FROM CATEGORY WHERE CATEGORY_NAME='가전제품');
							-- 서브쿼리 : 가전제품인 카테고리 아이디 가져오기
 
-- 소분류에서 '대형'을 선택한 후 상품명 가져오기 
SELECT PRODUCT_NAME
	FROM PRODUCT
    WHERE SUB_CATEGORY_ID IN (SELECT SUB_CATEGORY_ID
							FROM SUB_CATEGORY WHERE SUB_CATEGORY_NAME ='대형');
							-- 서브쿼리 : 대형에 속하는 서브 카테고리 아이디 가져오기
    

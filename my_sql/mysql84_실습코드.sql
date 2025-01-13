
/* 
	*데이터베이스의 테이블은 행과 열을 이용하여 데이터를 저장하는 시스템이다.
    
	SQL(Structrured Query Language) : 데이터 베이스에서 사용하는 구조화된 언어
    --> DBMS(DataBase Management System) 에 접속하여 CRUD 작업을 수행하는 언어
    
    (1) DDL (Data Definition Language)
		- 데이터를 저장하기 위한 공간을 생성하고 관리하는 논리적인 언어 
        - CREATE, ALTER, TRUNCATE, DROP 
	(2) DML (Data Manipulation Language) : 데이터 조작어
		- 데이터 CRUD 작업을 수행하는 언어
        - insert(C), select(R), update(U), delete(D)
    (3) DCL(Data Control Language) : 데이터 제어어
		- 데이터에 접근하는 권한을 제어하는 언어
        - GRANT(부여), DEVOKE(해제)
	(4) DTL(Data Transaction Language) : 트랜잭션 제어어
		- 데이터베이스 작업 처리 단위인 트랜잭션을 관리하는 언어
        - commit(완료), rollback(취소), savepoint(작업구간별 저장) ..
        
 */ 
 
 
 
 
 /*
	데이터 베이스 선택 및 조회 
    show databases --모든 데이터베이스 목록 출력
    use [선택한 데이터베이스명]; -- 사용할 데이터베이스 선택
    select database()      --데이터베이스 선택
    show tables            -- 데이터베이스에 저장된 테이블 전체 조회
 */





show databases;   -- 모든 데이터 베이스 목록을 출력
use hrdb2019;    -- 데이터베이스 폴더 찾기
select database();   -- 데이터베이스 선택
show tables;   -- 어떠한 테이블이 있는지 

/*
	테이블 구조 확인 : DESC(DESCRIBE) 
    형식 - DESC [테이블명];


*/
SHOW TABLES;
DESC DEPARTMENT;
DESC EMPLOYEE;
DESC UNIT;
DESC VACATION;

/* 

	테이블 조회(단순) : SELECT
    형식 - SELECT [컬럼니스트] From [테이블명]; 
		  SELECT [*(전체컬럼니스트)] From [테이블명]; 

*/ 

SHOW TABLES;
DESC EMPLOYEE;
SELECT EMP_ID, EMP_NAME FROM EMPLOYEE;
SELECT * FROM EMPLOYEE; 
SELECT * FROM DEPARTMENT;


SHOW TABLES;
DESC EMPLOYEE;


-- 사원 테이블에서 사원 아이디, 사원명, 성별, 입사일 조회
SELECT EMP_ID, EMP_NAME, GENDER, HIRE_DATE 
FROM EMPLOYEE;

-- 사원 테이블에서 사원명, 부서명, 입사일, 폰번호, 연봉 조회
DESC EMPLOYEE;
SELECT emp_name, hire_date, phone, salary FROM EMPLOYEE;

-- 부서 테이블의 모든 컬럼을 조회
DESC DEPARTMENT;
SELECT * FROM DEPARTMENT;

-- 조회한 컬럼 명을 ALIAS(별칭) 으로 출력
-- 형식 : SELECT [컬럼명 AS '별칭', 컬럼명 AS '별칭'...] FROM [테이블명];
-- 사원테이블에서 아이디, 성명, 입사일, 부서명, 연봉, 이름으로 컬럼을 조회

DESC EMPLOYEE;
SELECT EMP_ID AS '아이디', 
		EMP_NAME AS '성명', 
       HIRE_DATE AS '입사명', 
        DEPT_ID AS '부서명', 
        SALARY AS '연봉'
	FROM EMPLOYEE;
    
SELECT EMP_ID  '사원 아이디', 
		emp_name 성명, 
        hire_date 입사명, 
        DEPT_ID 부서명, 
        SALARY 연봉
	FROM EMPLOYEE;

-- 사원테이블에서 사원명, 부서, 연봉을 조회하고 별칭으로 컬럼명을 수정
-- 기존 컬럼을 이용하여 가상 컬럼 생성 - 연봉 10% 인센티브 컬럼,  물리적X
-- 타입이 숫자인 컬럼은 수식 연산이 가능함

SELECT  emp_name 사원명, 
        dept_id 부서, 
        salary 연봉, SALARY*0.1 인센티브
	FROM EMPLOYEE;

-- 현재의 날짜를 조회, 컬럼명을 'DATE'로 변경
SELECT CURDATE() DATE;

/* 

	테이블 조회(단순) : SELECT ~ FROM ~ WHERE
	- 조건절을 추가하여 다양한 쿼리를 실행
    형식 - SELECT [컬럼니트스, *]; 
          FROM [테이블명]
          WHERE [조건절];

*/ 

-- 사원테이블에서 SYS 부서에 근무하는 모든 사원을 조회 
select * FROM EMPLOYEE
	where dept_id = 'sys';

-- 사원 테이블에서 사원명이 '정주고'인 사원의 모든 정보 조회
select * FROM EMPLOYEE
	where emp_name = '정주고';
    
-- 사원 테이블에서 연봉이 5800인 사원의 모든 정보 조회
select * FROM EMPLOYEE
	where salary = 5800;
    
-- 사원 테이블에서 여성들의 아이디, 이름, 입사일, 이메일 정보를 조회
select emp_id, emp_name, hire_date, email FROM EMPLOYEE
	where gender = 'f';
-- 사원 테이블에서 부서명이 sys인 사원들의 아이디, 사원명 입사일을 조회
-- 출력되는 아이디 컬럼명을 '사원번호' 별칭 사용
select emp_id  as '사원번호', emp_name, hire_date FROM EMPLOYEE
	where dept_id = 'sys';
    
-- WHERE절 조건에 별칭으로 조회가 가능할까요? 아니요..
select emp_id '사원 번호', emp_name, hire_date, DEPT_ID '부서 번호' 
FROM EMPLOYEE
-- WHERE '부서 번호' = 'sys';
where dept_id = 'sys';

-- 사원 테이블에서 마케팅 부서의 모든 사원 정보를 조회
select * FROM EMPLOYEE
where dept_id='mkt';

-- 사원테이블에서 입사일이 2014년 8월 1일인 모든 사원 조회
select * FROM EMPLOYEE
where hire_date='2014-08-01';   -- DATE 타입은 표현은 문자처럼, 처리는 숫자

-- 연봉이 5000인 사원 정보 조회
select * FROM EMPLOYEE
where salary=5000;

select * FROM EMPLOYEE;


-- NULL 이란?
-- 숫자 컬럼에서는 가장 큰 숫자로 인식, 문자 컬럼에서는 작은 문자로 인식한다.
-- NULL은 논리적인 의미를 가지므로 IS 키워드를 비교 연산을 수행

-- 사원테이블에서 ENG_NAME이 NULL인 모든 사원의 정보 조회
select * FROM EMPLOYEE
WHERE ENG_NAME IS NULL;

-- 연봉이 정해지지 않은 모든 사원 조회
SELECT *
FROM EMPLOYEE
WHERE SALARY IS NULL;

-- ifnull() : NULL 값을 다른 값으로 대체해주는 함수
-- 형식 : ifnull(대체해야할 컬럼명, 대체할 값)
-- 컬럼리스트에서 호출한다.

SELECT EMP_NAME, SALARY, IFNULL(SALARY, 0) AS SALARY2
FROM EMPLOYEE;

-- ENG_NAME이 NULL인 사원들은 'SMITH'이름으로 변경 후 조회
-- 출력되는 컬럼명은 ENG_NAME으로 변경
SELECT EMP_ID, 
		EMP_NAME, 
        IFNULL(ENG_NAME, 'SMITH') AS 'ENG_NAME',
        HIRE_DATE
FROM EMPLOYEE;


-- 모든 사원의 아이디, 사원명, 입사일 퇴사일을 조회
-- 현재 근무 중인 사원인 퇴사일에 현재의 날짜를 출력

DESC EMPLOYEE;

SELECT EMP_ID, 
		EMP_NAME,
        HIRE_DATE,
        IFNULL(retire_date,CURDATE()) AS RETIRE_DATE
FROM EMPLOYEE;

/* 
	DISTINCT : 데이터 중복 배제, 중복된 데이터 하나만 출력
	형식 - SELECT [DISTINCT 컬럼니스트(중복데이터 포함)] 
			FROM [테이블명];
			WHERE [조건절];
 */ 
 
 -- 사원 테이블의 부서 컬럼을 조회 
 SELECT DISTINCT DEPT_ID
	FROM EMPLOYEE;
    
 SELECT DISTINCT EMP_ID, DEPT_ID   
	FROM EMPLOYEE;   -- EMP_ID와 DEPT_ID 조합이 완전히 동일한 경우에만 중복으로 간주하고 제거한다, 정렬이 안됨, 
 
 
 /* 
	ORDER BY : 데이터 정렬 (오름차순, 내림차순)
		형식 : SELECT ~ 
				FROM ~
                WHERE ~ 
                ORDER BY [정렬할 컬럼] [ASC(오름차순)/DESC(내림차순)] ;
                --오름차순은 생략이 가능함
 */
 
 -- 사원 아이디, 사원명, 입사일, 연봉을 조회
 -- 사원 아이디 기준 오름차순으로 정렬
 
 select EMP_ID, EMP_NAME, HIRE_DATE, SALARY 
	FROM EMPLOYEE 
    ORDER BY EMP_ID ASC;

-- 사원 아이디 기준 내림차순으로 정렬
 select EMP_ID, EMP_NAME, HIRE_DATE, SALARY 
	FROM EMPLOYEE 
    ORDER BY EMP_ID DESC;
    
-- 사원 아이디 기준 오름 차순 입사일 기준 내림차순

 select EMP_ID, EMP_NAME, HIRE_DATE, SALARY 
	FROM EMPLOYEE 
    ORDER BY EMP_ID ASC, HIRE_DATE DESC;
    
-- 급여를 기준으로 오름차순 정렬 후 조회
 select *
	FROM EMPLOYEE 
    ORDER BY SALARY ASC;

-- ENG_NAME이 정해지지 않은 사원들을 최근 입사한 순서대로 조회 
 select * 
	FROM EMPLOYEE 
    WHERE ENG_NAME IS NULL
    ORDER BY HIRE_DATE DESC;

-- 퇴직한 사원들을 급여가 높은 순으로 조회
 select EMP_ID, EMP_NAME, HIRE_DATE, SALARY 
	FROM EMPLOYEE 
    WHERE RETIRE_DATE IS NOT NULL
    ORDER BY SALARY ASC;


-- 정보 시스템 부서의사원 들 중 급여가 높은 순으로 조회 
 select *
	FROM EMPLOYEE
	where dept_id ='sys'
	ORDER BY SALARY DESC;
    
-- 정보 시스템 부서의 사원 중 최근 입사일 기준, 급여가 낮은 순으로 조회
 select *
	FROM EMPLOYEE
	where dept_id ='sys'
	ORDER BY HIRE_DATE DESC, SALARY ASC;
    
/*
	특정 범위의 데이터 검색 : WHERE [ 조건절 + 비교연산자]
	형식 - SELECT [컬럼리스트]
			FROM [테이블명]
			WHERE 컬럼명 [비교연산자 조건절]
*/

-- 사원중에서 연봉이 5000 이상인 사원들을 조회
 select *
	FROM EMPLOYEE
	where SALARY >= 5000
    ORDER BY SALARY DESC;

-- 입사일이 '2016년 1월 1일' 이전에 입사한 사원들 조회 
-- DATE 타입은 표현은 문자처럼, 처리방식은 숫자처럼
 select *
	FROM EMPLOYEE
	where HIRE_DATE  <= '2016-01-01'
    ORDER BY HIRE_DATE DESC;
    
    
-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000 이상인 사원들을 조회
-- AND(~이고) : 두개의 조건이 모두 만족한 데이터만 조회
 select *
	FROM EMPLOYEE
	where HIRE_DATE  >= '2015-01-01' AND SALARY >= 6000;
    
-- 입사일이 2015년 1월 1일 이후이거나, 급여가 6000 이상인 사원들을 조회
-- OR(~또는) : 두개의 조건중 하나만 만족해도 데이터 조회
 select *
	FROM EMPLOYEE
	where HIRE_DATE  >= '2015-01-01' OR SALARY >= 6000;
    
    
-- 입사일이 2015년 1월 1일 부터 2017년 12월 31일 사이에 입사한 사원들을 모두 조회
select *
	FROM EMPLOYEE
    WHERE HIRE_DATE >= '2015-01-01'AND HIRE_DATE <= '2017-12-31';

-- 연봉 구간이 5000부터 7000 사이의 사원들을 모두 조회
SELECT *
	FROM EMPLOYEE
    WHERE SALARY >= 5000 AND SALARY < 7000 ;
    

/*
	BETWEEN ~ AND : 특정 구간 조회시 사용
    형식 - SELECT [컬럼니스트]
		FROM [테이블명]
        WHERE 컬럼명 BETWEEN [시작구간] AND [종료구간];
*/ 

-- 2016년 입사자들을 조회 
-- (2016-01-01~2016-12-31)
SELECT *
	FROM EMPLOYEE
    WHERE SALARY BETWEEN '2016-01-01' AND '2016-12-31';
    
-- 사원아이디가 S0001, S0010, S0020인 사원의 모든 정보를 조회 
SELECT *
	FROM EMPLOYEE
    WHERE EMP_ID = 'S0001' OR EMP_ID = 'S0010' OR EMP_ID = 'S0020';
    
    
-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회

SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID = 'MKT' OR DEPT_ID = 'GEN' OR DEPT_ID = 'HRD';
    
    
/* IN 연산자 : 하나의 컬럼에 추가되는 OR 연산식을 대체하는 IN 연산자
	형식 - SELECT [컬럼리스트]
		FROM [테이블명]
        WHERE 컬럼명 IN (조건1, 조건2, 조건3...); 
*/ 

-- 사원 아이디가  S0001, S0010, S0020인 사원의 모든 정보를 조회 
SELECT *
	FROM EMPLOYEE
    WHERE EMP_ID IN ('S0001','S0010','S0020');

-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회

SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID IN ('MKT','GEN','HRD');
    
    
/*
	와일드 카드 문자 : 특정 문자열 검색
    종류 : %(전체), _(한문자)
    사용법 : LIKE 연산자와 함께 조건식을 추가하여 사용됨
	형식 - SELECT [컬럼리스트]
		FROM [테이블명]
        WHERE 컬럼명 [와일드 카드 문자를 이용한 특정 문자열 검색 조건];
    
*/

-- 영어이름이 'f'로 시작하는 모든 사원들을 조회 
SELECT *
	FROM EMPLOYEE
    WHERE ENG_NAME LIKE 'F%';

-- '한'씨 성을 가진 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_NAME LIKE '한%';
    
-- 이메일 주소 2번째 자리에 'a'가 들어가는 모든 사원을 조회 
SELECT *
	FROM EMPLOYEE
    WHERE EMAIL LIKE '_a%';

-- 이메일 주소가 4자리인 모든 사원을 조회
	SELECT *
	FROM EMPLOYEE
    WHERE EMAIL LIKE '____@%';
    

-- 이름이 '삼'이 들어가는 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_NAME LIKE '%삼%';
    


/* 
	내장함수(Built-in) : 숫자, 문자, 날짜 함수 
	- 함수 테스트를 위한 테이블 DUAL
    - SELECT [함수 실행] FROM DUAL;
*/

-- 1. 숫자 함수 : abs(), rand(), trun()...
-- (1) abs 함수 : 절댓값 표현 함수 
SELECT 100, -100, ABS(100) , ABS(-100)
	FROM DUAL;
    
-- (2) FLOOR 함수 : 소수점을 버리는(삭제) 함수
-- TRUNC(TRUNCATE) : 소수점을 삭제하는 함수   - TRUNCATE(데이터, 자릿수)
-- FLOOR와의 차이 -> 소숫점 자릿수 지정 불가능 
SELECT 123.456 ,FLOOR(123.456) FROM DUAL;
SELECT 123.456 ,
	TRUNCATE(123.456, 0) AS '소수점0',
    TRUNCATE(123.456, 2) AS '소수점2'
    FROM DUAL;
    
    
-- (3) RAND 함수 : 임의의 수를 생성
SELECT RAND(),  
		RAND() * 1000,
        RAND() * 1000000
	FROM DUAL;
    
-- 정수만 출력하는 쿼리 실행
SELECT FLOOR(RAND()) AS 'RAND1',  
		TRUNCATE(RAND() * 1000, 0) RAND2, 
        TRUNCATE(RAND() * 1000000, 2) RAND3
	FROM DUAL;
    
-- (4) MOD 함수 : 모듈러 연산을 실행하는 함수 - MOD(숫자데이터, 연산숫자)
SELECT MOD(100, 2) 짝수, MOD(101, 2) 홀수 FROM DUAL;

-- 1~3 자리의 정수를 생성하고, 생성한 정수를 2로 나누는 모듈러 함수를 실행하는 쿼리를 완성해주세요
SELECT MOD(TRUNCATE(RAND() * 1000, 0),2) 연습 FROM DUAL;

SELECT *
	FROM EMPLOYEE;

-- 사원테이블에서 사원아이디, 사원명, 부서아이디, 입사일, 연봉, 인센티브(연봉 20%)를 조회
-- 인센티브에 소수점 생략
-- 연봉협상이 아직 진행되지 않은 사원은 모두 0으로 출력, 인센티브 포함
-- 5000 미만의 사원들 정보만 출력 
SELECT EMP_ID, 
		EMP_NAME, 
		DEPT_ID, 
        HIRE_DATE, 
        IFNULL(SALARY,0) AS SALARY, 
        IFNULL(TRUNCATE(SALARY*0.2, 0), 0) AS INCENTIVE
	FROM EMPLOYEE
    WHERE SALARY < 5000 OR SALARY IS NULL;
   --  WHERE SALARY < 5000;
   
-- 2. 문자함수 : CONCAT(), SUBSTRING()... 
-- (1) CONCAT(문자열, 문자열...) : 문자열 결합 
SELECT CONCAT('MY','SQL','-84') AS NAME
	FROM DUAL;
    
    
-- 사원 테이블의 사원명과 영어이름을 결합하여 새로운 컬럼을 생성하고 컬럼명은 TEST_NAME 으로 조회 
-- 예시) 홍길동 / HONG
-- 영어 이름이 정해지지 않은 사원은 빈문자열로 치환해서 실행

SELECT EMP_NAME, 
	ENG_NAME,
    CONCAT(EMP_NAME, '/', IFNULL(ENG_NAME,'')) AS TEST_NAME
						-- ENG_NAME이 비어있으면 빈문자열로 가져와라
	FROM EMPLOYEE;
    

-- 사원 테이블의 사원 아이디와 1~5자리 사이의 임의의 정수를 결합하여 사원번호라는 새로운 컬럼을 생성하고 조회
-- 사원 아이디, 사원번호, 사원명, 입사일, 급여, 퇴사일 컬럼리스트를 조회
-- 현재 근무중인 사원은 현재날짜를 출력
SELECT  EMP_ID,
		CONCAT(EMP_ID, TRUNCATE(RAND()*100000, 0)) EMP_NUMBER,
		EMP_NAME, 
        HIRE_DATE, 
        SALARY, 
        IFNULL(RETIRE_DATE, CURDATE()) RETIRE_DATE
FROM EMPLOYEE;


-- (2) SUBSTRING(문자열, 위치, 자릿수) : 문자열 추출 함수
SELECT SUBSTRING('대한민국 홍길동 만세 1234!!', 1, 4) 대한민국,
		SUBSTRING('대한민국 홍길동 만세 1234!!', 6, 3) 홍길동,
        SUBSTRING('대한민국 홍길동 만세 1234!!', 10, 2) 만세,
        SUBSTRING('대한민국 홍길동 만세 1234!!', 1, 4) '!!'
FROM DUAL;


-- 사원테이블에서 사원아이디, 사원명, 입사년도, 입사월 입사일, 급여를 조회
SELECT  EMP_ID,
		EMP_NAME, 
        SUBSTRING(HIRE_DATE, 1, 4) 입사년도, 
        SUBSTRING(HIRE_DATE, 6, 2) 입사월,
        SUBSTRING(HIRE_DATE, 9, 2) 입사일,
        SALARY
FROM EMPLOYEE;

-- 2015년도에 입사한 모든 사원들을 조회
SELECT  *
FROM EMPLOYEE
WHERE SUBSTRING(HIRE_DATE, 1, 4) = '2015';

-- 2018년도에 정보시스템 부서에 입사한 모든 사원들을 조회 
SELECT *
FROM EMPLOYEE
WHERE DEPT_ID = 'SYS' AND SUBSTRING(HIRE_DATE, 1, 4) = '2018';

-- (3) LEFT(문자열, 추출숫자), RIGHT (문자열, 추출 숫자)
SELECT LEFT('대한민국 홍길동 만세 1234!!', 4) 대한민국,
		RIGHT('대한민국 홍길동 만세 1234!!', 2) '!!' FROM DUAL;
        
-- 2015년도에 입사한 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
	WHERE LEFT(HIRE_DATE, 4) = '2015';
    
-- 사원들의 폰번호 마지막 네자리를 조회 
-- 사원명, 부서 아이디, 입사년도, 폰번호(마지막 4자리)
SELECT EMP_NAME,
		DEPT_ID,
        LEFT(HIRE_DATE, 4) HIRE_DATE, 
        RIGHT(PHONE, 4) PHONE
	FROM EMPLOYEE;

-- (4) UPPER(대문자), LOWER(소문자) 
SELECT *
	FROM EMPLOYEE
	WHERE UPPER(DEPT_ID) = UPPER('sys');
    
-- 사원들의 영어이름과 이메일 주소를 모두 대문자로 조회 
SELECT  EMP_ID,
		EMP_NAME, 
        UPPER(ENG_NAME) ENG_NAME,
        UPPER(EMAIL) EMAIL
FROM EMPLOYEE;


-- (5) TRIM() : 공백 제거 함수
SELECT TRIM('          MYSQL 84') AS TRIM1, 
		TRIM('  MYSQL 84             ') AS TRIM2, 
        TRIM('          MYSQL 84   ') AS TRIM3
	FROM DUAL;
    
-- (6) FORMAT(문자열, 소숫점자리) : 문자열의 포맷 수정
-- 콤마를 3자리씩 콤마로 구분하여 출력하는 포맷 생성
SELECT FORMAT(123456, 0) FORMAT1, 
		FORMAT(123456, 2) FORMAT2 FROM DUAL;
        
-- 사원테이블의 사원아이디, 사원명, 입사일, 연봉을 조회 
-- 연봉 협상 전인 사원은 0으로 변환 후 조회 
-- 연봉은 3자리씩 끊어서 출력, 만원을 뒤에 붙여라
SELECT  EMP_ID,
		EMP_NAME, 
        HIRE_DATE,
        CONCAT(FORMAT(IFNULL(SALARY,0),0), '만원') SALARY
FROM EMPLOYEE;

-- 사원아이디, 사원명, 부서아이디 ,입사일, 연봉, 보너스연봉(0.05%) 컬럼들을 조회 
-- 연봉과 보너스 컬럼은 3자리 콤마로 구분하여 출력후 '만원' 추가 
-- 보너스 컬럼은 소수점 1자리 까지 출력
SELECT  EMP_ID,
		EMP_NAME, 
        DEPT_ID,
        HIRE_DATE,
        CONCAT(FORMAT(IFNULL(SALARY, 0),0),'만원') SALARY,
        CONCAT(FORMAT(IFNULL(SALARY * 0.05,0), 1),'만원') BONUS
FROM EMPLOYEE;

-- 3. 날짜 함수 : CURDATE(), NOW(), SYSDATE() 
-- (1) CURDATE() : 현재 시스템 날짜를 출력, 연월일만 출력 
SELECT CURDATE() FROM DUAL; 

-- (2)  NOW(), SYSDATE()  : 현재 시스템 날짜를 출력, 년월일 시분초 출력 
SELECT NOW() FROM DUAL; 
SELECT SYSDATE() FROM DUAL;

-- 4. 형변환 함수 : CAST(), CONVERT()
-- CAST(변경데이터 AS 데이터 타입)

SELECT 12345 숫자, CAST(121345 AS CHAR) 문자 FROM DUAL;
SELECT '12345' 문자, CAST('121345' AS UNSIGNED INTEGER) 정수 FROM DUAL;

-- 입력폼에서 '20150101' 데이터 날짜를 가진 사원을 조회
SELECT *
	FROM EMPLOYEE 
    WHERE HIRE_DATE = CAST('20150101' AS DATE);
    
-- FLOOR 함수를 적용한 CAST 함수
SELECT FLOOR('12-34-5') 문자,
		FLOOR(CAST('12-34-5' AS UNSIGNED INTEGER)) 정수
	
	FROM DUAL;

-- 5. 문자열 치환 함수 : REPLACE(문자열, OLD, NEW)
SELECT '1234,456',
		replace('123,456', ',','') 문자, 
        CAST(replace('123,456', ',','')AS UNSIGNED INTEGER) 숫자
    FROM DUAL;
    
-- 사원 테이블의 입사일 포맷을 변경 '2015-01-01' --> '2015/01/01'
SELECT EMP_NAME,
		HIRE_DATE,
        REPLACE(HIRE_DATE, '-', '/') HIRE_DATE
		FROM EMPLOYEE;

/*****************************************************
	그룹(집계) 함수 : SUM(), AVG(), MIN(), MAX(), COUNT()...
    GROUPE BY : 그룹 함수를 적용하기 위해 일반 컬럼을 그룹핑하는 단위
    HAVING : 그룹함수의 조건절을 적용하는 구문
*******************************************/

-- 1. SUM(숫자, 숫자컬럼) 
-- 사원 테이블에서 모든사원의 연봉 총합을 조회
SELECT SUM(SALARY) 총연봉,
		concat(format(SUM(SALARY),0),'만원') 총연봉		
	FROM EMPLOYEE;
    
-- 2. AVG(숫자, 숫자컬럼)
-- 사원들의 총연봉, 평균연봉 조회
-- 3자리 구분, '만원' 단위 추가
-- 소수점 한자리 까지 유지
SELECT concat(format(SUM(SALARY),1),'만원') 총연봉,
		concat(format(AVG(SALARY),1),'만원') 평균연봉		
	FROM EMPLOYEE;
    
-- 3. MIN (숫자, 숫자컬럼)
-- 가장 작은 값을 출력
-- 사원들의 총연봉, 평균연봉, 최소연봉을 출력
-- 3자리 구분, 만원 추가, 소수점자리 생략

SELECT concat(format(SUM(SALARY),0),'만원') 총연봉,
		concat(format(AVG(SALARY),0),'만원') 평균연봉,
		concat(format(MIN(SALARY),0),'만원') 최소연봉		
	FROM EMPLOYEE;

-- 4. MAX(숫자, 숫자컬럼)
-- 가장 큰 값을 출력
-- 사원들의 총연봉, 평균연봉, 최소연봉, 최대 연봉을 출력
-- 3자리 구분, 만원 추가, 소수점 자리 생략
SELECT concat(format(SUM(SALARY),0),'만원') 총연봉,
		concat(format(AVG(SALARY),0),'만원') 평균연봉,
		concat(format(MIN(SALARY),0),'만원') 최소연봉,		
		concat(format(MAX(SALARY),0),'만원') 최대연봉		
	FROM EMPLOYEE;
    
-- 5. COUNT(컬럼명)
-- 테이블의 ROW COUNT를 출력
-- NULL을 포함한 데이터의 COUNT는 계산하지 x
SELECT COUNT(*) 총사원수, -- 20명
		COUNT(SALARY) 연봉협상완료사원수  -- 19명
FROM EMPLOYEE;

-- 연봉협상 안한 사원의 정보
SELECT * 
	FROM EMPLOYEE
	WHERE SALARY IS NULL;
    
-- 총사원수, 퇴직사원수, 재직사원수를 조회 
-- 인원수 뒤에 '명' 단위 추가
SELECT CONCAT(CAST(COUNT(*) AS CHAR),'명') 총사원수, 
		CONCAT(COUNT(RETIRE_DATE),'명') 퇴직사원수,
        CONCAT(COUNT(*) - COUNT(RETIRE_DATE), '명')  재직사원수
FROM EMPLOYEE;

-- 사원 테이블에서 정보시스템 부서의 사원수를 조회

SELECT COUNT(*) 
	FROM EMPLOYEE
	WHERE DEPT_ID = 'SYS';

-- 2015년도에 입사한 사원수를 조회
SELECT COUNT(*) '2015 입사자(명)',
		SUM(SALARY) 총연봉,
		AVG(SALARY) 평균연봉,
		MIN(SALARY) 최소연봉,
		MAX(SALARY) 최대연봉
	FROM EMPLOYEE
	WHERE LEFT(HIRE_DATE, 4) = '2015';
    

-- 가장 최근 입사자와 오래된 입사자의 입사일 조회 
SELECT MAX(HIRE_DATE) '최근 입사일',
		MIN(HIRE_DATE) '최초 입사일'
	FROM EMPLOYEE;

-- HRD 부서 기준 가장 최근 입사자와 오래된 입사자의 입사일 조회 
SELECT MAX(HIRE_DATE) 'HRD 최근 입사일',
		MIN(HIRE_DATE) 'HRD 최초 입사일'
	FROM EMPLOYEE
    WHERE DEPT_ID = 'HRD';

-- 마케팅 부서 기준 가장 낮은 연봉과 높은 연봉을 조회

SELECT MIN(SALARY) 'MKT- 최소 연봉',
		MAX(SALARY) 'MKT-최대 연봉'
	FROM EMPLOYEE
	WHERE DEPT_ID = 'MKT';
    
    
-- 6. GROUP BY ~ 적용 : ~~별 그룹함수를 적용해야 하는 경우
-- 사원 테이블에서 부서별 사원수를 조회
-- GROUP BY에 사용된 일반 컬럼은 그룹함수와 함께 조회가 가능
-- 형식 : SELECT [컬럼리스트]
-- 			FROM [테이블명]
--          GROUP BY [그룹핑할 컬럼명, ...]

SELECT DEPT_ID, COUNT(*) '부서별 사원수'
	FROM EMPLOYEE
    GROUP BY DEPT_ID;
    
-- 입사년도별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사지원수를 조회
SELECT  CONCAT(LEFT(HIRE_DATE, 4),'년도') 입사년도,
		CONCAT(FORMAT(SUM(IFNULL(SALARY,0)),0),'만원') 총연봉,
		TRUNCATE(AVG(SALARY),0) 평균연봉,
		MIN(SALARY) 최저연봉,
		MAX(SALARY) 최고연봉,
        CONCAT(COUNT(*), '명') 입사지원수
	FROM EMPLOYEE
    GROUP BY CONCAT(LEFT(HIRE_DATE, 4),'년도');
    
-- 부서별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사지원수를 조회
SELECT DEPT_ID 부서아이디,
		SUM(SALARY) 총연봉,
		AVG(SALARY) 총연봉,
		MIN(SALARY) 최저연봉,
		MAX(SALARY) 최고연봉,
        COUNT(*) 입사지원수
	FROM EMPLOYEE
    GROUP BY DEPT_ID;
    
    
-- 7. HAVING 절
-- GROUP BY를 통해 그룹핑한 결과에 조건절을 추가하는 구문

-- 부서별 평균 연봉을 조회
-- NULL 값이 포함된 경우 0으로 변환
-- 소수점 자리는 절삭
-- 부서 아이디 함께 출력
-- 부서 평균 연봉이 6000 이상인 부서만 출력
-- 평균연봉 기준 오름차순으로 정렬

SELECT 	DEPT_ID, 
		TRUNCATE(AVG(IFNULL(SALARY, 0)),0) 평균연봉  -- 오라클에서는 IFNULL이 NVL(컬럼명, 값)이다
		FROM EMPLOYEE
		GROUP BY DEPT_ID
        HAVING 평균연봉 >= 6000     -- HAVING 절에서는 별칭 컬럼명을 조건으로 사용가능함 
		ORDER BY 평균연봉 ASC;
        
        
-- 입사년도 기준 총연봉, 평균연봉을 조회
-- 총연봉이 5000 이상인 사원들만 출력
-- NULL 값을 포함한 경우 0으로 초기화

SELECT
	LEFT(HIRE_DATE, 4) 입사년도,
	SUM(IFNULL(SALARY,0)) 총연봉,
	TRUNCATE(AVG(IFNULL(SALARY,0)),0) 평균연봉 
FROM EMPLOYEE
GROUP BY LEFT(HIRE_DATE, 4)
HAVING SUM(SALARY) >= 5000;

-- 부서별 남녀사원의 사원수를 조회 
SELECT DEPT_ID 부서ID,
		GENDER,
        COUNT(*) 사원수
	FROM EMPLOYEE
    GROUP BY DEPT_ID, GENDER;
    -- DEPT가 가장 크기때문에 먼저나와야함 

-- 8. ROLLUP 함수 : REPORTING 을 위한 함수
-- 형식 : SELECT [컬럼리스트] FROM [테이블명]
-- 		WHERE [조건절]
--      GROUP BY [그룹핑 컬럼] WITH ROLLUP;
-- 부서별 총연봉을 조회, 연봉이 정해지지 않은 부서는포함하지 않음 

SELECT  IF(GROUPING(DEPT_ID), '부서 총합계', IFNULL(DEPT_ID, '-')) 부서ID,
		CONCAT(FORMAT(SUM(SALARY), 0), ' 만원') 총연봉
	FROM EMPLOYEE
    WHERE SALARY IS NOT NULL
    GROUP BY DEPT_ID WITH ROLLUP;

-- 입사년도별 평균연봉을 조회
-- 연봉이 정해지지 않는 부서는 포함하지 않음
-- 평균연봉이 6000 이상되는 입사년도만 출력
-- 3자리 구분, '만원' 단위 추가
-- 리포팅 함수 ROLLUP 사용, '연도별 총합계' 컬럼명 추가
SELECT  IF(GROUPING(YEAR), '연도별평균연봉', IFNULL(YEAR, '-')) 연도별,
		CONCAT(FORMAT(AVG(SALARY), 0), '만원') 평균연봉
	FROM (SELECT  LEFT(HIRE_DATE, 4) YEAR,
					SALARY
			FROM EMPLOYEE) T
	WHERE SALARY  IS NOT NULL
    GROUP BY YEAR WITH ROLLUP ;
    
    
SHOW TABLES; 

-- 사원들의 휴가사용 내역을 조회
SELECT * FROM VACATION; 

-- 사원아이디별 휴가사용 횟수 조회
-- 총휴가사용일 기준으로 내림차순 정렬
SELECT  EMP_ID 사원아이디,
		COUNT(*) 휴가상신횟수,
        SUM(DURATION) 총휴가사용일
	FROM VACATION
    GROUP BY EMP_ID
    ORDER BY 총휴가사용일 DESC;
    
-- 2016 ~ 2017년도 사이에 사원아이디별 휴가사용 횟수 조회
-- 총휴가사용일 기준으로 내림차순 정렬
SELECT  IF(GROUPING(EMP_ID), '총휴가사용내역', IFNULL(EMP_ID, '-')) 사원ID,
		COUNT(*) 휴가상신횟수,
        SUM(DURATION) 총사용일수
	FROM VACATION
    WHERE LEFT(BEGIN_DATE, 4) BETWEEN 2016 AND 2017
    GROUP BY EMP_ID WITH ROLLUP
    ORDER BY 총사용일수;


/*************************************************
2025/01/02
	DDL : 테이블 생성, 수정, 삭제
    명령어 : CREATE, ALTER, DROP, TRUNCATE(일부 ROW를 완전히 제거해주는 역할) 

************************************************/
-- 1. 테이블 생성 : CREATE
-- 형식 : CREATE TABLE [생성할 테이블명] (
--              컬럼명  데이터타입(크기) [제약사항],
--              ...
--              )


-- 제거는 DROP 삭제는 DELETE
-- TEST 테이블 생성 및 제거
	CREATE TABLE TEST(
		ID CHAR(4)    NOT NULL
    );
    
SHOW TABLES;
DESC TEST;
SELECT * FROM TEST;
DROP TABLE TEST;
SHOW TABLES;

-- DATA TYPE(데이터 타입) : 숫자, 문자, 날짜(시간)
-- (1) 숫자데이터 타입
-- 1) 정수 : SMALLINT(2), INT(4), BITINT(8)     -- 여기서 괄호 안은 자릿수(BYTE크기)
-- 2) 실수 : FLOAT(4), DOUBLE(8)
-- 3) 문자 : CHAR(크기:고정형), VARCHAR(크기:가변형) -- DB메모리에 자리가 FIX 및 변형이 된다는 뜻 CHAR는 처음부터 FIX, VARCHAR는 가상의 메모리 자리를 만들어서 
--         예) NAME CHAR(20),    NAME BARCHAR(20)
--             '홍길동'               '홍길동'
--          나머지 17자리는 사용불가 /  MAXIMUM 가용 자리 20자리이지만 실제 생성되는건 3BYTE만 만들어짐
-- 4) 텍스트 : TEXT - 긴 문자를 저장하는 데이터 타입
-- 5) BLOB 타입 : BLOB - 큰 바이너리 타입의 데이터 저장
-- 6) 날짜 : DATE - 년, 월, 일 DATETIME - 년,월,일,시,분,초 까지 저장
--  		데이터 타입에 맞는 날짜 함수 호출 필요!!

DESC EMPLOYEE;
SELECT * FROM EMPLOYEE;

-- EMP 테이블 생성
-- 컬럼리스트 : EMP_ID 고정형(4) , EMP_NAME 가변형(10), HIRE_DATE 날짜/시간, SALARY 정수(5)

CREATE TABLE EMP (
	EMP_ID   CHAR(4),
    EMP_NAME VARCHAR(10),
    HIRE_DATE DATETIME,
    SALARY INT(5)
);

SHOW TABLES;
DESC EMP;

DESC DEPARTMENT;
-- DEPT 테이블 생성 : DEPT_ID 고정형(3), DEPT_NAME 가변형(10), LOC 가변형(20)

CREATE TABLE DEPT (
	DEPT_ID CHAR(3),
    EMP_NAME VARCHAR(10),
    LOC VARCHAR(20)
    );

SHOW TABLES;
DESC DEPT;

-- EMP, DEPT 테이블의 모든 데이터 조회
SELECT * FROM EMP;
SELECT * FROM DEPT;

-- 1. 테이블 생성(복제) : CREATE TQBLE ~ AS ~ SELECT
-- 물리적으로 메모리에 생성이된다 -> 테스트 끝난 후 삭제할 것
-- 기본키, 참조키 등의 제약사항은 복제가 불가능 하다. 복제 후  ALTER 명령으로 추가
/* 형식 : CREATE TABLE [생성(복제)할 테이블명] (
		AS 
        SELECT [컬럼리스트]
			FROM [테이블명]
			WHERE[조건절]

*/


-- 정보시스템 부서의 사원들만 별도로 테이블 복제
-- EMPLOYEE_SYS
CREATE TABLE EMPLOYEEE_SYS
AS
SELECT *
FROM EMPLOYEE
WHERE DEPT_ID = 'SYS';

SHOW TABLES;
SELECT * FROM EMPLOYEEE_SYS;
	


-- 키복제 안되는 것 테이블 구조로 비교
DESC EMPLOYEEE_SYS;
-- emp_id	char(5)	NO			
-- emp_name	varchar(4)	NO			
-- eng_name	varchar(20)	YES			

DESC EMPLOYEE;
-- emp_id	char(5)	NO	PRI		
-- emp_name	varchar(4)	NO	
-- eng_name	varchar(20)	YES	


-- 퇴직한 사원들을 복제하여 EMPLOYEE_RETIRE 테이블로 관리


CREATE TABLE EMPLOYEE_RETIRE
AS
SELECT *
FROM EMPLOYEE
WHERE  RETIRE_DATE IS NOT NULL;

SHOW TABLES;
SELECT * FROM EMPLOYEE_RETIRE;
	
-- 2015, 2017년 입사자들을 복제하여 별도로 관리
-- 테이블명 : EMPLOYEE_2015_2017
CREATE TABLE EMPLOYEE_2015_2017
AS
SELECT *
	FROM EMPLOYEE
	WHERE LEFT(HIRE_DATE, 4) IN ('2015', '2017');
    
    
SHOW TABLES;
SELECT * FROM EMPLOYEE_2015_2017;

/*
	테이블 제거 : DROP TABLE
    형식 : DROP DABLE [제거할 테이블 명]
    명령 즉시 메모리에서 바로 테이블 삭제하므로 주의, 복구 불가능
*/

DROP TABLE EMPLOYEE_2015_2017;
SHOW TABLES;

DROP TABLE test;
DROP TABLE texst;

-- EMPLOYEE_REIRE 테이블 제거
DROP TABLE EMPLOYEE_REIRE;

SHOW TABLES;


-- 재직중인 사원 테이블 생성 (복제) 
-- EMPLOYEE_WORKING

CREATE TABLE EMPLOYEE_WORKING
AS
SELECT *
FROM EMPLOYEE
WHERE  RETIRE_DATE IS NULL;



/*
	테이블 데이터 제거 : TRUNCATE TABLE
    형식 : TRUNCATE TABLE [제거할 테이블 명]
    명령 즉시 메모리에서 바로 테이블 삭제하므로 주의, 복구 불가능
*/

DROP TABLE EMPLOYEE_REIRE;

SHOW TABLES;
SELECT * FROM EMPLOYEE_WORKING;

-- EMPLOYEE_WORKING 테이블의 모든 데이터(ROW) 를 제거

 TRUNCATE TABLE EMPLOYEE_WORKING;
 SHOW TABLES;
SELECT * FROM EMPLOYEE_WORKING;
 
 
 
/*
	테이블 구조 변경 : ALTER TABLE
    형식 : ALTER TABLE [변경할 테이블 명]
    1) 컬럼 추가 : ADD COLUMN [NEW 컬럼명 데이터타입(크기) 제약사항]
    2) 컬럼 변경 : MODIFY COLUMN [컬럼명 데이터타입(크기) 제약사항]
    3) 컬럼 삭제 : DROP COLUMN [삭제할 컬럼명]
*/

DESC EMPLOYEE_WORKING;
-- EMPLOYEE_WORKING 테이블에 BONUS 컬럼을 추가, 데이터타입 정수형 4자리, NULL값 허용 
ALTER TABLE EMPLOYEE_WORKING
	ADD COLUMN BONUS INT(4);

DESC EMPLOYEE_WORKING;


-- EMPLOYEE_WORKING 테이블에 DNAME(부서명) 추가, 데이터 타입 가변형(10), 널값 사용

ALTER TABLE EMPLOYEE_WORKING
	ADD COLUMN DNAME VARCHAR(10);
    
DESC EMPLOYEE_WORKING;

-- EMPLOYEE_WORKING 이메일 주소 컬럼 크기를 30으로 수정 
ALTER TABLE EMPLOYEE_WORKING
	MODIFY COLUMN EMAIL VARCHAR(30);

-- EMPLOYEE_WORKING SALARY컬럼을 실수 타입(DOUBLE) 으로 수정

ALTER TABLE EMPLOYEE_WORKING
	MODIFY COLUMN SALARY DOUBLE;


-- EMPLOYEE_SYS 테이블의 이메일 주소 컬럼 크기를 가변형 10 크기로 수정 
ALTER TABLE EMPLOYEE_SYS
	MODIFY COLUMN EMAIL VARCHAR(10);
 -- 위의 코드는 크기를 줄였기 때문에 1개의 데이터에 대해서 데이터 유실 방지로 인한 TRUNCATE 관련 에러가 나옴(제약)
 
 -- EMPLOYEE_WORKING BONUS 컬럼 삭제
 ALTER TABLE EMPLOYEE_WORKING
	DROP COLUMN BONUS;
    
 -- EMPLOYEE_WORKING EMAIL, DNAME 컬럼 삭제   -- 선생님꺼 확인하기 
  ALTER TABLE EMPLOYEE_WORKING
	DROP COLUMN DNAME;
 
-- EMPLOYEE 테이블에서 HRD 부서에 속한 사원들의 사원 아이디, 사원명, 입사일, 연봉, 보너스(연봉10%)
-- 정보를 별칭을 사용하여 조회한 후
-- EMPLOYEE_HRD 이름으로 복제

CREATE TABLE EMPLOYEE_HRD
AS
SELECT EMP_ID 사원아이디,
		EMP_NAME 사원이름,
        HIRE_DATE 입사일,
        SALARY 연봉,
        SALARY*0.1 보너스
FROM EMPLOYEE
WHERE DEPT_ID = 'HRD';

SHOW TABLES;
SELECT * FROM EMPLOYEE_HRD;

/*
	DML : insert(C), select(R), update(U), delete(D)
*/

-- 1. insert : 데이터 추가
-- 형식 : INSERT INTO [테이블명] (컬럼리스트)
--         VALUE(데이터리스트...);

SHOW TABLES;
DESC EMP;
SELECT * FROM EMP;
-- S001, 홍길동, 현재날짜, 1000데이터 추가
INSERT INTO EMP(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S001', '홍길동', CURDATE(), 1000);
    
-- S002, 홍길순, 현재날짜(시분초가 들어가게 NOW, SYSDATE), 2000 데이터 추가
INSERT INTO EMP(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S002', '홍길순', NOW(), 2000);
-- 컬럼리스트와 value의 추가할 값 형식 순서를 맞춰줘야함

-- S003, 김철수, 현재날짜(NOW, SYSDATE), 3000추가 
-- 컬럼리스트 생략시에는 생성시 컬럼 순서대로 INSERT 생성됨

DESC EMP;
INSERT INTO EMP
	VALUES('S003', '김철수', SYSDATE(), 3000);
    
SELECT * FROM EMP;

-- S004, 이영희, 현재날짜(NOW, SYSDATE), 연봉협상 전 데이터 추가 
DESC EMP;
INSERT INTO EMP(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S004', '이영희', NOW(), NULL);
    
    SELECT * FROM EMP;

-- 안되는 예 ?? 선생님꺼 찾아보기
INSERT INTO EMP(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES(NULL, '홍길동', NOW(), NULL);
    
-- EMPLOYEE 테이블의 정보 시스템 부서의 사원들 정보 중
-- 사원 아이디, 사원명, 입사일, 부서아이디, 연봉 
-- 2016년 이전에 입사한 사원들
-- 복제하여 EMPLOYEE_SYS 테이블 생성
CREATE TABLE EMPLOYEE_SYS
AS
SELECT EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY
FROM EMPLOYEE
WHERE DEPT_ID = 'SYS' AND LEFT(HIRE_DATE, 4) < '2016';

SELECT * FROM EMPLOYEE_SYS WHERE DEPT_ID = 'SYS';

-- EMPLOYEE_SYS 테이블에 2016년도 이후에 입사한 정보시스템 부서 사원 추가
-- 서브쿼리를 이용한 데이터 추가?? <이게 뭐지 선생님꺼 확인 
INSERT INTO EMPLOYEE_SYS(EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY)
SELECT EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY
	FROM EMPLOYEE
	WHERE DEPT_ID = 'SYS' AND LEFT(HIRE_DATE, 4) >= '2016'; 
SELECT * FROM EMPLOYEE_SYS;

-- DEPT 테이블 구조 확인 및 데이터 추가
SHOW TABLES;
DESC DEPT;

-- SYS, 정보시스템, 서울
-- MKT, 마케팅, 뉴욕
-- HRD, 인사, 부산 
-- ACC, 회계, 정해지지않음 

INSERT INTO DEPT (DEPT_ID, EMP_NAME, LOC ) VALUES('SYS', '정보시스템','서울');
INSERT INTO DEPT (DEPT_ID, EMP_NAME, LOC ) VALUES('MKT', '마케팅','뉴욕');
INSERT INTO DEPT (DEPT_ID, EMP_NAME, LOC ) VALUES('HRD', '인사','부산');
INSERT INTO DEPT (DEPT_ID, EMP_NAME, LOC ) VALUES('ACC', '회계',NULL);

SELECT * FROM DEPT;

-- 컬럼리스트 생략시 컬럼명 변경됨
-- INSERT INTO DEPT VALUES('영업', NULL, 'SALES');

-- 에러발생 !! - 컬럼리스트와 매칭 카운트가 다름
INSERT INTO DEPT(LOC, EMP_NAME ) VALUES('영업', NULL, 'SALES');
	
-- 에러발생!! - DEPT_ID  컬럼 사이즈보다 큰 데이터 입력
INSERT INTO DEPT (EMP_NAME, LOC, DEPT_ID)  VALUES('영업', NULL, 'SALES');
INSERT INTO DEPT (EMP_NAME, LOC, DEPT_ID)  VALUES('영업', NULL, 'SAL');


/*++++++++++++++++++++++++++++++++++++
	CONSTRAINT(제약사항) : 데이터 무결성의 원칙을 적용하기 위한 규칙
    - UNIQUE : 유니크(중복방지) 제약 사항
    - NOT NULL : NULL 값 허용하지 않는 제약
    - PRIMARY KEY : UNIQUE + NOT NULL 두개가 합쳐진 제약 
    - FOREIGN KEY (참조키) : 타 테이블을 참조하기 위한 제약
    - DEFAULT : 디폴트로 저장되는 데이터를 정의하는 제약
    
	사용 형식 : CREATE TABLE + 제약사항
			 ALTER TABLE + 제약사항
++++++++++++++++++++++++++++++++++++*/ 

-- DB의 스키마 구조를 통해 각 테이블의 제약사항 확인 
-- INFORMATION_SCHEMA.TABLE_CONSTRAINTS

SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
			WHERE TABLE_NAME = 'EMPLOYEE';
            
DESC EMPLOYEE;
SHOW TABLES;
DESC EMP;

-- EMP_COST 테이블 생성 
-- 기본키 제약 : EMP_ID
-- 유니크 제약 : EMP_NAME
-- NOT NULL 제약 : SALARY

CREATE TABLE EMP_CONST(
	EMP_ID    CHAR(4)   PRIMARY KEY,
    EMP_NAME  VARCHAR(10)  UNIQUE,
    HIRE_DATE DATETIME,
    SALARY   INT   NOT NULL
    );
    
SHOW TABLES;
DESC EMP_CONST;

SELECT*
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'EMP_CONST';
    
-- EMP_CONST : S001, 홍길동, 현재날짜, 1000 데이터 추가
INSERT INTO EMP_CONST (EMP_ID, EMP_NAME, HIRE_DATE, SALARY) 
	VALUES('S001', '홍길동', NOW(), 1000);
SELECT * FROM EMP_CONST;

-- EMP_CONST : S001, 김철수, 현재날짜, 1000 데이터 추가   -- 무결성원칙 위배되는 데이터를 추가 -- 에러발생 
-- Error Code: 1062. Duplicate entry 'S001' for key 'emp_const.PRIMARY’
-- PRIMARY 키로 설정되어 있는 컬럼은 입력폼에서 아이디 중복  체크 기능을 통해 확인함!
INSERT INTO EMP_CONST (EMP_ID, EMP_NAME, HIRE_DATE, SALARY) 
	VALUES('S001', '김철수', NOW(), 1000);
    
-- SOLUTION : 중복된 'S001' --> 'S002' 변경 후 실행
INSERT INTO EMP_CONST (EMP_ID, EMP_NAME, HIRE_DATE, SALARY) 
	VALUES('S002', '김철수', NOW(), 1000);

-- ERROR Code : 1048
-- SOLUTION :NULL 또는 중복된 값을 배제하여 진행 
-- BUT 김철수라는 이름이 중복되기때문에 에러가 나옴
-- ERROR CODE : 1062 
-- SOLUTION : 이미 저장된 '김철수' 대신 유니클한 이름으로 진행
INSERT INTO EMP_CONST (EMP_ID, EMP_NAME, HIRE_DATE, SALARY) 
	VALUES('S003', '김철수', NOW(), 1000);

-- EMP_NAME NULL 값을 추가    
INSERT INTO EMP_CONST (EMP_ID, EMP_NAME, HIRE_DATE, SALARY) 
	VALUES('S004', NULL, NOW(), 1000);

-- EMP_NAME 컬럼에 널값은 중복으로 저장 가능 

INSERT INTO EMP_CONST (EMP_ID, EMP_NAME, HIRE_DATE, SALARY) 
	VALUES('S005', NULL, NOW(), 1000);

INSERT INTO EMP_CONST (EMP_ID, EMP_NAME, HIRE_DATE, SALARY) 
	VALUES('S006', '스미스', NOW(), NULL);
    
    INSERT INTO EMP_CONST (EMP_ID, EMP_NAME, HIRE_DATE, SALARY) 
	VALUES('S006', '스미스', NOW(), 3000);


SELECT * FROM EMP_CONST2;


SELECT 
    *
FROM
    INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE
    TABLE_NAME = 'EMP_CONST';
    
-- EMP_CONST2 테이블 생성
-- EMP_ID : PRIMARY KEY
-- EMP_NAME : UNIQUE
CREATE TABLE EMP_CONST2(
	EMP_ID   CHAR(4),
	EMP_NAME   VARCHAR(10),
	CONSTRAINT PK_EMP_ID PRIMARY KEY(EMP_ID),  -- 프라이머리 제약사항 구문은 한번밖에 못씀!!
	CONSTRAINT UK_EMP_ID UNIQUE (EMP_NAME)
);


    DESC EMP_CONST2;
    SELECT *
		FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
        WHERE TABLE_NAME = 'EMP_CONST2';

-- 제약사항 테스트를 위한 테이블 생성 : CONST_TEST
-- UID 컬럼 : CHAR 4 기본키 제약 
-- NAME 컬럼 : VARCHAR 10 NULL 허용X
-- AGE컬럼 : INT NULL 허용
-- ADDR 컬럼 : VARCHAR 30 NULL 허용 

CREATE TABLE CONST_TEST(
	UID CHAR(4) PRIMARY KEY,
    NAME VARCHAR(10) NOT NULL,
    AGE INT,
    ADDR VARCHAR(30)
);

SHOW TABLES;
DESC CONST_TEST;
SELECT * FROM CONST_TEST;

SELECT *
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'CONST_TEST';
    
-- DEPT_ID 컬럼 추가 :  CHAR(3) 디폴트 'HRD', NULL 허용X
ALTER TABLE CONST_TEST
	ADD COLUMN DEPT_ID CHAR(3) DEFAULT('HRD');
    
DESC CONST_TEST;

-- S001, 홍길동, 20, 서울시, SYS
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR, DEPT_ID)
	VALUES('S001', '홍길동', 20, '서울시', 'SYS');
    
-- S002, 김철수, 20, 서울시, HRD   --HRD가 디폴트이므로 생략해도 됨
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR)
	VALUES('S002', '김철수', 20, '서울시');
    
-- SALARY 컬럼 : INT, 연봉 3000이상인 숫자 등록할 수 있도록 CHECK 제약
ALTER TABLE CONST_TEST
ADD COLUMN  SALARY    INT    CHECK(SALARY >= 3000);

-- S003, 이영희, 30, 부산시, HRD, 3000 
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR, SALARY)
	VALUES('S003', '이영희', 30, '부산시', 3000);
    
-- 에러발생 3819 SALARY가 3000이상이 아님 
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR, SALARY)
	VALUES('S004', '이영희', 30, '부산시', 2000);
    
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR, SALARY)
	VALUES('S004', '이영희', 30, '부산시', 4000);
    
-- 상품 테이블 생성 : PRODUCT_TEST
-- 컬럼 : PID INT 기본키, 
--      PNAME VARCHAR 30 NULL 허용X, 
--       PRICE INT NULL 허용,
--      COMPANY VARCHAR 20 NULL 허용
--    ** 자동번호 생성기 : AUTO_INCREMENT ==> 기본키
--    

CREATE TABLE PRODUCT_TEST(
	PID  INT   PRIMARY KEY   AUTO_INCREMENT,
    PNAME   VARCHAR(30) NOT NULL,
    PRICE INT,
    COMPANY VARCHAR(20)    
);

SHOW TABLES;
DESC PRODUCT_TEST;

-- 키보드, 100, 삼성
INSERT INTO PRODUCT_TEST(PNAME, PRICE, COMPANY)
	VALUES('키보드', 100, '삼성');
    
INSERT INTO PRODUCT_TEST(PNAME, PRICE, COMPANY)
	VALUES('모니터', 1000, '엘지');
    
SELECT * FROM PRODUCT_TEST;


-- 2. UPDATE : 데이터 추가
-- WHERE 절이 생략되면 모든 테이블이 반영이 안된다. 주의
-- 형식 : UPDATE [테이블명]
-- 		 SET [컬럼명='업데이트 데이터', ...]        
--       WHERE [조건절]; 
SELECT * FROM CONST_TEST;

-- 홍길동 연봉 업데이트 : 3500 
UPDATE CONST_TEST
	SET SALARY = 3500 
    WHERE UID = 'S001';     -- WHERE 생략시 모든 사람의 연봉이 3500으로 변경됨, 유니크한 키를 가지고 있는 UID 기준으로
        
SELECT * FROM CONST_TEST;

-- 김철수 연봉 5000 업데이트
UPDATE CONST_TEST
	SET SALARY = 5000 
    WHERE UID = 'S002';
    
SHOW TABLES;
-- EMPLOYEE 테이블을 복제하여 CP_EMPLOYEE 테이블을 생성
-- EMP_ID 컬럼에 기본키 제약 추가

SELECT * FROM EMPLOYEE;

CREATE TABLE CP_EMPLOYEE
AS
SELECT *
FROM EMPLOYEE;

SELECT * FROM CP_EMPLOYEE;
-- 복제한 테이블에 제약사항 추가 
ALTER TABLE CP_EMPLOYEE
	ADD CONSTRAINT PK_EMP_ID   PRIMARY KEY(EMP_ID);
    
DESC CP_EMPLOYEE;
SELECT * 
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'CP_EMPLOYEE';
    
-- PHONE, EMAIL 컬럼에 UNIQUE 제약 추가 
ALTER TABLE CP_EMPLOYEE
	ADD CONSTRAINT UK_PHONE   UNIQUE(PHONE);
    
ALTER TABLE CP_EMPLOYEE
	ADD CONSTRAINT UK_EMAIL   UNIQUE(EMAIL);
    
DESC CP_EMPLOYEE;

SELECT * 
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'CP_EMPLOYEE';

-- CP_EMPLOYEE 테이블의 PHONE에 추가된 제약 사항 삭제
ALTER TABLE CP_EMPLOYEE
	DROP CONSTRAINT UK_PHONE;

-- CP_EMPLOYEE 테이블에서 SYS인 부서 아이디를 --> '정보' 부서로 수정
SELECT * 
	FROM CP_EMPLOYEE
    WHERE DEPT_ID = 'SYS';

-- safe update mode 설정 변경 -- 진행안하면 ㅇ1175 에러코드 발생
SET SQL_SAFE_UPDATES = 0;  -- 해제: 0, 설정 : 1   --디폴트가 설정임
    
UPDATE CP_EMPLOYEE
	SET DEPT_ID = '정보'
    WHERE DEPT_ID='SYS';
    
 SELECT * 
	FROM CP_EMPLOYEE
    WHERE DEPT_ID = '정보';   
    
    
-- CP_EMPLOYEE 테이블에서2016년도 입사한 사원들의 입사일 --> 현재날짜로 수정 
SELECT COUNT(*)
	FROM CP_EMPLOYEE
    WHERE LEFT(HIRE_DATE, 4) = '2025';
    
UPDATE CP_EMPLOYEE
	SET HIRE_DATE = CURDATE()
     WHERE LEFT(HIRE_DATE, 4) = '2016';

SELECT * FROM CP_EMPLOYEE; 


-- 강우동 사원의 영어이름 'KANG', 퇴사일을 현재 날짜로, 부서는 SYS로 수정

UPDATE CP_EMPLOYEE
	SET ENG_NAME = 'KANG',
		RETIRE_DATE = CURDATE(),
        DEPT_ID = 'SYS'
     WHERE EMP_NAME = '강우동';
     
SELECT * FROM CP_EMPLOYEE;
	
-- 트랜잭션 처리방식이  auto commit이 아닌 경우 
-- 작업완료 : commit, 작업취소 : rollback

COMMIT;


-- 3. DELETE : 데이터삭제
-- 트랜잭션 관리법에 따라 삭제된 데이터를 복원할 수 있음, AUTO COMMIT 상태에서는 불가능
-- 형식 : DELETE FROM [테이블명]     
--       WHERE [조건절]; 

COMMIT;   -- 현재까지 진행한 모든 작업 DB에 반영함 

SELECT * FROM CP_EMPLOYEE;
-- 강우동 사원 삭제
DELETE FROM CP_EMPLOYEE WHERE EMP_ID = 'S0003';
COMMIT;
ROLLBACK;   -- 저장안해서 이 쯤 코드 사라짐 붙여넣기만 하기 


USE HRDB2019;
SELECT DATABASE();
SELECT * FROM CP_EMPLOYEE;

-- 연봉이 7000 이상인 모든 사원 삭제
SET SQL_SAFE_UPDATES = 0;
SELECT COUNT(*) FROM CP_EMPLOYEE WHERE SALARY >= 7000;  -- 4명
DELETE FROM CP_EMPLOYEE WHERE SALARY >= 7000;

-- CP_EMPLOYEE 테이블에서 정보 부서 직원들 모두 삭제
SELECT COUNT(*) FROM CP_EMPLOYEE WHERE DEPT_ID = '정보'; -- 기존 4명, 삭제후 0명 , 
DELETE FROM CP_EMPLOYEE WHERE DEPT_ID = '정보';



-- CP_EMPLOYEE 테이블에서 2017년 이후 입사자들을 모두 삭제(터미널)

SHOW TABLES;
DROP TABLE CONST_TEST;
DROP TABLE DEPT;
DROP TABLE EMP;
DROP TABLE EMP_CONST;
DROP TABLE EMP_CONST2;
DROP TABLE EMPLOYEEE_SYS;
DROP TABLE EMPLOYEE_HRD;
DROP TABLE PRODUCT_TEST;
DROP TABLE EMPLOYEE_WORKING;
DROP TABLE EMPLOYEE;

/******************************
	하나 이상의 테이블 생성 및 연결, 조회
	- 생성 : CREATE TABLE
	- 연결 : FOREIGN KEY(참조키) 제약 추가   -- 두 개의 테이블을 만들고 연결한다
	- SELCT(조회) : JOIN, SUBQUERY
    ** 데이터 베이스의 테이블 설계 과정 : 데이터베이스 모델링
		-> 데이터 정규화 
        -> ERD(Entity Relationship Diagram)
****************************************************/

-- ERD 확인툴 : 워크벤치 -> Database -> Reverse Enginer (showdatabase를 거꾸로 돌리는 개념.. 만들어진 데이터를 가지고 erd 그림을 그림 )
-- 정규화 : 데이터 베이스 저장 효율성을 높이기 위한 방식 - 데이터 중복 배제, 테이블 분리... 
-- 반정규화 : 분리된 테이블을 하나로 합치는 방식

-- [KK전자의 인사관리시스템 : 사원 테이블 생성- 정규화✖️]  
-- 사원 테이블의 데이터 : 
-- 사원 아이디(KID, 기본키), 사원명, 주소, 입사일, 연봉, 부서번호, 부서위치


-- [KK전자의 인사관리시스템 : 사원 테이블 생성- 정규화o]  
-- KK_DEPARTMENT 부서 테이블 생성
--

SHOW TABLES;
CREATE TABLE KK_DEPARTMENT(
	DEPT_ID  CHAR(3) PRIMARY KEY,
    DEPT_NAME VARCHAR(20) NOT NULL,
    LOC  VARCHAR(30) 
    );

DESC KK_DEPARTMENT;
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
	WHERE TABLE_NAME LIKE 'KK%';
    
    -- 기본키 제약만 잘 지키기
INSERT INTO KK_DEPARTMENT(DEPT_ID, DEPT_NAME, LOC)
	VALUES('SYS', '정보시스템', '서울시 서초구');
INSERT INTO KK_DEPARTMENT(DEPT_ID, DEPT_NAME, LOC)
	VALUES('HRD', '인사관리', '서울시 종로구');
INSERT INTO KK_DEPARTMENT(DEPT_ID, DEPT_NAME, LOC)
	VALUES('ACC', '회계관리', '서울시 강남구');

SELECT * FROM KK_DEPARTMENT;

-- 사원 테이블 생성 KK_EMPLOYEE 
-- 참조키가 이미 존재해야만 참조키를 사원테이블에서 참조가 가능하다!!, 컬럼의 이름도 똑같고, 데이터 타입도 동일해야함!!!!!

CREATE TABLE KK_EMPLOYEE (
	KID INT PRIMARY KEY AUTO_INCREMENT,
    KNAME VARCHAR(10) NOT NULL,
    ADDRESS VARCHAR(20), 
    HIRE_DATE DATE,
    SALARY INT,
    DEPT_ID CHAR(3),
    CONSTRAINT FK_KK_EMPLOYEE FOREIGN KEY(DEPT_ID)
		REFERENCES KK_DEPARTMENT(DEPT_ID)
    );
    
DESC KK_EMPLOYEE;
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
	WHERE TABLE_NAME LIKE 'KK%';

SELECT * FROM KK_EMPLOYEE;
-- 데이터가 없어도 ERD 구조는 테이블이 만들어지면 생성이 됨
SHOW TABLES;

INSERT INTO KK_EMPLOYEE (KNAME, ADDRESS, HIRE_DATE, SALARY, DEPT_ID) -- DEPT_ID는 쿼리키 제약 -> 부서 테이블의 DEPT_ID 값만 자리에 들어갈 수 있다.
	VALUES('홍길동', '서울시 강남구', CURDATE(), 5000, 'SYS');
INSERT INTO KK_EMPLOYEE (KNAME, ADDRESS, HIRE_DATE, SALARY, DEPT_ID)
	VALUES('스미스', '뉴욕', CURDATE(), 5000, 'HRD'); -- DEPT_ID가 틀리면 쿼리키 제약을 지키지 않은 것이기 때문에 에러가 남
    
    
SELECT * FROM KK_EMPLOYEE;

-- 쿼리키 제약이 있는 컬럼은 셀렉트 박스로 만든다.

/*
[학사관리 시스템 설계]
1. 과목 테이블 (SUBJECT)
컬럼 : SID(과목아이디), SNAME(과목명), SDATE(등록일:년월일 시분초)
SID는 기본키, 자동으로 생성

2. 학생 테이블은 반드시 하나 이상의 과목을 수강해야 함 
컬럼 : STID(학생아이디) 기본키, 자동생성 
		SNAME(학생명) 널허용X, 
        GENDER(성별) 문자1자 널허용X, 
        SID(과목아이디)
        SDATE(등록일자) 년월일 시분초

3. 교수 테이블은 반드시 하나이상의 과목을 강의 해야함 
컬럼 : PID(교수아이디) 기본키, 자동생성
	NAME(교수명) 널 허용X
    SID(과목아이디), 
    PDATE(등록일자) 년월일 시분초
*/

-- 과목 테이블 
CREATE TABLE SUBJECT (
	SID INT PRIMARY KEY AUTO_INCREMENT,
    SNAME VARCHAR(20) NOT NULL,
    SDATE DATETIME
);

-- 학생 테이블 
CREATE TABLE STUDENT (
	STID INT PRIMARY KEY AUTO_INCREMENT,
    SNAME VARCHAR(10) NOT NULL,
    GENDER CHAR(1) NOT NULL,
    SID INT,    -- FOREIGN KEY, SUBJSCT(SID) SUBJECT의 SID와 이름, 타입이 동일해야 함
    SDATE DATETIME,
		CONSTRAINT FK_STUDENT_SID FOREIGN KEY(SID)   -- 이름 작명 : FOREIGN KEY를 STUDENT SID로 작성되어있구나
			REFERENCES SUBJECT(SID)
);

SHOW TABLES;
DESC STUDENT;

-- 교수 테이블

CREATE TABLE PROFESSOR (
	PID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(10) NOT NULL,
    SID  INT, -- FOREIGN KEY, SUBJSCT(SID)
    PDATE DATETIME,
    CONSTRAINT FK_PROFESSOR_SID FOREIGN KEY(SID)
		REFERENCES SUBJECT(SID)
);

SHOW TABLES;
DESC PROFESSOR;

-- SUBJECT 데이터 추가
INSERT INTO SUBJECT(SNAME, SDATE) VALUES('HTML', NOW());
INSERT INTO SUBJECT(SNAME, SDATE) VALUES('JAVASCRIPT', NOW());
INSERT INTO SUBJECT(SNAME, SDATE) VALUES('MYSQL', NOW());

SELECT * FROM SUBJECT;

-- STUDENT 데이터 추가 
INSERT INTO STUDENT(SNAME, GENDER, SID, SDATE) 
	VALUES('홍길동', 'M', 1, SYSDATE());
INSERT INTO STUDENT(SNAME, GENDER, SID, SDATE) 
	VALUES('테스트', 'F', 2, SYSDATE());
INSERT INTO STUDENT(SNAME, GENDER, SID, SDATE) 
	VALUES('김철수', 'M', 3, SYSDATE());
INSERT INTO STUDENT(SNAME, GENDER, SID, SDATE) 
	VALUES('이영희', 'M', 2, SYSDATE());

SELECT * FROM STUDENT;

-- PROFESSOR 데이터 추가
 INSERT INTO PROFESSOR(NAME, SID, PDATE) VALUES('스미스', 1, NOW());
 INSERT INTO PROFESSOR(NAME, SID, PDATE) VALUES('이순신', 2, NOW());
 INSERT INTO PROFESSOR(NAME, SID, PDATE) VALUES('강감찬', 3, NOW());
 
 SELECT * FROM PROFESSOR;
 
 
 -- HTML 과목의 정보를 조회 
 SELECT * FROM SUBJECT WHERE SNAME = 'HTML';
 
 /*++++++++++++++++++++++++++++++++++++++++++++
	조인(JOIN) : 두 개 이상의 테이블 연동
	- 두 개 이상의 테이블을 조합하여 집합
    - CROSS(CATESIAN) JOIN (합집합) --오라클에서는 CATESIAN JOIN
     : 두 테이블이 독립적으로 생성된 경우, JOIN 연결고리X   -- 연결고리가 없을때 곱하기!
     : PROFESSOR & STUDENT -> PROFESSOR * STUDENT
	- INNER JOIN(교집합)
	 : 두 개 테이블이 JOIN 연결고리를 통해 연동 
	- OUTER JOIN : INNER JOIN(교집합) + 선택한 테이블중 교집합에서 제외된 데이터
    - SELF JOIN : 한 테이블을 조인하는 형식 --> 서브쿼리(SUB QUERY)
 */
 
 -- CROSS(CATESIAN) JOIN (합집합) 형식
 -- SELECT [컬럼리스트] FROM [테이블명[테이블별칭], 테이블명[테이블별칭]...]
 -- WHERE [조건절]
 SELECT * FROM PROFESSOR, STUDENT
		ORDER BY NAME;
 
 SELECT PID, NAME, P.SID, SNAME, GENDER, SDATE
	FROM PROFESSOR P, STUDENT S; -- 별칭설정
 
 -- PROFESSOR, STUDENT, DEPARTMENT 조인하여 모든 데이터 조회 
  SELECT COUNT(*) FROM PROFESSOR; -- 3
  SELECT COUNT(*) FROM STUENT; -- 4
  SELECT COUNT(*) FROM DEPARTMENT;
  SELECT  COUNT(*) FROM PROFESSOR, STUDENT, DEPARTMENT; -- 84
  SELECT  * FROM PROFESSOR, STUDENT, DEPARTMENT;
  -- ANSI SQL(SEQUL :: MS-SQL)
  SELECT  * 
	FROM PROFESSOR CROSS JOIN STUDENT
    CROSS JOIN DEPARTMENT;
		
   -- INNER(EQUI) JOIN (교집합) 형식
 -- SELECT [컬럼리스트] FROM [테이블명1[테이블별칭], 테이블명2[테이블별칭]...] 
 -- WHERE [테이블1.조인컬럼 = 테이블명2.조인컬럼]
-- AND [조건절~~ ]
 
SELECT * FROM SUBJECT;
SELECT * FROM PROFESSOR;
SELECT * 
	FROM SUBJECT S, PROFESSOR P
	WHERE S.SID = P.SID;

INSERT INTO PROFESSOR(NAME, SID, PDATE) VALUES('안중근', 1, NOW());
SELECT * FROM PROFESSOR;

INSERT INTO SUBJECT(SNAME, SDATE) VALUES('REACT', NOW());
SELECT * FROM SUBJECT;
 
 -- HTML 과목을 강의하는 모든 교수를 조회 
 -- 오라클 방식으로 작성
 SELECT * 
	FROM SUBJECT S, PROFESSOR P
	WHERE S.SID = P.SID AND SNAME = 'HTML';

-- ANSI SQL로 작성 (표준), 오라클 방식과 동일한 작동
SELECT *
	FROM SUBJECT S INNER JOIN PROFESSOR P
			ON S.SID = P.SID
		WHERE SNAME = 'HTML';

-- 이순신 교수가 강의하는 과목의 과목아이디, 과목명, 교수아이디, 교수명, 교수등록일을 조회 
SELECT S.SID, S.SNAME, P.PID, P.NAME, P.PDATE -- 어디꺼의 SID를 사용하는지 명확하게 사용하는 것이 좋다
	FROM SUBJECT S, PROFESSOR P
	WHERE S.SID = P.SID
		AND P.NAME= '이순신'; -- 중복되어서 P.는 생략해도 됨

SELECT S.SID, S.SNAME, P.PID, P.NAME, P.PDATE
	FROM SUBJECT S INNER JOIN PROFESSOR P ON S.SID = P.SID
	WHERE P.NAME ='이순신';

--  HTML 과목을 수강하는 모든 학생을 조회
SELECT * 
	FROM SUBJECT SU, STUDENT ST
    WHERE SU.SID = ST.SID AND SU.SNAME = 'HTML';
 
 SELECT *
	FROM SUBJECT SU INNER JOIN STUDENT ST ON SU.SID = ST.SID
    WHERE SU.SNAME = 'HTML';
 
 -- HTML 과목을 수강하는 모든 학생과 강의하는 교수를 모두 조회
 
 -- 오라클 
 SELECT *
	FROM SUBJECT SU, PROFESSOR P, STUDENT ST    -- 나열순서는 상관없음 JOIN되는 것이 중요함
	WHERE SU.SID = P.SID 
		AND SU.SID = ST.SID
		AND SU.SNAME = 'HTML';
    -- SUBJECT 기준으로 연결되어있기 때문에 PROFESSOR와 STUDENT는 관계가 없음. 둘을 INNER JOIN 하게 되면 뻥튀기가 됨, 건너건너 관계시켜야함

-- ANSI 
SELECT *
	FROM SUBJECT SU INNER JOIN PROFESSOR P INNER JOIN STUDENT ST
		ON SU.SID = P.SID AND SU.SID = ST.SID
        WHERE SU.SNAME = 'HTML';
        
        
        
-- EMPLOYEE, DEPARTMENT, VACATION, UNIT 테이블의 ERD 참조 
-- 모든 사원들의 사원번호, 사원명, 성별, 부서명 ,입사일 조회 
-- 사원번호 기준으로 오름차순

SELECT * FROM EMPLOYEE;
SELECT * FROM DEPARTMENT;

-- 오라클
SELECT E.EMP_ID, E.EMP_NAME, E.GENDER, D.DEPT_NAME, E.HIRE_DATE
	FROM EMPLOYEE E, DEPARTMENT D
	WHERE E.DEPT_ID = D.DEPT_ID;


-- ANSI 
SELECT E.EMP_ID, E.EMP_NAME, E.GENDER, D.DEPT_NAME, E.HIRE_DATE
	FROM EMPLOYEE E INNER JOIN DEPARTMENT D
		ON E.DEPT_ID = D.DEPT_ID;
        
        
-- 영업 부서에 속해있는 사원들의 사원번호, 사원명, 입사일 급여 조회 
SELECT E.EMP_ID, E.EMP_NAME, E.HIRE_DATE, E.SALARY, D.DEPT_ID, D.DEPT_NAME
	FROM EMPLOYEE E, DEPARTMENT D
	WHERE E.DEPT_ID = D.DEPT_ID
		AND D.DEPT_NAME='영업';


-- 인사과에 속한 사원들 중에 휴가를 사용한 사원들의 리스트를 모두 조회 
SELECT *
	FROM EMPLOYEE E, DEPARTMENT D, VACATION V
	WHERE D.DEPT_ID = E.DEPT_ID -- 먼저 조인하고
		AND E.EMP_ID = V.EMP_ID -- 추후 조인
		AND D.DEPT_NAME = '인사';
        

SELECT * FROM EMPLOYEE;
SELECT * FROM DEPARTMENT;
SELECT * FROM VACATION;
SELECT * FROM UNIT;

-- 영업부서인 사원의 사원명, 폰번호, 부서명, 휴가사용 이유 조회
-- 휴가 사용 이유가 '두통' 인 사원
-- 소속본부 조회 

SELECT E.EMP_NAME, E.PHONE, D.DEPT_NAME, V.REASON, U.UNIT_NAME
	FROM EMPLOYEE E, DEPARTMENT D, VACATION V, UNIT U
    WHERE E.DEPT_ID = D.DEPT_ID
		AND E.EMP_ID = V.EMP_ID
        AND D.UNIT_ID = U.UNIT_ID
        AND V.REASON = '두통'
        AND D.DEPT_NAME = '영업';

-- ANSI 
SELECT E.EMP_NAME, E.PHONE, D.DEPT_NAME, V.REASON, U.UNIT_NAME
	FROM VACATION V INNER JOIN EMPLOYEE E 
		INNER JOIN DEPARTMENT D INNER JOIN UNIT U
		ON E.DEPT_ID = D.DEPT_ID AND  V.EMP_ID = E.EMP_ID AND D.UNIT_ID = U.UNIT_ID
        WHERE V.REASON = '두통' AND D.DEPT_NAME = '영업';

-- 2014년부터 2015년 까지 입사한 사원들 중에서 퇴사하지 않은 사원들의
-- 사원 아이디, 사원명, 부서명, 입사일, 소속본부를 조회 
-- 소속 본부 기준으로 오름차순 정렬

SELECT E.EMP_ID, E.EMP_NAME, D.DEPT_NAME, E.HIRE_DATE, U.UNIT_NAME
	FROM EMPLOYEE E, DEPARTMENT D, UNIT U
		WHERE E.DEPT_ID  = D.DEPT_ID
			AND D.UNIT_ID = U.UNIT_ID
			AND LEFT(E.HIRE_DATE, 4) BETWEEN '2014' AND '2015'
            AND E.RETIRE_DATE IS NULL
            ORDER BY U.UNIT_NAME;

SELECT * FROM EMPLOYEE;
SELECT * FROM DEPARTMENT;
SELECT * FROM VACATION;
SELECT * FROM UNIT;


-- OUTER JOIN 
SELECT * FROM SUBJECT;
SELECT * FROM PROFESSOR;
 
 
 -- NULL이 추가가되는 부분 PROFESSOR
-- ** 오라클 형식의 outer join이 지원되지 않음!(현재 버젼에서는 불가능)
-- SELECT *
-- 	FROM SUBJECT S, PROFESSOR P 
-- 	WHERE S.SID = P.SID(+);


-- ANSI SQL : LEFT OUTER JOIN, RIGHT OUTER JOIN
SELECT *
	FROM SUBJECT S LEFT OUTER JOIN PROFESSOR P 
		ON S.SID = P.SID;
        -- SUBJECT에 있는 데이터로 모두 채우고 PROFESSOR의 컬럼은 NULL로 채워라
        
SELECT *
	FROM SUBJECT S RIGHT OUTER JOIN PROFESSOR P 
		ON S.SID = P.SID;  -- 결과는 LEFT와 동일하게 나옴 INNER JOIN 한 후 추가된 데이터가 나오는 것이기 때문

-- DEPARTMENT, UNIT 테이블
-- 모든 부서의 본부아이디, 본부이름을 조회  -- 모든 부서이기 때문에 DEPARTMENT 기준으로 조회해야함
SELECT * FROM DEPARTMENT;
SELECT * FROM UNIT;

SELECT *
	FROM DEPARTMENT D LEFT OUTER JOIN UNIT U    -- LEFT 기준 OUTER JOIN 하라
		ON D.UNIT_ID = U.UNIT_ID
        ORDER BY U.UNIT_NAME;
        
-- 2017년부터 2018년도까지 입사한 사원들의 사원명, 입사일, 연봉, 부서명 조회해주세요 
-- 단, 퇴사한 사원들도 모두 조회
-- 소속본부를 모두 조회 

SELECT * FROM EMPLOYEE;
SELECT * FROM DEPARTMENT;
SELECT * FROM UNIT;

SELECT E.EMP_NAME, E.HIRE_DATE, E.SALARY, D.DEPT_NAME, U.UNIT_NAME
	FROM EMPLOYEE E INNER JOIN DEPARTMENT D ON E.DEPT_ID = D.DEPT_ID  -- INNER JOIN 키를 별도로 설정하여 INNER JOIN 결과를 따로 뽑아냄
					LEFT OUTER JOIN UNIT U ON D.UNIT_ID = U.UNIT_ID  -- 여기서 INNER JOIN을 주게되면 데이터가 유실되기 때문에 여기서 LEFT OUTER JOIN을 사용해야함
			WHERE LEFT(E.HIRE_DATE,4) BETWEEN '2017' AND '2018'
				AND E.RETIRE_DATE IS NULL;

-- SUBJECT, STUDENT 테이블 사용  -- SUBJECT 기준으로 해야함
-- 학생들이 선택하지 않은 과목을 조회

-- 예시(조건 넣기 전)
SELECT *
	FROM SUBJECT SU LEFT OUTER JOIN STUDENT ST
		ON SU.SID = ST.SID;    -- 결과 : SUBJECT에 있는 모든 결과 출력, 추가된 REACT는 STUDENT 부분이 NULL로 나타남 
        

SELECT *
	FROM SUBJECT SU LEFT OUTER JOIN STUDENT ST
		ON SU.SID = ST.SID
        WHERE ST.SID IS NULL;   -- 아무도선택하지 않은 과목을 조회하기 위한 조건

-- SELF JOIN을 위한 테이블 복제 

SHOW TABLES;

CREATE TABLE EMP
AS
SELECT * FROM EMPLOYEE;

SELECT * FROM EMP; 
DESC EMP;

-- EMP 테이블에 EMP_ID 컬럼에 기본키 제약 추가 (제약사항은 복제가 안되기 때문에 별도로 추가)
ALTER TABLE EMP 
	ADD CONSTRAINT PK_EMP_ID PRIMARY KEY(EMP_ID);

-- EMP 테이블에 MGR 컬럼 추가 (EMP_ID와 데이터 타입이 동일하게 해야함)
ALTER TABLE EMP
	ADD COLUMN MGR CHAR(5);
    
SELECT * FROM EMP;

UPDATE EMP
	SET MGR = 'S0001'
	WHERE EMP_NAME = '홍길동';
    
    
/*
250108 이전에 저장안함 ;;
*/

SELECT * FROM VACATION;
SELECT * FROM EMPLOYEE;


-- [휴가를 사용한 사원정보만!!]
-- 사원별 휴가 사용 일수를 그룹핑하여, 사원아이디, 사원명, 입사일, 연봉, 휴가사용일수를 조회해주세요.
-- 1. 사원별 휴가사용 일수를 그룹핑 작업을 수행하는 인라인뷰 



SELECT EMP_ID, SUM(DURATION) VCOUNT
	FROM VACATION
	GROUP BY EMP_ID;
			
        
        

-- 2. 1번의 인라인뷰와 EMPLOYEE 테이블과 조인 

SELECT ROW_NUMBER() OVER(ORDER BY VCOUNT DESC) AS NO,
		E.EMP_ID,
		E.EMP_NAME,
        E.HIRE_DATE,
        E.SALARY,
        V.VCOUNT
	FROM EMPLOYEE E, (
		SELECT EMP_ID, SUM(DURATION) VCOUNT
		FROM VACATION
		GROUP BY EMP_ID) V
	WHERE E.EMP_ID = V.EMP_ID;
    
     
-- [전체 사원의 휴가일수 조회 : 휴가를 사용한 사원정보 + 사용하지 않은 사원]
-- 사원별 휴가사용 일수를 그룹핑하여, 
-- 사원아이디, 사원명, 입사일, 연봉, 휴가결제횟수, 휴가 전체 사용일수를 조회해주세요.
-- 단, 휴가를 사용하지 않은 사원의 휴가결제 횟수, 휴가전체 사용일수는 0값으로 할당

-- 1. 사원별 휴가결제 횟수, 휴가전체 사용일수를 그룹핑 작업 인라인뷰
SELECT EMP_ID, COUNT(EMP_ID) COUNT, SUM(DURATION) VCOUNT
	FROM VACATION
	GROUP BY EMP_ID;

-- 2. 1번의 인라인뷰 결과 테이블과 EMPLOYEE 테이블 LEFT/RIGHT OUTER JOIN 
-- *** MYSQL에서 OUTER JOIN은 ANSI SQL 형식만 가능!! 
-- 사원아이디, 사원명, 입사일, 연봉, 휴가결제횟수, 휴가전체사용일수

SELECT ROW_NUMBER() OVER(ORDER BY VCOUNT DESC) AS NO,
		E.EMP_ID,
		E.EMP_NAME,
        E.HIRE_DATE,
        CONCAT(FORMAT(E.SALARY,0),'만원') AS SALARY,
        IFNULL(V.COUNT,0) AS COUNT,
        IFNULL(V.VCOUNT,0) AS VCOUNT
	FROM EMPLOYEE E LEFT OUTER JOIN 
		(SELECT EMP_ID, COUNT(EMP_ID) COUNT, SUM(DURATION) VCOUNT
			FROM VACATION
			GROUP BY EMP_ID) V
			ON E.EMP_ID = V.EMP_ID;
	
    
    
-- 스칼라 서브 쿼리 : MYSQL에서는 사용이 가능하나 권장하지 않음X, ORACLE, DB2등 다른 DB 사용 불가
-- HRD 부서들의 사원아이디, 사원명, 부서아이디, 부서명, 소속본부 조회 

SELECT DEPT_NAME FROM DEPARTMENT WHERE DEPT_ID='HRD';

SELECT UNIT_NAME FROM UNIT
	WHERE UNIT_ID = (SELECT UNIT_ID FROM DEPARTMENT WHERE DEPT_ID = 'HRD');

SELECT EMP_ID,
		EMP_NAME, 
		DEPT_ID,
		(SELECT DEPT_NAME FROM DEPARTMENT WHERE DEPT_ID='HRD') AS DEPT_NAME,
        (SELECT UNIT_NAME FROM UNIT
			WHERE UNIT_ID = (SELECT UNIT_ID FROM DEPARTMENT WHERE DEPT_ID = 'HRD'))
            AS UNIT_NAME
	FROM EMPLOYEE
	WHERE DEPT_ID = 'HRD';
    
-- 급여 순으로 사원들을 정렬, 상위 5명의 사원만 출력
-- 번호, 사원아이디, 사원명, 입사일, 부서아이디, 연봉
SELECT ROW_NUMBER() OVER(ORDER BY SALARY DESC) AS NO,   -- 출력 결과에서 만들어지는 것이기 때문에 조건절에서 조건 주는 것이 불가능 -> 인라인 뷰로 불러올 것
	EMP_ID,
    EMP_NAME,
    HIRE_DATE, 
    DEPT_ID,
    SALARY
	FROM EMPLOYEE
    WHERE NO >= 5;


SELECT NO,
		EMP_ID,
		EMP_NAME,
		HIRE_DATE, 
		DEPT_ID,
		SALARY
FROM (SELECT ROW_NUMBER() OVER(ORDER BY SALARY DESC) AS NO,   
				EMP_ID,
				EMP_NAME,
				HIRE_DATE, 
				DEPT_ID,
				SALARY
	FROM EMPLOYEE) T1
	WHERE NO <= 5;
    
-- 입사일이 가장 빠른 사원 10명의 사원아이디, 사원명, 부서아이디를 조회

SELECT NO,
		EMP_ID,
		EMP_NAME,
		DEPT_ID
FROM (SELECT ROW_NUMBER() OVER(ORDER BY HIRE_DATE) AS NO,   
				EMP_ID,
				EMP_NAME,
				DEPT_ID
	FROM EMPLOYEE) T1   -- 별칭 안주면 에러
	WHERE NO <= 10;
    
-- 사원들의 급여합계가 가장 작은 부서의 사원들을 조회해주세요
-- 사원들의 급여합계가 가장 작은 부서 -> 서브쿼리

SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID = (
		SELECT DEPT_ID
				FROM (
					SELECT ROW_NUMBER() OVER(ORDER BY SUM(SALARY)) AS NO,
							DEPT_ID,
							IFNULL(SUM(SALARY),0) AS SALARY
						FROM EMPLOYEE
						WHERE SALARY IS NOT NULL -- 급여가 없는 사람은 제외하고 GROUP BY
						GROUP BY DEPT_ID ) T1 
				WHERE NO = 1);

-- SELF JOIN을 위한 테이블 복제
SHOW TABLES;
CREATE TABLE EMP
AS
SELECT * FROM EMPLOYEE;

SELECT * FROM EMP;
DESC EMP;
-- EMP 테이블에 EMP_ID 컬럼에 기본키 제약 추가
ALTER TABLE EMP
	ADD CONSTRAINT PK_EMP_ID PRIMARY KEY(EMP_ID);

-- EMP 테이블에 MGR 컬럼 추가    
ALTER TABLE EMP
	ADD COLUMN	MGR  CHAR(5);
DESC EMP;
SELECT * FROM EMP;    

-- 업데이트 모드 수정
SET SQL_SAFE_UPDATES = 0; 

-- SYS 부서의 사원들의 매니저를 홍길동(S0001) 사원으로 업데이트
UPDATE EMP
	SET MGR = 'S0001'
    WHERE DEPT_ID = 'SYS';
SELECT * FROM EMP WHERE DEPT_ID = 'SYS';    

-- MKT 부서의 사원들의 매니저를 오감자(S0011) 사원으로 업데이트
UPDATE EMP
	SET MGR = 'S0011'
    WHERE DEPT_ID = 'MKT';
SELECT * FROM EMP WHERE DEPT_ID = 'MKT'; 

-- HRD 부서의 사원들의 매니저를 정주고(S0019) 사원으로 업데이트
UPDATE EMP
	SET MGR = 'S0019'
    WHERE DEPT_ID = 'HRD';
SELECT * FROM EMP WHERE DEPT_ID = 'HRD';     

SELECT * FROM EMP WHERE MGR IS NULL;
SELECT * FROM EMP;

/*
	SELF JOIN을 서브쿼리로 변경해서 조회하기
*/

-- **SELF JOIN :테이블의 EMP_ID(기본키), MGR(참조키)
-- **홍길동 사원이 관리하는 모든 사원들의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명을 조회

SELECT ROW_NUMBER() OVER(ORDER BY EMP_ID) AS NO,  
	EMP_ID, EMP_NAME, HIRE_DATE, D.DEPT_ID, DEPT_NAME
FROM DEPARTMENT D, 
	(SELECT EMP_ID,
		EMP_NAME, 
        HIRE_DATE,
        SALARY,
        DEPT_ID, 
        MGR
		FROM EMP
		WHERE MGR = (SELECT EMP_ID FROM EMP WHERE EMP_NAME='홍길동')) E  -- 서브쿼리 : 홍길동 사원이 관리하는 사원
	WHERE D.DEPT_ID = E.DEPT_ID;

-- HRD 부서를 관리하는 매니저의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명을 조회 
SELECT EMP_ID, EMP_NAME, HIRE_DATE, D.DEPT_ID, DEPT_NAME
FROM DEPARTMENT D , 
	(SELECT *
		FROM EMP E
		WHERE EMP_ID = 
			(SELECT DISTINCT MGR FROM EMP WHERE DEPT_ID = 'HRD')) E
						-- 서브쿼리 : HRD부서 관리 매니저
WHERE D.DEPT_ID = E.DEPT_ID;

-- 서브쿼리 매니저가 없는 사원의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명, 소속본부를 조회

SELECT EMP_ID, EMP_NAME, HIRE_DATE, D.DEPT_ID, DEPT_NAME, UNIT_NAME
FROM DEPARTMENT D, 
		UNIT U,
		(SELECT EMP_ID, EMP_NAME, HIRE_DATE, SALARY, DEPT_ID
		FROM EMP
		WHERE MGR IS NULL) E
WHERE D.DEPT_ID = E.DEPT_ID AND D.UNIT_ID = D.UNIT_ID;

-- OR 이렇게 가능 

SELECT EMP_ID, EMP_NAME, HIRE_DATE, D.DEPT_ID, DEPT_NAME, UNIT_NAME
FROM DEPARTMENT D, 
		UNIT U,
        EMP E
WHERE D.DEPT_ID = E.DEPT_ID AND D.UNIT_ID = D.UNIT_ID
	AND E.MGR IS NULL;

/* 조인이나 서브쿼리 작업시에는 효율성을 높이기 위해 집합을 작게 만들고 진행하는 것이 좋음*/

/*******************************
	쿼리 결과 합치기 : UNION, UNION ALL
    형식 : 쿼리1 UNION/UNION ALL 쿼리2
    ** 쿼리1, 쿼리2의 실행 결과 컬럼리스트가 동일해야함
********************************/
-- HRD 부서의 사원아이디, 사원명, 부서명, 연봉
-- SYS 부서의 사원아이디, 사원명, 부서명, 연봉 실행결과 합치기
SELECT EMP_ID, EMP_NAME, DEPT_ID, SALARY
	FROM EMPLOYEE 
	WHERE DEPT_ID = 'HRD'
UNION ALL
SELECT EMP_ID, EMP_NAME, DEPT_ID, SALARY   -- 컬럼 리스트가 동일해야함
	FROM EMPLOYEE 
	WHERE DEPT_ID = 'SYS';

-- 영업, 정보시스템 부서명으로 조회

SELECT EMP_ID, EMP_NAME, DEPT_ID, SALARY
	FROM EMPLOYEE 
	WHERE DEPT_ID = 
		(SELECT DEPT_ID
		FROM DEPARTMENT
		WHERE DEPT_NAME = '영업')
UNION ALL
SELECT EMP_ID, EMP_NAME, DEPT_ID, SALARY 
	FROM EMPLOYEE 
	WHERE DEPT_ID = 
		(SELECT DEPT_ID
		FROM DEPARTMENT
		WHERE DEPT_NAME = '정보시스템');
    
-- 2013 ~ 2016년도 사이에 입사한 사원과 SYS 부서의 사원들의 아이디, 사원명, 부서아이디, 폰번호, 연봉

SELECT EMP_ID, EMP_NAME, DEPT_ID, PHONE, SALARY
	FROM EMPLOYEE 
	WHERE DEPT_ID = 'SYS'
UNION
SELECT EMP_ID, EMP_NAME, DEPT_ID, PHONE, SALARY 
	FROM EMPLOYEE 
	WHERE LEFT(HIRE_DATE,4) BETWEEN '2013' AND '2016';

-- 2013 ~ 2015 년도별, 부서들의 연봉 합계가 가장 높은 부서들만 조회
-- VIEW 생성 : VIEW_SUM_SALARY

CREATE VIEW VIEW_SUM_SALARY
AS
SELECT ROW_NUMBER() OVER(ORDER BY YEAR) AS NO
      , YEAR, DEPT_ID, SALARY
FROM ( SELECT YEAR, DEPT_ID, SALARY
      FROM (SELECT ROW_NUMBER() OVER(ORDER BY SUM(SALARY) DESC ) AS NO
                  , LEFT(HIRE_DATE,4) AS YEAR
                  , DEPT_ID
                  , SUM(SALARY) AS SALARY
            FROM EMPLOYEE
            WHERE LEFT(HIRE_DATE,4) = '2013'
            GROUP BY YEAR, DEPT_ID) T1
      WHERE T1.NO =1
      UNION
      SELECT  YEAR, DEPT_ID, SALARY
      FROM (SELECT ROW_NUMBER() OVER(ORDER BY SUM(SALARY) DESC ) AS NO
                  , LEFT(HIRE_DATE,4) AS YEAR
                  , DEPT_ID
                  , SUM(SALARY) AS SALARY
            FROM EMPLOYEE
            WHERE LEFT(HIRE_DATE,4) = '2014'
            GROUP BY YEAR, DEPT_ID) T1
            WHERE T1.NO =1
            UNION
            SELECT  YEAR, DEPT_ID, SALARY
            FROM (SELECT ROW_NUMBER() OVER(ORDER BY SUM(SALARY) DESC ) AS NO
                        , LEFT(HIRE_DATE,4) AS YEAR
                        , DEPT_ID
                        , SUM(SALARY) AS SALARY
                  FROM EMPLOYEE
                  WHERE LEFT(HIRE_DATE,4) = '2015'
                  GROUP BY YEAR, DEPT_ID) T1
            WHERE T1.NO =1) E;
            
SELECT * FROM INFORMATION_SCHEMA.VIEW WHERE TABLE_SCHEMA = 'HRDB2019';
SELECT NO,
		CONCAT(YEAR,'년도') YEAR,
        DEPT_ID,
        CONCAT(FORMAT(SALARY,0),'만원') SALARY
	FROM VIEW_SUM_SALARY;
            
/*++++++++++++++++++++++++++++++++++++++
	VIEW(뷰) : 논리적인 가상의 테이블
	-SQL을 실행하여 생성되는 테이블
    - 형식 : CREATE VIEW AS [생성하는 VIEW명]
			AS
			서브쿼리
	- 삭제 : DROP VIEW [VIEW명]
+++++++++++++++++++++++++++++++++++++++*/
--  VIEW는 SQL을 통해 생성되므로 INFORMATION_SCHEMA라는 사전에 등록됨
-- 전체 뷰 리스트 조회시 : INFORMATION_SCHEMA.VIEWS

SELECT * FROM
	INFORMATION_SCHEMA.VIEWS;
    
-- EMPLOYEE, DEPARTMENT, UNIT 테이블을 조인한 뷰 생성 
-- 뷰 이름 : VIEW_EMP_DEPT_UNIT
SELECT * FROM
	EMPLOYEE E, DEPARTMENT D, UNIT U
    WHERE E.DEPT_ID = D.DEPT_ID
     AND D.UNIT_ID = U.UNIT_ID
	ORDER BY E.EMP_ID ASC;
    
CREATE VIEW VIEW_EMP_DEPT_UNIT
AS 
SELECT E.EMP_ID,
		E.EMP_NAME,
        E.HIRE_DATE,
        D.DEPT_ID,
        D.DEPT_NAME,
        U.UNIT_NAME
	FROM EMPLOYEE E, DEPARTMENT D, UNIT U
    WHERE E.DEPT_ID = D.DEPT_ID
     AND D.UNIT_ID = U.UNIT_ID
	ORDER BY E.EMP_ID ASC;

SELECT * FROM INFORMATION_SCHEMA.VIEWS
	WHERE TABLE_SCHEMA = 'HRDB2019';
    
SELECT * FROM VIEW_EMP_DEPT_UNIT
	WHERE DEPT_ID = 'SYS';
    
DROP VIEW VIEW_EMP_DEPT_UNIT;


-- 매니저 (홍길동, 오감자, 정주고) 에ㅐ 따라 관리하는 모든 사원들의
-- 사원번호, 사원명, 입사일, 급여, 부서 아이디, 부서명을 조회하는 서브쿼리 생성 후 뷰로 저장
-- VIEW 이름 : VIEW_EMP_MGR
CREATE VIEW VIEW_EMP_MGR
AS
SELECT  	E.EMP_ID AS MGR_ID, -- 매니저의 정보 
			E.EMP_NAME AS MGR_NAME,
			M.EMP_ID,
			M.EMP_NAME,-- 매니저가 관리하는 사원들의 정보
			M.DEPT_ID, 
			D.DEPT_NAME
		FROM EMP E, EMP M, DEPARTMENT D
		WHERE E.EMP_ID = M.MGR AND M.DEPT_ID = D.DEPT_ID
		ORDER BY E.EMP_ID;  -- 매니저의 정보로 정렬
		
SELECT * FROM INFORMATION_SCHEMA.VIEWS
	WHERE TABLE_SCHEMA = 'HRDB2019';
    
SELECT * FROM VIEW_EMP_MGR;
DROP VIEW VIEW_EMP_MGR;

-- 홍길동, 정주고, 오감자 매니저가 관리하는 사원들 조회
SELECT ROW_NUMBER() OVER(ORDER BY MGR_ID) NO,
	EMP_ID, 
    EMP_NAME, 
    DEPT_ID, 
    DEPT_NAME
FROM VIEW_EMP_MGR
WHERE MGR_NAME='홍길동'; -- 조회할 매니저 조회


-- 조건 : [전체 사원의 휴가일수 조회 : 휴가를 사용한 사원정보 + 사용하지 않은 사원]
-- 사원별 휴가사용 일수를 그룹핑하여,
-- 사원아이디, 사원명, 입사일, 연봉, 휴가결제횟수, 휴가 전체 사용일수를 조회해주세요.
-- 단, 휴가를 사용하지 않은 사원의 휴가결제 횟수, 휴가전체 사용일수는 0값으로 할당
-- VIEW 이름 : VIEW_EMP_VACATION


CREATE VIEW VIEW_EMP_VACATION
AS 
SELECT E.EMP_ID,
		E.EMP_NAME,
        E.HIRE_DATE,
        E.SALARY,
        IFNULL(EMP_COUNT,0) EMP_COUNT, 
        IFNULL(DR_TOTAL,0) DR_TOTAL ,
        D.DEPT_ID,
        D.DEPT_NAME,
        U.UNIT_NAME
	FROM EMPLOYEE E LEFT OUTER JOIN (
		SELECT EMP_ID, COUNT(EMP_ID) EMP_COUNT, SUM(DURATION) DR_TOTAL
		FROM VACATION
		GROUP BY EMP_ID) V ON E.EMP_ID = V.EMP_ID
        INNER JOIN DEPARTMENT D ON E.DEPT_ID = D.DEPT_ID
        LEFT OUTER JOIN UNIT U ON D.UNIT_ID = U.UNIT_ID 
         -- 본부가 없는 고소해 추가하기 위해 INNER JOIN 아닌 OUTER JOIN으로 진행
		ORDER BY E.EMP_ID;
        
        
SELECT * FROM INFORMATION_SCHEMA.VIEWS
	WHERE TABLE_SCHEMA = 'HRDB2019';
    
SELECT * FROM VIEW_EMP_VACATION;

-- 홍길동 휴가 사용 일 수 및 정보 조회
SELECT * FROM VIEW_EMP_VACATION WHERE EMP_NAME='홍길동';

/* KOBIS 박스 오피스 정보 호출 함수 */

export async function kobisBoxOffice(type, searchDt) {
    const key = `32a76f0b374a038b3e1933a983d82f8b`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;

    console.log(url);
    

    const kobis = await fetch(url);
    const jsonData = await kobis.json();

    return jsonData;
}

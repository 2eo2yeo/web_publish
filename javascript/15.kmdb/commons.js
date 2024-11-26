/* KMDB API 호출 함수 */
export async function kmdb(type, value, title) {
    const servicekey = `59H5F0U0OFQB3R2261VM`;
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&${type}=${value}&title=${title}`;
    url += `&ServiceKey=${servicekey}`;

    let api = await fetch(url);  // 에러체크
    let jsonData = await api.json();  //창고에 넣어놓기

    return jsonData;
}
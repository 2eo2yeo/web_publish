/*  */
export const getMain = (req, res) => { //node에서 사용되어지는 부분 //mainRouter에서 mainController의 getMain 호출 //nvc패턴? 
    res.send('Hello~ Main~');
    res.end(); 

}
// 실제 작업의 주체 >> 컨트롤러
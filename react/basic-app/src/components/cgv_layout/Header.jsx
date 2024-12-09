/* header의 공통 레이아웃을 정의하는 컴포넌트 (유지보수를 위한)  */

export default function Header({children}) {
    
    return(
        <header>
            {children}
        </header>
    );

}
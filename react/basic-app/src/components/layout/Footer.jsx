// import './Footer.css';
                                //부모에서 넘어오는 모든 애들을 children으로 명명하고
export default function Footer ({children}) {
    return (
        <footer style={{backgroundColor:"cyan\
            "}}> 
        {/* children을 모두 footer태그사이에 넣겠다 */}
            {children}
        </footer>
    );
}
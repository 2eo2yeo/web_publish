import './Header.css';

                                //header에서 넘어오는 props 다 받기
export default function Header ({children}) {
    return (
        <header>
            {children}
        </header>
    );
}
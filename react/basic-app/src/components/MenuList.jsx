import Menu from "./Menu.jsx";
import '../css/Menu.css'

export default function MenuList({list}) {
    
    return (
        <ul className="menu-container">
            { list.map((item) =>
                <li><Menu name={item.name} href={item.href} bg={item.bg} color={item.color} /></li> )}
                {/* 받을때는 받는 props 값만 맞춰주면됨 */}
        </ul>
    );
}
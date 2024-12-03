import '../css/Menu.css'

export default function Menu({name, href, bg, color}) {
    
    return (
        <a href={href} className='menu-item' style={{backgroundColor : bg, color: color }} >{name}</a>
        //스타일 지정은 블레이스 두개
    );
}
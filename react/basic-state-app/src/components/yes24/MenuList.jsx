import Menu from "./Menu.jsx";

export default function MenuList({list, click}) {

     // MenuList <-- Menu 카테고리가 넘어옴
    const handleMenuClickReq = (category) => {
        click(category);
    }
    
    return (
        <ul className="menu-container">
            { list && list.map((item) =>
                <li><Menu name={item.name} 
                        href={item.href} 
                        bg={item.bg} 
                        color={item.color} 
                        category={item.category}
                        click={handleMenuClickReq}
                        /></li> )}
                        {/* 받을때는 받는 props 값만 맞춰주면됨 */}
        </ul>
    );
}
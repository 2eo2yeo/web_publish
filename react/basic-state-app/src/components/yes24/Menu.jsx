
                                //외부에서 받아오고
export default function Menu({name, href, bg, color, category, click}) {
    
     //AppBestSeller <-- MenuList 에게 넘김 
    const handleClickMenu = () => {
        click(category);  //다시 넘김
    };

    return (
        <a href={href} 
            className='menu-item' 
            style={{backgroundColor : bg, color: color }} 
            onClick={handleClickMenu}>{name}</a>
        //스타일 지정은 블레이스 두개
    );
}
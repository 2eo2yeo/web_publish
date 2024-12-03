import Menu from './Menu.jsx';
import MenuList from './MenuList.jsx';

export default function AppMenu() {
    //외부에서 받기 
    const nameList = [
        {"name" : "Home", "href" : "Home", "bg" : "gray", "color" : "white"},
        {"name" : "About", "href" : "About", "bg" : "tomato"},
        {"name" : "Skills", "href" : "Skills", "bg" : "tomato"},
        {"name" : "MyWork", "href" : "MyWork", "bg" : "tomato"},
        {"name" : "Testimonial", "href" : "Testimonial", "bg" : "tomato"},
        {"name" : "Contact", "href" : "Contact", "bg" : "tomato"},
        {"name" : "Support", "href" : "Support", "bg" : "tomato"}

    ];

    return(
        <>
        {/* 기본형 - 직접적용 */}
        <div>
        <Menu name="Home" href="#home" bg="gray" color="white"/>
        <Menu name="About" href="#about" bg="yellow"/>
        <Menu name="Skills" href="#skills" bg="skyblue"/>
        <Menu name="MyWork" href="#mywork" bg="tomato"/>
        <Menu name="Testimonial" href="#testimonial" bg="tomato"/>
        <Menu name="Contact" href="#contact" bg="tomato"/>
        <Menu name="Support" href="#support" bg="tomato"/>
        </div>
        {/* 외부에서 받은거 리스트로 내보내기 */}
        <div>
            <MenuList list={nameList} />

        </div>
        </>
    );
}
import Button from './Button.jsx';
import ButtonList from './ButtonList.jsx';

export default function AppButton() {
    
    const propsList = [
        {"name" : "All", "type" : "button" }, //객체가 하나의 아이템
        {"name" : "Front-end", "type" : "button" },
        {"name" : "Back-end", "type" : "button" },
        {"name" : "Mobile", "type" : "button" },
        {"name" : "Submit", "type" : "submit" },
        {"name" : "Reset", "type" : "reset" }
    ];
    
    
    return(
        <>
            <div style={{display : 'flex'}}>
                <Button name="All" type="button" />
                <Button name="Front-end" type="button" />
                <Button name="Back-end" type="button" />
                <Button name="Mobile" type="button" />
                <Button name="Submit" type="submit" />
                <Button name="Reset" type="reset" />
                {/* 외우기 : 사용은 태그처럼 생성은 함수처럼 */}
            </div>
            <div style={{display : 'flex', listStyleType : 'none'}}>
                <ButtonList list = {propsList}/>
            </div>
        </>
    );
}
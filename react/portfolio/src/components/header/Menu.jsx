import React from 'react';

export default function Menu({href, menuName, click, style}) {
    return (
        <a className={style} onClick={()=>{
                                            click(menuName);
                                        }} href={href}>{menuName}</a>
    );
}


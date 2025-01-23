import React from 'react';
import { FaPlus } from "react-icons/fa6";

export default function ImageList({ imgList, className }) {

    const name = className.substring(0,6);
    // className에서 index 0부터시작해서 6글자 받아옴

    return (
        <ul className={className}>
            {name !== 'review' ? 
                imgList && imgList.map(image =>
                    <li><img src={image} /></li>)
             : 
                imgList && imgList.map((image, i) =>
                    <li className="review-top-img-metadata">
                        <img src={image} />
                        {i === 6 &&
                            <>
                                <p className="review-top-imglist-metadata"></p>
                                <p className="review-top-imglist-metadata2"><span><FaPlus /></span> <span>더보기</span> </p>
                            </>
                        }
                    </li>
                
            )}



        </ul>
    );
}


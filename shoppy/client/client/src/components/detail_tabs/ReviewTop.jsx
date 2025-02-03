import React from 'react';
import ReviewType from './ReviewType';
import ImageList from '../ImageList';
import StarRating from '../StarRating';

export default function ReviewTop() {

    const list = [
        { "title":"사이즈",
          "names" : ["적당함", "작음","큼"], 
          "values" : ["89", "10","1"]  
        },
        { "title":"색상",
          "names" : ["같음", "비슷함","다름"], 
          "values" : ["90", "9","0"]  
        },
        { "title":"착용감",
          "names" : ["좋음", "보통","좋지않음"], 
          "values" : ["95", "5","0"]  
        }
    ]; 

    const reviewImgList = [
        "https://picsum.photos/id/10/200/300",
        "https://picsum.photos/id/10/200/300",
        "https://picsum.photos/id/10/200/300",
        "https://picsum.photos/id/10/200/300",
        "https://picsum.photos/id/10/200/300",
        "https://picsum.photos/id/10/200/300",
        "https://picsum.photos/id/10/200/300"
    ];

    return (
        <div className="review-top">
            <h3>상품만족도</h3>
            <ul className="review-top-list">
                <li>
                    <div>
                        <p className="review-top-text">구매하신 분들의 상품에 대한 평점입니다.</p>
                        <StarRating totalRate={4.2} className="star-black-big" />
                    </div>
                </li>
                    { list && list.map((item)=>
                    <li>
                        <ReviewType 
                            title={item.title}
                            names={item.names}
                            values={item.values}/>
                    </li>
                    ) }
            </ul>
                    <ImageList imgList={reviewImgList} className="review-top-imglist" />
        </div>
    );
}


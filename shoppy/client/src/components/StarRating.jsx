import React from 'react';
import { TbStarFilled } from "react-icons/tb";
import { TbStarHalfFilled } from "react-icons/tb";
import { TbStar } from "react-icons/tb";

export default function StarRating({ totalRate, className }) {

    const stars = [...Array(5)]; // 길이가 5개인 배열 생성
    const color = (className === "star-coral") ? "coral" : "black";
    const fillStars = Math.floor(totalRate); // 채워진 별 갯수 // totalRate의 정수부분만을 추출
    const halfStar = totalRate % 1 !== 0; // 반별 여부 // 나머지가 0이 아닌 것, 즉 소숫점을 포함하면 true, 정수라면 false
    const emptyStars = 5 - fillStars - (halfStar ? 1 : 0)  //빈별 갯수



    return (
        <div className="star-rating">
            {/* 채워진 별 : ⭐ */}
            {[...Array(fillStars)].map((_, i) => (
                <span key={i} className={className.concat(" ", color)}>
                    <TbStarFilled />
                </span>
            ))}

            {/* 반만 채워진 별 */}

            {halfStar &&
                <span key={halfStar} className={className.concat(" ", color)}>
                    <TbStarHalfFilled />
                </span>
            }

            {/* 빈별 */}
            {[...Array(emptyStars)].map((_, i) =>
                <span key={i} className='empty-star'>
                    <TbStar />
                </span>
            )}

            {className === "star-black-big" &&
                <>
                    <span className={className.concat("number")}>{totalRate}</span>
                    <span className={className.concat("tot-number")}>{totalRate}</span>
                </>
            }
            {className === "star-coral" &&
                <>
                    <span className={className.concat("number")}>{totalRate}</span>
                </>

            }

        </div>
    );
}


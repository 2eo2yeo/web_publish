import React from 'react';
import StarRating from '../StarRating';

export default function ReviewList() {
    return (
        <div>
            <ul className="review-list-title">
                <li><button type='button'>최신순</button></li>
                <li><button type='button'>평점 높은순</button></li>
                <li><button type='button'>평점 낮은순</button></li>
                <li><button type='button'>추천순</button></li>
            </ul>
            <table className="review-list-content">
                <tbody>
                    <tr>
                        <td className="review-list-star"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


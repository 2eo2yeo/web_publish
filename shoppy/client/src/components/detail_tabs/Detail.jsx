import React from 'react';
import DetailImages from './DetailImages';
import DetailInfo from './DetailInfo';
import DetailInfoNotice from './DetailInfoNotice';


export default function Detail({imgList}) {
    return (
        <div>
            <DetailImages imgList={imgList} className="detail-images img" />
            <DetailInfo />
            <DetailInfoNotice />
        </div>
    );
}


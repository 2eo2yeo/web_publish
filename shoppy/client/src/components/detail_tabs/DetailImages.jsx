import React from 'react';
import ImageList from '../ImageList';

export default function DetailImages({imgList, className}) {
    return (
        <div className='detail-images'>
            <img className='detail-images holidays-notice'
                src="/images/holidays_notice.jpg" 
                alt="holiday notice"/>
            <ImageList className={className} imgList={imgList}/>
        </div>
    );
}


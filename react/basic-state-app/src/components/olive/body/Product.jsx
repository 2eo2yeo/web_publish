import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

export default function Product(props) {

    const handleCart = () => {
        props.totalCart(props.id);  //productList 컴포넌트 함수 호출
    }

    return (
        <div className='product-container'>
            <div>
                <img src={props.img} />
                <div>
                    <FontAwesomeIcon icon={faCartShopping} onClick={handleCart} 
                        className='cart'/>
                </div>
            </div>
            <p className='title'>{props.title}</p>
            <div className='description'>
                {props.description}
            </div>
            <div className='price'>
                <span className='sprice'>{props.sprice}</span>
                <span className='fprice'>{props.fprice}</span>
            </div>
            <div className='tags'>
                {props.isSale && <span className='t1'>세일</span>}
                {props.isCupon && <span className='t2'>쿠폰</span>}
                {props.isToday && <span className='t3'>오늘드림</span>}
            </div>
        </div>
    );
}


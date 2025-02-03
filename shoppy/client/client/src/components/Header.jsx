import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";

export default function Header({cartCount}) {
    return (
        <div className='header-outer'>
            <div className='header'>
                <Link to='/' className='header-left'>
                    <FiShoppingBag />
                    Shoppy
                </Link>
                <nav className='header-right '>
                    <Link to='/all'>Products</Link>
                    <Link to='/cart'>MyCart({cartCount})</Link>
                    <Link to='/login'>
                        <button type='button'>Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button type='button'>Signup</button>
                    </Link>
                    {/* 서버 연동 테스트 */}
                    <Link to='/employees'>
                        <button type='button'>Employees</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}


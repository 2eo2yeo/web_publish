import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header.jsx'

export default function Layout() {
    return (
        <div>
            <Header>
                <Link to ="/" style={{'padding':'20px'}}>Home</Link>
                <Link to ="/login" style={{'padding':'20px'}}>Login</Link>
                <Link to ="/signup" style={{'padding':'20px'}}>Signup</Link>
                <Link to ="/about" style={{'padding':'20px'}}>About</Link>
                {/* /about 으로 가서 똑같은 라우터 패스(AppRouter)로 가서 about 컴포넌트를 실행 */}
                <Link to ="/support" style={{'padding':'20px'}}>support</Link>
                <Link to ="/bestseller" style={{'padding':'20px'}}>Bestseller</Link>
            </Header>
            <Outlet/>
            {/* <Footer></Footer> */}
        </div>
    );
}


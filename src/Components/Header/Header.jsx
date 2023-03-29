import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='headerSection'>
            <img src={logo} alt="" />
            <div >
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/home">Home</a>
                <a href="/login">Log-In</a>
            </div>

        </nav>
    );
};

export default Header;
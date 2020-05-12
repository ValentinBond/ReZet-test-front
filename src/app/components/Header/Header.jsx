import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import './header.css';
import { GiShoppingCart } from 'react-icons/gi';
import Modal from '../Modal';
import Cart from '../Cart';

const Header = () => {
    const [isOpem, setIsOpen] = useState(false);
    const count = useSelector(state => state.cart.count);

    return (
        <div className="header">
            <h1 className="header_title">Products</h1>
            <div className="cart_wrap">
                <div className="cart_item_counter">{count}</div>
                <GiShoppingCart onClick={() => setIsOpen(true)} className="cart_icon"/>
            </div>
            <Modal children={Cart} isOpen={isOpem} close={setIsOpen}/>
        </div>
    );
};

export default Header;
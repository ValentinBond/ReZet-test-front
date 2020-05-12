import React from 'react';

import ShippingForm from './components/ShippingForm';
import DetailsShipping from './components/DetailsShipping';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import './shipping.css';

const Shipping = () => {
    return (
        <div>
        <h2>Shipping</h2>
        <Link to="/" className="shipping_back"><MdKeyboardBackspace/>Back</Link>
        <div className="shipping_content">
            <DetailsShipping />
            <ShippingForm />
        </div>
    </div>
    );
};

export default Shipping;
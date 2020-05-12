import React from 'react';

import { useSelector } from 'react-redux';
import './detailsShipping.css';

const DetailsShipping = () => {
    const { cart: products, amountItem } = useSelector(state => state.cart);

    return (
        <div className="detail_list">
            {
                products.length ?
                <div >
                    {products.map(product => {
                        const amountProduct = amountItem[product.id];

                        return (
                            <div key={product.id}>
                                    <h2>{product.name} x {amountProduct}</h2>
                                    <p>Price: {product.price} * {amountProduct} =  {`${product.price * amountProduct  } ${  String.fromCharCode(0x00000024)}`}</p>
                            </div>
                       );
                    })}
                    <div>
                <h2>Total Price: {products.reduce((total, item) => total + (+item.price * amountItem[item.id]), 0)}{` ${  String.fromCharCode(0x00000024)}`}</h2>
                    </div>
                </div>
                : 'Cart is empty'
            }
        </div>
    );
};

export default DetailsShipping;
import React from 'react';
import './cart.css';

import PropTypes from 'prop-types';

import { removeItemsFromCart, removeOneItemFromCart } from '../../actions/cart';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Cart = ({ close }) => {
    const dispath = useDispatch();
    const history = useHistory();
    const { cart: products, amountItem } = useSelector(state => state.cart);

    const removeAllItems = (id) => {
        dispath(removeItemsFromCart(id));
    };

    const removeOneItem = (id) => {
        dispath(removeOneItemFromCart(id));
    };

    const goToOrder = () => {
        history.push('/shipping');
        close(false);
    };

    return (
        <div className="">
            {
                products.length ?
                <>
                    <div className="cart cart_list">
                        {products.map(product => {
                            const amountProduct = amountItem[product.id];

                            return (
                                <div className="cart_info" key={product.id}>
                                    <div className="product_count">{amountProduct}</div>
                                        <p>Name: {product.name}</p>
                                        <p>Price: {product.price} * {amountProduct} =  {`${product.price * amountProduct  } ${  String.fromCharCode(0x00000024)}`}</p>
                                    <div>
                                        <button
                                          className="cart_remove_product"
                                          onClick={() => removeAllItems(product.id)}
                                        >Remove All</button>
                                        <button
                                          className="cart_remove_product"
                                          onClick={() => removeOneItem(product.id)}
                                        >Remove</button>
                                    </div>
                                </div>
                        );
                        })}
                    </div>
                    <div className="total_price">
                        <span>Total Price: {products.reduce((total, item) => total + (+item.price * amountItem[item.id]), 0)} {` ${  String.fromCharCode(0x00000024)}`}</span>
                        <button className="cart_order_button"
                          onClick={goToOrder}
                        >Order</button>
                    </div>
                </>
                : 'Cart is empty'
            }
        </div>
    );
};


Cart.propTypes = {
    close: PropTypes.func
  };

export default Cart;
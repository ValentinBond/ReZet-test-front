import React from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../actions/cart';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const addToCart = (item) => {
        dispatch(addItemToCart(item));
      };

    return (
        <div key={product.id} className="product_card">
        <div className="product_card__header">
            <h2>{product.name}</h2>
        </div>
        <div className="product_card__image">
            <img className="product_image" src={product.image} alt="product"/>
        </div>
        <div className="product_card__info">
            <p className="product_card__field"><b>Price</b>: {`${product.price  } ${  String.fromCharCode(0x00000024)}`}</p>
            <p className="product_card__field"><b>Country</b>: {product.country}</p>
            <p className="product_card__field"><b>City</b>: {product.city}</p>
        </div>
        <div className="product_card_actions">
            <button
              onClick={() => addToCart(product)}
              className="product_card_button product_card_button_cart"
            >Add to cart</button>
        </div>
    </div>
    );
};


ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
        name: PropTypes.string,
        city: PropTypes.string,
        country: PropTypes.string
      })
};

export default ProductCard;
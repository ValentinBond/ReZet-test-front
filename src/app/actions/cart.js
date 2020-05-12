import { ADD_ITEM_TO_CART, REMOVE_ITEMS_FROM_CART, REMOVE_ONE_ITEM_FROM_CART } from '../constants/cart';

export const addItemToCart = (payload) => {
    return { type: ADD_ITEM_TO_CART, payload };
};

export const removeItemsFromCart = (payload) => {
    return { type: REMOVE_ITEMS_FROM_CART, payload };
};

export const removeOneItemFromCart = (payload) => {
    return { type: REMOVE_ONE_ITEM_FROM_CART, payload };
};
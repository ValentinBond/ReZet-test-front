import { ADD_ITEM_TO_CART, REMOVE_ITEMS_FROM_CART, REMOVE_ONE_ITEM_FROM_CART } from '../constants/cart';

const initialState = {
    cart: [],
    count: 0,
    amountItem: {}
};

export default (state = initialState, action) => {
    const { amountItem, cart, count } = state;

    let newAmountItem = { ...amountItem };

    switch (action.type) {
        case ADD_ITEM_TO_CART:
            const newCart = amountItem[action.payload.id] ? cart : [...cart, action.payload];

            return {
                    ...state,
                    cart: newCart,
                    count: count + 1,
                    amountItem: {
                        ...amountItem,
                        [action.payload.id]: amountItem[action.payload.id] ? amountItem[action.payload.id] + 1 : 1 }
                 };
        case REMOVE_ITEMS_FROM_CART:
            delete newAmountItem[action.payload];

            return {
                ...state,
                count: state.count - amountItem[action.payload],
                cart: state.cart.filter(item => item.id !== action.payload),
                amountItem: {
                    ...newAmountItem
                }
                };
        case REMOVE_ONE_ITEM_FROM_CART:
            const isLastItem = amountItem[action.payload] === 1;

            if (isLastItem) {
                delete newAmountItem[action.payload];
            }  else {
                newAmountItem = { ...newAmountItem, [action.payload]: newAmountItem[action.payload] - 1 };
            }

            return  {
                ...state,
                count: state.count - 1,
                cart: isLastItem ? state.cart.filter(item => item.id !== action.payload) : cart,
                 amountItem: {
                    ...newAmountItem
                }
            };
        default:
            return state;
    }
};
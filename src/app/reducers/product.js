import { GET_PODUCTS_SUCCESS, GET_PODUCTS_FAILED } from '../constants/product';

const initialState = {
    products:  [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_PODUCTS_SUCCESS:
        return { ...state, products: action.payload };
      case GET_PODUCTS_FAILED:
        return { ...state, error: action.payload };
      default:
        return state;
    }
};
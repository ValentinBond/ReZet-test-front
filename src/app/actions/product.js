import {
    GET_PODUCTS_SUCCESS,
    GET_PODUCTS_FAILED,
    GET_PODUCTS_REQUEST,
    ORDER_FAILED,
    ORDER_REQUEST,
    ORDER_SUCCESS
} from '../constants/product';

export const getProductsRequest = (payload) => {
    return { type: GET_PODUCTS_REQUEST, payload }
}

export const getProductsSuccessAction = (payload) => {
    return { type: GET_PODUCTS_SUCCESS, payload }
}

export const getProductsFailedAction = (payload) => {
    return { type: GET_PODUCTS_FAILED, payload }
}

export const orderProductsRequest = (payload) => {
    return { type: ORDER_REQUEST, payload }
}

export const orderProductsSuccessAction = (payload) => {
    return { type: ORDER_SUCCESS, payload }
}

export const orderProductsFaildAction = (payload) => {
    return { type: ORDER_FAILED, payload }
}
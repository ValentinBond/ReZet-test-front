import { call, put, takeEvery } from 'redux-saga/effects';
import {
    getProductsSuccessAction,
    getProductsFailedAction,
    orderProductsFaildAction,
    orderProductsSuccessAction
} from '../actions/product';
import {
    GET_PODUCTS_REQUEST,
    ORDER_REQUEST
} from '../constants/product';
import { httpRequest } from '../../utils/http';


function* getProductsWorker(action) {
  try {
    const { data: { products } } = yield call(httpRequest, {
      url: action.payload.url,
      method: 'GET'
    });

    yield put(getProductsSuccessAction(products));
  } catch (error) {
    yield put(getProductsFailedAction(error));
  }
}

function* orderProductsWorker(action) {
  try {
    const { data: { message } } = yield call(httpRequest, {
      url: action.payload.url,
      data: action.payload.formData,
      method: 'POST'
    });

    alert(message);

    yield put(orderProductsSuccessAction(message));
  } catch (error) {
    yield put(orderProductsFaildAction(error));
  }
}

export default function* projectWatcher() {
  yield takeEvery(GET_PODUCTS_REQUEST, getProductsWorker);
  yield takeEvery(ORDER_REQUEST, orderProductsWorker);
}
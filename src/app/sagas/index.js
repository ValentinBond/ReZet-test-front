import { call, all } from 'redux-saga/effects';
import productSaga from './product';

export default function* rootSaga() {
  yield all({
    product: call(productSaga)
  });
}
import { takeEvery, put } from 'redux-saga/effects';
import { getData } from './data/api';
import * as actionTypes from './actions/constants';
import { initWeather } from './actions';

function *rootSaga(){
    yield takeEvery(actionTypes.INIT_LOAD, fetchInitialData);
// yield [
//     helloSaga(),
//     watchInitial()
//   ]
}

function *fetchInitialData(){
    const data = yield getData();
    console.log(data);
    yield put(initWeather(data));
}

export default rootSaga;
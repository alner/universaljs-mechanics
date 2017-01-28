import { takeLatest, call, put } from 'redux-saga/effects';
import { getData } from './data/api';
import * as actionTypes from './actions/constants';
import { initWeather, initLoadFailed } from './actions';

function *rootSaga(){
    yield takeLatest(actionTypes.INIT_LOAD, fetchInitialData);
// yield [
//     helloSaga(),
//     watchInitial()
//   ]
}

function *fetchInitialData(){
    try {    
        const data = yield call(getData);
        console.log(data);
        yield put(initWeather(data));
    } catch(error) {
        console.error(error);
        yield put(initLoadFailed(error));
    }
}

export default rootSaga;
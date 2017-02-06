import { takeLatest, takeEvery, call, put, select } from 'redux-saga/effects';
import * as api from './data/api';
import * as actionTypes from './actions/constants';
import { initWeather, initLoadFailed } from './actions';

function* rootSaga() {
    yield [
        initSaga(),
        addPlaceSaga()
    ]
// yield [
//     helloSaga(),
//     watchInitial()
//   ]
}

function* initSaga() {
    yield takeLatest(actionTypes.INIT_LOAD, fetchInitialData);
}

function* fetchInitialData(){
    try {    
        const data = yield call(api.getData);
        console.log(data);
        yield put(initWeather(data));
    } catch(error) {
        console.error(error);
        yield put(initLoadFailed(error));
    }
}


function* addPlaceSaga() {
    yield takeEvery(actionTypes.ADD_PLACE, tryToAddPlace);
}

const selectPlace = (state, place) => state.weather[place];

function* tryToAddPlace(action) {
    const place = action.place;
    console.log(place);
    try {
      // Check if place is already has been added to list ...
      const placeWeather = yield select(selectPlace, place);
      console.log(placeWeather);
      if(placeWeather && !placeWeather.isLoading) {
        yield put({type: actionTypes.PLACE_ALREADY_EXISTS, place });
      } else {
        const weatherData = yield call(api.getWeatherByPlace, place);
        console.log('ADD_PLACE_SUCCEDED', weatherData);
        yield put({type: actionTypes.ADD_PLACE_SUCCEDED, place: weatherData.place, payload: weatherData.data});
      }
   } catch (error) {
      yield put({type: actionTypes.ADD_PLACE_FAILED, place, error})
   }
}

export default rootSaga;
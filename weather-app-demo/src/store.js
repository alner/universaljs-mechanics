import { createStore,  applyMiddleware } from 'redux'; // , compose
import { syncHistoryWithStore } from 'react-router-redux'; // routerMiddleware
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import rootSaga from './saga';
import { initLoad } from './actions';

/*
import { routerMiddleware, push } from 'react-router-redux'

// Apply the middleware to the store
const middleware = routerMiddleware(browserHistory)
const store = createStore(
  reducers,
  applyMiddleware(middleware)
)

// Dispatch from anywhere like normal.
store.dispatch(push('/foo'))
*/

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 

const sagaMiddleware = createSagaMiddleware();      
const middlewares = [sagaMiddleware];
const store = createStore(
    rootReducer,
    //applyMiddleware(...middlewares)
    composeWithDevTools(
        applyMiddleware(...middlewares),
        // other store enhancers if any
    )
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //composeEnhancers(applyMiddleware(...middlewares))
);

if(module.hot) {
    module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers');
        store.replaceReducer(nextReducer);
    });
}

sagaMiddleware.run(rootSaga);
store.dispatch(initLoad()); // start initialization data process...

// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store);

export default store;

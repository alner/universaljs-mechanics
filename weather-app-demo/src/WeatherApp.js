import React from 'react';
import { Router, IndexRoute, Route } from 'react-router'; // hashHistory
import { Provider } from 'react-redux';
import MainContainer from './MainContainer';
import Places from './Places';
import About from './About';
import store, { history } from './store';
// import * as actions from './actions';
// import { getData } from './data/api';
// import { initWeather } from './actions';

//history.listen(location => console.log(location));
// store.dispatch(actions.changeLocation("/about"));
// getData().then((data) => {
//     console.log(data);
//     store.dispatch(initWeather(data));
// });

// history={browserHistory}
export default () => (
    <Provider store={store}>
        <Router history={history}> 
            <Route path="/" component={MainContainer}>
                <IndexRoute component={Places} />
                <Route path="/about" component={About} />
            </Route>
        </Router>
    </Provider>
)
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
//non boiler plate
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
// redux promise used to interpret network request
import promise from 'redux-promise';

// adding the middleware to interpret our promise from the network request
const createStoreWithMiddleware  = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
 document.getElementById('root'));
registerServiceWorker();

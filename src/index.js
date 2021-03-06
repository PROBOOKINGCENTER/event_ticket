import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './redux/Reducers';
const store = createStore(
    reducers,
    applyMiddleware(thunk)
)


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

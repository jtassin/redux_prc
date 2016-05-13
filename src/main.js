import ReactDOM from 'react-dom';
import React from 'react';
import {List as CustomerList} from './components/Wallet/Customer';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {Filter} from './services/Model';

const logger = createLogger();


console.log("Application Starting");

const customers = [{firstname: 'customer1', id: 1}, {firstname: 'customer2', id: 2}, {firstname: 'customer3', id: 3}];

const store = createStore(reducers,
    applyMiddleware(thunk, logger));

ReactDOM.render(<CustomerList store={store} filter={new Filter('wallet', 'customer', {}, {}, {})}/>, document.getElementById('content'));

console.log("Application Started");
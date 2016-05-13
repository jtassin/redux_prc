import ReactDOM from 'react-dom';
import React from 'react';
import {List as CustomerList} from './components/Wallet/Customer';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import {Filter} from './services/Model';

const logger = createLogger();


console.log("Application Starting");

const store = createStore(reducers,
    applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}>
    <div>
        <CustomerList  filter={new Filter('wallet', 'customer', {id: '>1'}, {}, {})}/>
        <CustomerList  filter={new Filter('wallet', 'customer', {id: '>0'}, {}, {})}/>
    </div>
</Provider>, document.getElementById('content'));

console.log("Application Started");
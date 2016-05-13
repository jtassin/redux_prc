import ReactDOM from 'react-dom';
import React from 'react';
import {List as CustomerList} from './components/Wallet/Customer';
import {applyMiddleware, createStore, compose} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import {Filter} from './services/Model';
import DevTools from './containers/DevTools';

const logger = createLogger();


console.log("Application Starting");

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunk, promise, logger),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);

const store = createStore(reducers, {}, enhancer);

ReactDOM.render(<Provider store={store}>
    <div>
        <CustomerList  filter={new Filter('wallet', 'customer', {id: '>1'}, {}, {})}/>
        <CustomerList  filter={new Filter('wallet', 'customer', {id: '>0'}, {}, {})}/>
        <DevTools />
    </div>
</Provider>, document.getElementById('content'));

console.log("Application Started");
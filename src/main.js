import ReactDOM from 'react-dom';
import React from 'react';
import {SmallView as CustomerSmallView} from './components/Wallet/Customer';

console.log("Application Starting");

const customer = {firstname: 'customer1'};

ReactDOM.render(<CustomerSmallView customer={customer}/>, document.getElementById('content'));

console.log("Application Started");
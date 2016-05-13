import ReactDOM from 'react-dom';
import React from 'react';
import {List as CustomerList} from './components/Wallet/Customer';

console.log("Application Starting");

const customers = [{firstname: 'customer1', id: 1}, {firstname: 'customer2', id: 2}, {firstname: 'customer3', id: 3}];

ReactDOM.render(<CustomerList customers={customers}/>, document.getElementById('content'));

console.log("Application Started");
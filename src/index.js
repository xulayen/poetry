import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//import DsrIndexPage from '../src/pages/dsr/index';
//import App from './App';
import RouteIndex from './route';

ReactDOM.render(<RouteIndex />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

let handler = Network.addListener('networkStatusChange', status => {
  console.log('Network status changed', status);
});
// To stop listening:
// handler.remove();

// Get the current network status
Network.getStatus().then(status => {
  console.log('Network.getStatus()', status);
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

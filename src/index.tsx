import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import { persistor, store } from './store/store';
import App from './App';

const { PUBLIC_URL } = process.env;

ReactDOM.render(
  <React.StrictMode>
    <App
      store={store}
      persistor={persistor}
      basename={PUBLIC_URL}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

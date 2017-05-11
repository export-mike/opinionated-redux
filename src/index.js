import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore, { Provider } from './lib/opinionated-redux';
import config from './state';
import App from './App';

const initialState = { name: 'test' };
const store = configureStore(config, initialState);

ReactDOM.render(
  <Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);

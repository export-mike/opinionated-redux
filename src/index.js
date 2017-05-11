import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store, { Provider } from './state';

const initialState = { name: 'test' };

ReactDOM.render(
  <Provider store={store(initialState)}>
		<App />
	</Provider>,
  document.getElementById('root')
);

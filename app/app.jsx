import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'components/Main';
import {Provider} from 'react-redux';

import * as actions from 'actions';
const store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state', store.getState());
})

require('./styles/main.scss');

ReactDOM.render(
	<Provider store={store}>
  		<Main />
  	</Provider>,
  	document.getElementById('app')
);
import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'components/Main';
import {Provider} from 'react-redux';

const store = require('configureStore').configure();
import TodoAPI from 'api/TodoAPI';
import * as actions from 'actions';

store.subscribe(() => {
	const state = store.getState();

	console.log('New state', state);

	TodoAPI.setTodos(state.todos);
})

const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

require('./styles/main.scss');

ReactDOM.render(
	<Provider store={store}>
  		<Main />
  	</Provider>,
  	document.getElementById('app')
);
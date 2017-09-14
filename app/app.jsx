import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'components/Main';

import * as actions from 'actions';
const store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state', store.getState());
})

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

require('./styles/main.scss');

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
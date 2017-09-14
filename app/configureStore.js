import {combineReducers, createStore, compose} from 'redux';
import * as reducers from 'reducers';

export function configure(initialState = {}) {
	const reducer = combineReducers({
		searchText: reducers.searchTextReducer,
		showCompleted: reducers.showCompletedReducer,
		todos: reducers.todosReducer
	});

	return createStore(reducer, initialState, compose(
		window.devToolsExpension ?  window.devToolsExpension() : f => f
	));
}
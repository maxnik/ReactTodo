import {combineReducers, createStore, compose} from 'redux';
import * as reducers from 'reducers';

export function configure() {
	const reducer = combineReducers({
		searchText: reducers.searchTextReducer,
		showCompleted: reducers.showCompletedReducer,
		todos: reducers.todosReducer
	});

	return createStore(reducer, compose(
		window.devToolsExpension ?  window.devToolsExpension() : f => f
	));
}
import uuid from 'uuid';

export function searchTextReducer(state = '', action) {
	switch (action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	}
}

export function showCompletedReducer(state = false, action) {
	switch (action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;
		default:
			return state;
	}
}

export function todosReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: uuid(),
					text: action.text,
					completed: false,
					createdAt: (new Date()).getTime(),
					completedAt: undefined
				}
			];
		case 'ADD_TODOS':
			return [
				...state,
				...action.todos
			];
		case 'TOGGLE_TODO':
			return state.map((todo) => {
				if (todo.id === action.id) {
					const nextCompleted = !todo.completed;

					return {
						...todo,
						completed: nextCompleted,
						completedAt: nextCompleted ? (new Date()).getTime() : undefined
					};
				} else {
					return todo;
				}
			});
		default:
			return state;
	}
}
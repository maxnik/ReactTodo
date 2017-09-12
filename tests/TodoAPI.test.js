import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should set valid todos array', () => {
		const todos = [{
			id: 23,
			text: 'test all files',
			completed: false
		}];
		TodoAPI.setTodos(todos);
		const actualTodos = TodoAPI.getTodos();

		expect(todos).toEqual(actualTodos);
	});

	it('should not set invalid todos array', () => {
		const badTodos = {a: 'b'};
		TodoAPI.setTodos(badTodos);

		expect(TodoAPI.getTodos()).toEqual([]);
	});

	it('should return empty array for bad localStorage data', () => {
		const actualTodos = TodoAPI.getTodos();

		expect(actualTodos).toEqual([]);
	});
});
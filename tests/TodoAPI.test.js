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

	describe('filterTodos', () => {
		const todos = [{
			id: 1,
			text: 'Some text here',
			completed: true
		}, {
			id: 2,
			text: 'Other text here',
			completed: false
		}, {
			id: 3,
			text: 'Some text here',
			completed: true
		}];

		it('should return all items if showCompleted is true', () => {
			const filteredTodos = TodoAPI.filterTodos(todos, true, '');

			expect(filteredTodos.length).toBe(todos.length);
		});

		it('should return only non-completed items if showCompleted is false', () => {
			const filteredTodos = TodoAPI.filterTodos(todos, false, '');

			expect(filteredTodos.length).toBe(1);
		});

		it('should sort by completed status', () => {
			const filteredTodos = TodoAPI.filterTodos(todos, true, '');

			expect(filteredTodos[0].completed).toBe(false);
		});

		it('should only return todos that match searchText', () => {
			const filteredTodos = TodoAPI.filterTodos(todos, true, 'some');

			expect(filteredTodos.length).toBe(2);
		})
	});
});
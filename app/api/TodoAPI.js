module.exports = {
	setTodos: (todos) => {
		if(Array.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: () => {
		const stringTodos = localStorage.getItem('todos');
		let todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch (e) { }

		return Array.isArray(todos) ? todos : [];
	},
	filterTodos: (todos, showCompleted, searchText) => {
		let filteredTodos = todos.filter((todo) => {
			const completedCondition = !todo.completed || showCompleted;

			let searchCondition = (searchText.length === 0) || (todo.text.toLowerCase().indexOf(searchText) != -1);

			return completedCondition && searchCondition;
		});

		filteredTodos.sort((a, b) => {
			if (!a.completed && b.completed) {
				return -1;
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		});

		return filteredTodos;
	}
};
import React from 'react';
import {connect} from 'react-redux';

import Todo from 'components/Todo';
import TodoAPI from 'api/TodoAPI';

export class TodoList extends React.Component {
	render() {
		const {todos, showCompleted, searchText} = this.props;
		const filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
		
		const renderTodos = () => {
			if (filterTodos.length === 0) {
				return (
					<p className="app__message">Nothing To Do</p>
				);
			}

			return filterTodos.map((todo) => {
				return <Todo key={todo.id} {...todo} />;
			});
		};

		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
}

export default connect( (state) => state )(TodoList);
import React from 'react';
import {connect} from 'react-redux';

import Todo from 'components/Todo';

export class TodoList extends React.Component {
	render() {
		const {todos} = this.props;
		const renderTodos = () => {
			if (todos.length === 0) {
				return (
					<p className="app__message">Nothing To Do</p>
				);
			}

			return todos.map((todo) => {
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

export default connect(
	(state) => {
		return {
			todos: state.todos
		}
	}
)(TodoList);
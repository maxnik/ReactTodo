import React from 'react';
import Todo from 'components/Todo';

export default class TodoList extends React.Component {
	render() {
		const {todos} = this.props;
		const renderTodos = () => {
			if (todos.length === 0) {
				return (
					<p className="app__message">Nothing To Do</p>
				);
			}

			return todos.map((todo) => {
				return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>;
			});
		};

		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
}
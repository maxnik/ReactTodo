import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		const {dispatch} = this.props;
		const todoText = this.refs.todoText.value;

		if (todoText.length > 0) {
			this.refs.todoText.value = '';
			dispatch(actions.addTodo(todoText));
		} else {
			this.refs.todoText.focus();
		}
	}

	render() {
		return (
			<div className="app__footer">
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input type="text" ref="todoText" className="form-control" placeholder="What do you need to do?"/>
					</div>

					<button className="btn btn-outline-primary btn-block">Add Todo</button>
				</form>
			</div>
		);
	}
}

export default connect()(AddTodo);
import React from 'react';
import {format} from 'date-fns';

export default class Todo extends React.Component {
	render() {
		const {id, text, completed, createdAt, completedAt} = this.props;

		const renderDate = () => {
			let message = "Created ";
			let timestamp = createdAt;

			if (completed) {
				message = 'Completed ';
				timestamp = completedAt;
			}
			return message + format(new Date(timestamp), 'MMMM Do, YYYY @ HH:mm');
		};

		return (
			<div className="form-group">
				<label className="form-check-label">
					<input type="checkbox" className="form-check-input" checked={completed} onChange={() => {
						this.props.onToggle(id);
					}}/>
					<p>{text}</p>
					<p>{renderDate()}</p>
				</label>
			</div>
		);
	}
}
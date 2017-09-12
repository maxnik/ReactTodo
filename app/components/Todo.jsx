import React from 'react';

export default class Todo extends React.Component {
	render() {
		const {id, text, completed} = this.props;
		return (
			<div className="form-group">
				<label className="form-check-label">
					<input type="checkbox" className="form-check-input" checked={completed} onChange={() => {
						this.props.onToggle(id);
					}}/>
					{text}
				</label>
			</div>
		);
	}
}
import React from 'react';

export default class TodoSearch extends React.Component {
	constructor(props) {
		super(props);

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch() {
		const showCompleted = this.refs.showCompleted.checked;
		const seachText = this.refs.seachText.value;

		this.props.onSearch(showCompleted, seachText);
	}

	render() {
		return (
			<div>
				<div className="form-group">
					<input type="search" ref="seachText" className="form-control" placeholder="Search todos" onChange={this.handleSearch}/>
				</div>
				<div className="form-check">
					<label className="form-check-label">
						<input type="checkbox" ref="showCompleted" className="form-check-input" value="" onChange={this.handleSearch}/>
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
}
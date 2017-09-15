import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions';

export class TodoSearch extends React.Component {
	handleSearch = (e) => {
		const searchText = this.refs.searchText.value;

		this.props.dispatch(actions.setSearchText(searchText));
	}

	handleShowCompleted = (e) => this.props.dispatch(actions.toggleShowCompleted())

	render() {
		const {showCompleted, searchText} = this.props;

		return (
			<div className="app__header">
				<div className="form-group">
					<input type="search" ref="searchText" className="form-control" placeholder="Search todos" value={searchText} onChange={ this.handleSearch }/>
				</div>
				<div className="form-check">
					<label className="form-check-label">
						<input type="checkbox" ref="showCompleted" className="form-check-input" checked={showCompleted} value="" onChange={ this.handleShowCompleted }/>
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {
 			showCompleted: state.showCompleted,
 			searchText: state.searchText
		};
	}
)(TodoSearch);
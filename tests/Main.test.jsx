import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import Main from 'Main';

describe('Main', () => {
	it('should add todo to the todos state on handleAddTodo', () => {
		const todoText = 'test text';
		const wrapper = shallow(<Main/>);
		const todoApp = wrapper.instance();
		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	});

	it('should toggle completed value when handleToggle called', () => {
		const todoData = {
			id: 11,
			text: 'Test features',
			completed: false
		};
		const wrapper = shallow(<Main/>);
		const todoApp = wrapper.instance();
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(todoData.id);
		expect(todoApp.state.todos[0].completed).toBe(true);
	});
});
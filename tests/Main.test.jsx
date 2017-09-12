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
		expect(typeof todoApp.state.todos[0].createdAt).toBe('number');
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
		expect(typeof todoApp.state.todos[0].completedAt).toBe('number');
	});

	it('should remove completedAt when toggled to non-completed', () => {
		const todoData = {
			id: 11,
			text: 'Test features',
			completed: true,
			createdAt: 0,
			completedAt: 0
		};
		const wrapper = shallow(<Main/>);
		const todoApp = wrapper.instance();
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.handleToggle(todoData.id);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toBe(undefined);
	});
});
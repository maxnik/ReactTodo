import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
	it('should render one Todo component for each todo item', () => {
		const todos = [
			{
				id: 1,
				text: 'Do something'
			},
			{
				id: 2,
				text: 'Check mail'
			}
		];
		const wrapper = shallow(<TodoList todos={todos}/>);

		expect(wrapper.find(Todo).length).toBe(todos.length);
	});

	it('should render empty message if no todos', () => {
		const wrapper = shallow(<TodoList todos={[]}/>);

		expect(wrapper.find('.app__message').length).toBe(1);
	});
});
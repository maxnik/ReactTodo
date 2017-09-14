import React from 'react';
import {Provider} from 'react-redux';
import expect from 'expect';
import {shallow, mount} from 'enzyme';

import ConnectedTodoList, {TodoList} from 'components/TodoList';
import Todo from 'components/Todo';
import {configure} from 'configureStore';

describe('TodoList', () => {
	it('should render one Todo component for each todo item', () => {
		const todos = [
			{
				id: 1,
				text: 'Do something',
				completed: false,
				completedAt: undefined,
				createdAt: 500
			},
			{
				id: 2,
				text: 'Check mail',
				completed: false,
				completedAt: undefined,
				createdAt: 500
			}
		];
		const store = configure({ todos });
		const wrapper = mount(
			<Provider store={store}>
				<ConnectedTodoList/>
			</Provider>
		);

		expect(wrapper.find(Todo).length).toBe(todos.length);
	});

	it('should render empty message if no todos', () => {
		const wrapper = shallow(<TodoList todos={[]}/>);

		expect(wrapper.find('.app__message').length).toBe(1);
	});
});
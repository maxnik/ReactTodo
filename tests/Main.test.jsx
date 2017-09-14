import React from 'react';
import {Provider} from 'react-redux';
import expect from 'expect';
import {mount} from 'enzyme';

import Main from 'components/Main';
import TodoList from 'components/TodoList';

import {configure} from 'configureStore';

describe('Main', () => {
	it('should render TodoList', () => {
		const store = configure();
		const wrapper = mount(
			<Provider store={store}>
				<Main/>
			</Provider>
		);

		expect(wrapper.find(TodoList).length).toBe(1);
	});
});
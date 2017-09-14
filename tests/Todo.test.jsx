import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import sinon from 'sinon';

import {Todo} from 'components/Todo';

describe('Todo', () => {
	it('should dispatch TOGGLE_TODO action on click', () => {
		const todoData = {
			id: 199,
			text: 'Write Todo.test.jsx test',
			completed: true
		};
		const spy = sinon.spy();
		const wrapper = mount(<Todo {...todoData} dispatch={spy}/>);
		wrapper.find('input').simulate('change');

		expect(spy.args[0]).toEqual([
			{
				type: 'TOGGLE_TODO',
				id: todoData.id
			}
		]);
	});
});
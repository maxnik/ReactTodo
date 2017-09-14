import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import sinon from 'sinon';

import Todo from 'components/Todo';

describe('Todo', () => {
	it('should call onToggle prop with id on click', () => {
		const todoData = {
			id: 199,
			text: 'Write Todo.test.jsx test',
			completed: true
		};
		const spy = sinon.spy();
		const wrapper = mount(<Todo {...todoData} onToggle={spy}/>);
		wrapper.find('input').simulate('change');

		expect(spy.args[0]).toEqual([todoData.id]);
	});
});
import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import sinon from 'sinon';

import {AddTodo} from 'components/AddTodo';

describe('AddTodo', () => {
	it('should dispatch ADD_TODO when valid todo text', () => {
		const todoText = 'Check mail';
		const action = {
			type: 'ADD_TODO',
			text: todoText
		}
		const spy = sinon.spy();
		const wrapper = mount(<AddTodo dispatch={spy}/>);

		wrapper.instance().refs.todoText.value = todoText;
		wrapper.find('form').simulate('submit');
		expect(spy.args[0]).toEqual([ action ]);
	});

	it('should not dispatch ADD_TODO when invalid todo text', () => {
		const spy = sinon.spy();
		const wrapper = mount(<AddTodo dispatch={spy}/>);

		wrapper.instance().refs.todoText.value = '';
		wrapper.find('form').simulate('submit');
		expect(spy.callCount).toBe(0);
	});
});
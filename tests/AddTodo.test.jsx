import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import sinon from 'sinon';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
	it('should call onAddTodo prop on valid data', () => {
		const todoText = 'Check mail';
		const spy = sinon.spy();
		const wrapper = mount(<AddTodo onAddTodo={spy}/>);

		wrapper.instance().refs.todoText.value = todoText;
		wrapper.find('form').simulate('submit');
		expect(spy.args[0]).toEqual([todoText]);
	});

	it('should not call onAddTodo prop when invalid input', () => {
		const spy = sinon.spy();
		const wrapper = mount(<AddTodo onAddTodo={spy}/>);

		wrapper.instance().refs.todoText.value = '';
		wrapper.find('form').simulate('submit');
		expect(spy.callCount).toBe(0);
	});
});
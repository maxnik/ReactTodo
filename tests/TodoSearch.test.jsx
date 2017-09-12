import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import sinon from 'sinon';

import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
	it('should call onSearch with entered input text', () => {
		const searchText = 'Dog'
		const spy = sinon.spy();
		const wrapper = mount(<TodoSearch onSearch={spy}/>);
		wrapper.instance().refs.searchText.value = searchText;
		wrapper.find('input[type="search"]').simulate('change');

		expect(spy.args[0]).toEqual([false, searchText]);
	});

	it('should call onSearch with proper checked value', () => {
		const spy = sinon.spy();
		const wrapper = mount(<TodoSearch onSearch={spy}/>);
		wrapper.instance().refs.showCompleted.checked = true;
		wrapper.find('input[type="checkbox"]').simulate('change');

		expect(spy.args[0]).toEqual([true, '']);
	});
});
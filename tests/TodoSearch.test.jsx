import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import sinon from 'sinon';

import {TodoSearch} from 'components/TodoSearch';

describe('TodoSearch', () => {
	it('should dispatch SET_SEARCH_TEXT on input change', () => {
		const searchText = 'Dog'
		const action = {
			type: 'SET_SEARCH_TEXT',
			searchText
		};
		const spy = sinon.spy();
		const wrapper = mount(<TodoSearch dispatch={spy}/>);
		wrapper.instance().refs.searchText.value = searchText;
		wrapper.find('input[type="search"]').simulate('change');

		expect(spy.args[0]).toEqual([ action ]);
	});

	it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
		const spy = sinon.spy();
		const action = { 
			type: 'TOGGLE_SHOW_COMPLETED'
		}
		const wrapper = mount(<TodoSearch dispatch={spy}/>);
		wrapper.instance().refs.showCompleted.checked = true;
		wrapper.find('input[type="checkbox"]').simulate('change');

		expect(spy.args[0]).toEqual([ action ]);
	});
});
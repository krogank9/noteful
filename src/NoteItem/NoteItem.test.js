import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NoteItem from './NoteItem'

describe(`NoteItem component`, () => {
	const props = {
		note: {
			id: 'a',
			name: 'test-class-name',
			modified: new Date(2018, 12, 15),
		}
	}

	it('renders a blank NoteItem by default', () => {
		const wrapper = shallow(<NoteItem />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('renders the NoteItem given props', () => {
		const wrapper = shallow(<NoteItem {...props} />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})

import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NoteMain from './NoteMain'

describe(`NoteMain component`, () => {
	const props = {
		note: {
			id: 'a',
			name: 'test-class-name',
			modified: new Date(2018, 12, 15),
		}
	}

	it('renders a empty NoteMain by default', () => {
		const wrapper = shallow(<NoteMain />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('renders NoteMain given props', () => {
		const wrapper = shallow(<NoteMain {...props} />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})

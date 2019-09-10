import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NoteItem from './NoteItem'

describe(`NoteItem component`, () => {
	const props = {
		note: {
			id: 'a',
			name: 'test-class-name',
			modified: "2019-01-03T00:00:00.000Z",
		}
	}

	it('renders the NoteItem given props', () => {
		const wrapper = shallow(<NoteItem {...props} />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})

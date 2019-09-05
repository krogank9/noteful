import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MainSidebar from './MainSidebar'

describe(`MainSidebar component`, () => {
	const props = {
		"folders": [
			{
				"id": "1",
				"name": "folder A"
			},
			{
				"id": "2",
				"name": "folder B"
			},
			{
				"id": "3",
				"name": "folder C"
			}
		],
	}

	it('renders with no props', () => {
		const wrapper = shallow(<MainSidebar />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('renders the MainSidebar given props', () => {
		const wrapper = shallow(<MainSidebar {...props} />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})

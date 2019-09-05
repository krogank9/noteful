import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FolderList from './FolderList'

describe(`FolderList component`, () => {
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
		const wrapper = shallow(<FolderList />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('renders the FolderList given props', () => {
		const wrapper = shallow(<FolderList {...props} />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})

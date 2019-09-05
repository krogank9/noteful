import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NoteSidebar from './NoteSidebar'

describe(`NoteSidebar component`, () => {
	const props = {
		folder: {
			"id": "1",
			"name": "test note folder name"
		}
	}

	it('renders with no props', () => {
		const wrapper = shallow(<NoteSidebar />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('renders the note sidebar with folder name given props', () => {
		const wrapper = shallow(<NoteSidebar {...props} />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})

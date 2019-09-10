import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FolderList from './FolderList'

import NotefulContext from '../NotefulContext.js';
import DummyStore from "../dummy-store.js"

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
	
	const contextValue = {
		...DummyStore
	}

	it('renders with no props', () => {
		const wrapper = shallow(
			<NotefulContext.Provider value={contextValue}>
				<FolderList />
			</NotefulContext.Provider>)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('renders the FolderList given props', () => {
		const wrapper = shallow(
			<NotefulContext.Provider value={contextValue}>
				<FolderList {...props} />
			</NotefulContext.Provider>
		)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})

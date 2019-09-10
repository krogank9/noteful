import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NoteMain from './NoteMain'

import NotefulContext from '../NotefulContext.js';
import DummyStore from "../dummy-store.js"

describe(`NoteMain component`, () => {
	const props = {
		note: {
			id: 'a',
			name: 'test-class-name',
			modified: new Date(2018, 12, 15),
		}
	}
	
	const contextValue = {
		...DummyStore
	}

	it('renders a empty NoteMain by default', () => {
		const wrapper = shallow(
			<NotefulContext.Provider value={contextValue}>
				<NoteMain />
			</NotefulContext.Provider>
		)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('renders NoteMain given props', () => {
		const wrapper = shallow(
			<NotefulContext.Provider value={contextValue}>
				<NoteMain {...props} />
			</NotefulContext.Provider>
		)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})

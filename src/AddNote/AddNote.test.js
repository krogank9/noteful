import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddNote from './AddNote';
import { BrowserRouter } from "react-router-dom";

describe(`AddNote component`, () => {
	
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(
			<BrowserRouter>
				<AddNote />
			</BrowserRouter>,
			div
		);
	  ReactDOM.unmountComponentAtNode(div);
	});
	
	it('renders correctly matching snapshot', () => {
		const wrapper = shallow(
			<BrowserRouter>
				<AddNote />
			</BrowserRouter>
		)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

});

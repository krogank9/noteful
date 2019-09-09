import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddFolder from './AddFolder';
import { BrowserRouter } from "react-router-dom";

describe(`AddFolder component`, () => {
	
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(
			<BrowserRouter>
				<AddFolder />
			</BrowserRouter>,
			div
		);
	  ReactDOM.unmountComponentAtNode(div);
	});
	
	it('renders correctly matching snapshot', () => {
		const wrapper = shallow(
			<BrowserRouter>
				<AddFolder />
			</BrowserRouter>
		)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

});

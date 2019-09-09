import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import BrowseScreen from './BrowseScreen';
import { BrowserRouter } from "react-router-dom";

describe(`BrowseScreen component`, () => {
	
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(
			<BrowserRouter>
				<BrowseScreen />
			</BrowserRouter>,
			div
		);
	  ReactDOM.unmountComponentAtNode(div);
	});
	
	it('renders correctly matching snapshot', () => {
		const wrapper = shallow(
			<BrowserRouter>
				<BrowseScreen />
			</BrowserRouter>
		)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

});

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import AppError from './AppError';
import { BrowserRouter } from "react-router-dom";

describe(`AppError component`, () => {

	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(
			<BrowserRouter>
				<AppError>
					<App />
				</AppError>
			</BrowserRouter>,
			div
		);
	  ReactDOM.unmountComponentAtNode(div);
	});

});

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter } from "react-router-dom";

import AppError from './AppError/AppError';

ReactDOM.render(
	<BrowserRouter>
		<AppError>
			<App />
		</AppError>
	</BrowserRouter>,
	document.getElementById('root')
);

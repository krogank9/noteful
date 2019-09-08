import React from 'react';
import { Route, Switch } from 'react-router-dom';


class AppError extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}
	
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}
	
	render() {
		if (this.state.hasError) {      
			return (
				<main>
					<h1>Error connecting to Noteful server.</h1>
					<p>Please ensure you are connected to the internet, the server is up and running, and then try refreshing the page.</p>
				</main>
			);
		}
		return this.props.children;
	}
}

export default AppError;

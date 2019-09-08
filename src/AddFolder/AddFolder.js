import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { matchPath, withRouter } from 'react-router';

import NotefulContext from '../NotefulContext.js';

class AddFolder extends React.Component {
	static contextType = NotefulContext;
	
	requestAddFolder = (name) => {
		fetch(`http://localhost:9090/folders`, {
			method: "POST", 
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({"name": name})
		})
			.then(response => {
				if(response.ok) 
					return response.json();
				else
					throw Error(response.statusText);
			})
			.then(json => {
				this.context.onAddFolder(json);
			})
			.catch(err => alert(`Error adding folder "${name}", ${err}`));
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		this.requestAddFolder(event.target.folderName.value);
	}
	
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h2>Add folder:</h2>
					<label htmlFor="folderName">Folder Name:</label>
					<input type="text" id="folderName" required />
					<input type="submit" value="Add folder" />
				</form>
			</div>
		);
	}
}

export default withRouter(AddFolder);

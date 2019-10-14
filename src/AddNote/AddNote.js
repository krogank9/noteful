import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { matchPath, withRouter } from 'react-router';

import NotefulContext from '../NotefulContext.js';

class AddNote extends React.Component {
	static contextType = NotefulContext;
	
	requestAddNote = (name, content, folder_id) => {
		fetch(`http://localhost:8000/api/notes`, {
			method: "POST", 
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({"name": name, "content": content, "folder_id": folder_id})
		})
			.then(response => {
				if(response.ok) 
					return response.json();
				else
					throw Error(response.statusText);
			})
			.then(json => {
				this.context.onAddNote(json);
			})
			.catch(err => alert(`Error adding note "${name}" to folder "${folder_id}", ${err}`));
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		if(event.target.noteName.value.length === 0) {
			alert("Note name can't be left blank!");
			return;
		}
		this.requestAddNote(
			event.target.noteName.value,
			event.target.noteContent.value,
			event.target.folderSelect.value
		);
	}
	
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h2>Add note:</h2>
					<label htmlFor="noteName">Note name:</label>
					<input type="text" id="noteName" placeholder="Name" required />
					
					<br />
					
					<label htmlFor="folderSelect">Folder:</label>
					<select id="folderSelect" required>
						{this.context.folders.map(folder => {
							return (
								<option value={folder.id} key={folder.id}>{folder.name}</option>
							);
						})}
					</select>
					
					<br />
					
					<label htmlFor="noteContent">Note content:</label>
					<input type="textbox" id="noteContent" placeholder="Content" />
					
					<br />
					
					<input type="submit" value="Add note" />
				</form>
			</div>
		);
	}
}

export default withRouter(AddNote);

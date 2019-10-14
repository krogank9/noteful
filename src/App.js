import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { matchPath, withRouter } from 'react-router';

import NotefulContext from './NotefulContext.js';

import BrowseScreen from './BrowseScreen/BrowseScreen.js';
import AddFolder from './AddFolder/AddFolder.js';
import AddNote from './AddNote/AddNote.js';

class App extends React.Component {
	
	state = {
		folders: [],
		notes: [],
		loadingFinished: false,
		loadingFailed: false,
		errorMessage: null
	};
	
	constructor() {
		super();
		window.requestAddFolder = this.requestAddFolder
	}
	
	getFolderFromId = (folderId) => {
		let found = this.state.folders.find(folder => parseInt(folder.id)===parseInt(folderId));
		return found;
	}
	
	getNoteFromId = (noteId) => {
		let found = this.state.notes.find(note => parseInt(note.id)===parseInt(noteId));
		console.log("found: ");
		console.log(found);
		return found;
	}
	
	onDeleteNote = (id) => {
		this.setState({notes: this.state.notes.filter(note => parseInt(note.id) !== parseInt(id))});
	}
	
	onAddFolder = (folder) => {
		const newFolders = [ ...this.state.folders, folder ];
		this.setState({"folders": newFolders});
		this.props.history.push(`/folder/${folder.id}`);
	}
	
	onAddNote = (note) => {
		const newNotes = [ ...this.state.notes, note ];
		this.setState({"notes": newNotes});
		this.props.history.push(`/note/${note.id}`);
	}
	
	render() {
		if( this.state.loadingFailed ) {
			throw new Error(this.state.errorMessage);
		}
		
		const contextValue = {
			...(this.state),
			"getNoteFromId": this.getNoteFromId,
			"getFolderFromId": this.getFolderFromId,
			"onDeleteNote": this.onDeleteNote,
			"onAddFolder": this.onAddFolder,
			"onAddNote": this.onAddNote,
		}
		
		let mainContents;
		
		if(this.state.loadingFinished) {
			mainContents = (
				<Switch>
					<Route
						exact path="/add-folder"
						component={AddFolder}
					/>
					<Route
						exact path="/add-note"
						component={AddNote}
					/>
					<Route
						component={BrowseScreen}
					/>
				</Switch>
			);
		}
		else {
			mainContents = <p>Please wait, loading...</p>;
		}
		
		return (
			<NotefulContext.Provider value={contextValue}>
				<header>
					<h1><Link to="/">Noteful</Link></h1>
				</header>
				<main>
					{mainContents}
				</main>
			</NotefulContext.Provider>
		);
	}
	
	fetchNotesList = () => {
		return fetch("http://localhost:8000/api/notes")
			.then(response => {
				if(response.ok)
					return response.json();
				else
					throw Error(response.statusText);
			})
	}
	
	fetchFolderList = () => {
		return fetch("http://localhost:8000/api/folders")
			.then(response => {
				if(response.ok)
					return response.json();
				else
					throw Error(response.statusText);
			});
	}
	
	componentDidMount() {
		Promise.all([this.fetchNotesList(), this.fetchFolderList()])
			.then((values) => {
				this.setState({
					notes: values[0],
					folders: values[1],
					loadingFinished: true,
					loadingFailed: false
				});
			})
			.catch(err => {
				this.setState({
					loadingFinished: true,
					loadingFailed: true,
					errorMessage: err
				});
			});
	}
}

export default withRouter(App);

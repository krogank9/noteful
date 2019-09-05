import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { matchPath, withRouter } from 'react-router';

import NotefulContext from './NotefulContext.js';

import DummyStore from './dummy-store.js';

import NoteSidebar from './NoteSidebar/NoteSidebar.js';
import MainSidebar from './MainSidebar/MainSidebar.js';

import MainMain from './MainMain/MainMain.js';
import NoteMain from './NoteMain/NoteMain.js';

class App extends React.Component {
	
	state = {
		folders: [],
		notes: [],
	};
	
	constructor() {
		super();
	}
	
	getFolderFromId = (folderId) => {
		let found = this.state.folders.find((folder) => folder.id===folderId);
		return found;
	}
	
	getNoteFromId = (noteId) => {
		let found = this.state.notes.find((note) => note.id===noteId);
		return found;
	}
	
	render() {
		const contextValue = {
			...(this.state),
			"getNoteFromId": this.getNoteFromId,
			"getFolderFromId": this.getFolderFromId,
			"requestDeleteNote": this.requestDeleteNote
		}
		return (
			<NotefulContext.Provider value={contextValue}>
				<header>
					<h1><Link to="/">Noteful</Link></h1>
				</header>
				<main>
					<div className="sidebar">
						<Switch>
							{/*
								display sidebar with just a back button when 
								viewing a note
							*/}
							<Route
								exact path='/note/:noteId'
								component={NoteSidebar}
							/>
							
							{/*
								display the sidebar with list of folders on 
								main screen listing all notes. if any folder
								is selected it will be highlighted.
							*/}
							<Route
								exact path={["/folder/:folderId", "/"]}
								component={MainSidebar}
							/>
						</Switch>
					</div>
					<div className="main">
						<Switch>
							{/*
								display note page with the note title, text,
								info, and an option to delete the note
							*/}
							<Route
								exact path='/note/:noteId'
								component={NoteMain}
							/>
							
							{/*
								display the list of notes, if any folder is 
								selected, filter them and only display the
								notes in the current folder
							*/}
							<Route
								exact path={["/folder/:folderId", "/"]}
								component={MainMain}
							/>
						</Switch>
					</div>
				</main>
			</NotefulContext.Provider>
		);
	}
	
	fetchNotesList = () => {
		return fetch("http://localhost:9090/notes")
			.then(response => {
				if(response.ok)
					return response.json();
				else
					throw Error(response.statusText);
			})
	}
	
	fetchFolderList = () => {
		return fetch("http://localhost:9090/folders")
			.then(response => {
				if(response.ok)
					return response.json();
				else
					throw Error(response.statusText);
			});
	}
	
	requestDeleteNote = (id) => {
		fetch(`http://localhost:9090/notes/${id}`, {
			method: "DELETE", 
			headers: {'Content-Type': 'application/json'}
		})
			.then(response => {
				if(response.ok) {
					const isOnNotePage = !!matchPath(
						this.props.location.pathname, 
						'/note/:noteId'
					);
					if(isOnNotePage)
						this.props.history.push("/");
					
					let newNotes = this.state.notes.filter(note => note.id !== id);
					this.setState({"notes": newNotes});
				}
				else
					throw Error(response.statusText);
			})
			.catch(err => alert(`Error deleting delete note ${id}, ${err}`));
	}
	
	componentDidMount() {
		Promise.all([this.fetchNotesList(), this.fetchFolderList()])
			.then((values) => {
				this.setState({notes: values[0], folders: values[1]});
			})
			.catch(err => alert(`Error connecting to Noteful server ${err}`));
	}
}

export default withRouter(App);

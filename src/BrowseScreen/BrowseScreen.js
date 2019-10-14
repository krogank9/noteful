import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotefulContext from '../NotefulContext.js';

import NoteSidebar from '../NoteSidebar/NoteSidebar.js';
import MainSidebar from '../MainSidebar/MainSidebar.js';

import MainMain from '../MainMain/MainMain.js';
import NoteMain from '../NoteMain/NoteMain.js';

class BrowseScreen extends React.Component {
	render() {
		return (
			<>
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
							exact path={["/folder/:folder_id", "/"]}
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
							exact path={["/folder/:folder_id", "/"]}
							component={MainMain}
						/>
					</Switch>
				</div>
			</>
		);
	}
}

export default BrowseScreen;

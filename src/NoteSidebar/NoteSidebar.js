import React from 'react';
import { withRouter } from 'react-router';

import NotefulContext from '../NotefulContext.js';

class NoteSidebar extends React.Component {
	static contextType = NotefulContext;
	
	render() {
		let noteId = this.props.match.params.noteId;
		let note = this.context.getNoteFromId(noteId);
		let folderId = note && note.folderId;
		let folder = this.context.getFolderFromId(folderId);
		
		return (
			<div>
				<button onClick={() => this.props.history.goBack()}>Go back</button>
				<h2>Folder {(folder && folder.name) || "No folder"}</h2>
			</div>
		);
	}
}

export default withRouter(NoteSidebar);

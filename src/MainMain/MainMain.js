import React from 'react';

import NoteItem from '../NoteItem/NoteItem.js';

import NotefulContext from "../NotefulContext.js";

class MainMain extends React.Component {
	static contextType = NotefulContext;
	
	static defaultProps = {
		notes: []
	};
	
	render() {
		let folderId = this.props.match.params.folderId;
		// Show only notes in current folder
		let filteredNotes = this.context.notes.filter((note) => {
			if (!folderId)
				return true;
			else
				return note.folderId === folderId;
		});
		
		return (
			<div>
				<ul className="noteList">
					{filteredNotes.map(note => {
						return <NoteItem key={note.id} note={note} />
					})}
				</ul>
				<button>Add note</button>
			</div>
		);
	}
}

export default MainMain;

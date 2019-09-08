import React from 'react';

import NoteItem from '../NoteItem/NoteItem.js';
import NotefulContext from "../NotefulContext.js";

class NoteMain extends React.Component {
	static contextType = NotefulContext;
	
	onDeleteNote = (id) => {
		this.props.history.push("/");
	}
	
	render() {
		let noteId = this.props.match.params.noteId;
		let note = this.context.getNoteFromId(noteId);
		
		return (
			<div>
				{ note && <>
					<NoteItem note={note} onDeleteNote={this.onDeleteNote} />
					<p>{note.content}</p>
				</>}	
			</div>
		);
	}
}

export default NoteMain;

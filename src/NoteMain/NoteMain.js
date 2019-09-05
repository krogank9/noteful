import React from 'react';

import NoteItem from '../NoteItem/NoteItem.js';
import NotefulContext from "../NotefulContext.js";

class NoteMain extends React.Component {
	static contextType = NotefulContext;
	
	static defaultProps = {
		note: {}
	};
	
	render() {
		let noteId = this.props.match.params.noteId;
		let note = this.context.getNoteFromId(noteId);
		
		return (
			<div>
				<NoteItem note={note} />
				<p>{note.content}</p>
			</div>
		);
	}
}

export default NoteMain;

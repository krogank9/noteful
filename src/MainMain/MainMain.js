import React from 'react';

import './MainMain.css';

import PropTypes from 'prop-types';

import NoteItem from '../NoteItem/NoteItem.js';

import NotefulContext from "../NotefulContext.js";

class MainMain extends React.Component {
	static contextType = NotefulContext;
	
	static defaultProps = {
		notes: []
	};
	
	render() {
		let folder_id = this.props.match.params.folder_id;
		// Show only notes in current folder
		let filteredNotes = this.context.notes.filter((note) => {
			if (!folder_id)
				return true;
			else
				return parseInt(note.folder_id) === parseInt(folder_id);
		});
		
		let noteCount = filteredNotes.length;
		
		let noteList = (
			<ul className="noteList">
				{filteredNotes.map(note => {
					return (
						<li key={note.id}>
							<NoteItem note={note} />
						</li>
					);
				})}
			</ul>
		);
		
		return (
			<div>
				{noteCount > 0 ? noteList : <p>No notes to display. Create one below.</p>}
				<button onClick={() => this.props.history.push("/add-note")}>Add note</button>
			</div>
		);
	}
}

MainMain.propTypes = {
	note: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		modified: PropTypes.string.isRequired,
		folder_id: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired
	}))
};

export default MainMain;

import React from 'react';
import { Link } from 'react-router-dom';
import './NoteItem.css';
import PropTypes from 'prop-types';
import NotefulContext from "../NotefulContext.js";

class NoteItem extends React.Component {
	static contextType = NotefulContext;
	
	static defaultProps = {
		onDeleteNote: () => {}
	}
	
	requestDeleteNote = (id) => {
		fetch(`http://localhost:8000/api/notes/${id}`, {
			method: "DELETE", 
			headers: {'Content-Type': 'application/json'}
		})
			.then(response => {
				if(response.ok) {
					this.context.onDeleteNote(id);
					this.props.onDeleteNote(id);
				}
				else
					throw Error(response.statusText);
			})
			.catch(err => alert(`Error deleting delete note ${id}, ${err}`));
	}
	
	render() {
		return (
			<div className="noteItem">
				<h2>
					<Link to={"/note/"+this.props.note.id}>
						{this.props.note.name}
					</Link>
				</h2>
				{ this.props.note.modified && <p>Date modified {this.props.note.modified}</p> }
				<button
					onClick={() => this.requestDeleteNote(this.props.note.id)}
				>
					Delete note
				</button>
			</div>
		);
	}
}

NoteItem.propTypes = {
	note: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		modified: PropTypes.string,
		folder_id: PropTypes.string,
		content: PropTypes.string
	}),
	onDeleteNote: PropTypes.func
};

export default NoteItem;

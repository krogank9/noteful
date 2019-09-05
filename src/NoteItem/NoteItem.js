import React from 'react';
import { Link } from 'react-router-dom';
import './NoteItem.css';
import NotefulContext from "../NotefulContext.js";

class App extends React.Component {
	static contextType = NotefulContext;
	
	static defaultProps = {
		note: {}
	};
	
	render() {
		return (
			<li className="noteItem">
				<h2>
					<Link to={"/note/"+this.props.note.id}>
						{this.props.note.name}
					</Link>
				</h2>
				<p>Date modified {this.props.note.modified}</p>
				<button
					onClick={() => this.context.requestDeleteNote(this.props.note.id)}
				>
					Delete note
				</button>
			</li>
		);
	}
}

export default App;

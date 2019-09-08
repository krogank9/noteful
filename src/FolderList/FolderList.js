import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './FolderList.css';

import NotefulContext from '../NotefulContext.js';

class FolderList extends React.Component {
	
	static contextType = NotefulContext;
	
	render() {
		let folderCount = this.context.folders.length;
		
		let folderList = (
			<ul className="folderList">
				{this.context.folders.map(folder => {
					return (
						<li key={folder.id}>
							<NavLink className="folderButton" to={"/folder/"+folder.id}>
								{folder.name}
							</NavLink>
						</li>
					);
				})}
			</ul>
		);
		
		let noFolderMessage = (<p>No folders to display. Create one below.</p>);
		
		return (
			folderCount > 0 ? folderList : noFolderMessage
		);
	}
}

export default FolderList;

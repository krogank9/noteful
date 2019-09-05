import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './FolderList.css';

import NotefulContext from '../NotefulContext.js';

class FolderList extends React.Component {
	
	static contextType = NotefulContext;
	
	render() {
		return (
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
	}
}

export default FolderList;

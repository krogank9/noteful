import React from 'react';
import { withRouter } from 'react-router';

import FolderList from '../FolderList/FolderList.js';


class MainSidebar extends React.Component {
	
	render() {
		return (
			<div>
				<FolderList />
				<button onClick={() => this.props.history.push("/add-folder")}>Add folder</button>
			</div>
		);
	}
}

export default withRouter(MainSidebar);

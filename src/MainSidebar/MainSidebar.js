import React from 'react';

import FolderList from '../FolderList/FolderList.js';


class MainSidebar extends React.Component {
	
	render() {
		return (
			<div>
				<FolderList />
				<button>Add folder</button>
			</div>
		);
	}
}

export default MainSidebar;

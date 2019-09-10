import React from 'react'

const NotefulContext = React.createContext({
	folders: [],
	notes: [],
	"getNoteFromId": () => {},
	"getFolderFromId": () => {},
	"onDeleteNote": () => {},
	"onAddFolder": () => {},
	"onAddNote": () => {},
})

export default NotefulContext

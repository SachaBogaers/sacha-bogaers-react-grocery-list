import React from 'react'
import ListItem from './ListItem'

function List() {
	return (
		<ul>
			<ListItem
				title="Curry paste" />
			<ListItem
				title="Broccoli" />
			<ListItem
				title="Coconut milk" />
		</ul>
	)
}

export default List
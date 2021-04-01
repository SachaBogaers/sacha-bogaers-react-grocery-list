import React from 'react'

function ListItem(item) {
	const props = item.props
	return (
		<li
			key={props.id}
			className="list-item"
			onClick={item.onClick}
			title={props.title}
		>{props.title}</li>
	)
}

export default ListItem
import React from 'react'

function ListItem(item) {
	const props = item.props
	console.log(item)
	return (
		<li
			key={props.id}
			className="list-item"
			onClick={item.onClick}
			title={props.title}
		>
			{props.title}
			{item.isShoppingCart &&
				<span className="amount"> Amount: {props.amount}</span>
			}
		</li>
	)
}

export default ListItem
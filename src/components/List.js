import React from 'react'
import ListItem from './ListItem'

function List(props) {
	return (
		<ul className="list">
			{props.list.map(item => (
				<ListItem
					key={item.id}
					props={item}
					onClick={props.onClick}
					value={item.title}
				/>))}
		</ul>
	)
}



export default List
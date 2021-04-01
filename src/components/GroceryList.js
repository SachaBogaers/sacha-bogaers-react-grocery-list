import React from 'react'
import List from './List'

function GroceryList(props) {
	return (
		<div className="GroceryList">
			<h1>Grocery List</h1>
			<List
				list={props.list}
				onClick={props.onClick}
			/>
		</div>

	)
}

export default GroceryList
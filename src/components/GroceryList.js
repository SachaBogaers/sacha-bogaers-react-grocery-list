import React from 'react'
import List from './List'
import InputField from './InputField'

function GroceryList(props) {
	return (
		<div className="GroceryList">
			<h1>Grocery List</h1>
			<InputField
				input={props.input}
				handleInputChange={props.handleInputChange}
				handleSubmitGroceryItem={props.handleSubmitGroceryItem} />
			<List
				list={props.list}
				onClick={props.onClick}

			/>
		</div>

	)
}

export default GroceryList
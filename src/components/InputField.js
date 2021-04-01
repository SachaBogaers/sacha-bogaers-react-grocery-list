import React from 'react'



function InputField(props) {
	return (
		<div className="InputField">
			<input
				onChange={props.handleInputChange}
				type="text"
				value={props.input}
			/>
			<button
				onClick={props.handleSubmitGroceryItem}
			>
				Submit
			</button>
		</div>

	)
}

export default InputField
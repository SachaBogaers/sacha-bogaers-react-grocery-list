import React from 'react'
import List from './List'

function ShoppingCart(props) {
	return (
		<div className="ShoppingCart">
			<h1>Shopping Cart</h1>
			<List
				list={props.list} />
			<button
				onClick={props.emptyCart}
			>Empty Cart</button>
		</div>
	)
}


export default ShoppingCart
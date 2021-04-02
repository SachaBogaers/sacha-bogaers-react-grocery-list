import React from 'react'
import List from './List'

function ShoppingCart(props) {
	return (
		<div className="ShoppingCart">
			<h1>Shopping Cart</h1>
			<button
				onClick={props.emptyCart}
			>Empty Cart</button>
			<List
				list={props.list}
				isShoppingCart={props.isShoppingCart} />
		</div>
	)
}


export default ShoppingCart
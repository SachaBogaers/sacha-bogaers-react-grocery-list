import React from 'react'
import GroceryList from './GroceryList'
import ShoppingCart from './ShoppingCart'


class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			groceryItems: [
				{ id: 1, title: "Curry paste" },
				{ id: 2, title: "Coconut milk" },
				{ id: 3, title: "Broccoli" }
			],
			shoppingListItems: [
			]
		}
		this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
		this.emptyCart = this.emptyCart.bind(this)
	}



	handleClickGroceryItem(event) {
		this.setState(prevState => {
			const oldGroceryItems = [...prevState.groceryItems]
			const item = oldGroceryItems.filter(item => {
				return item.title === event.target.title
			})
			const oldShoppingList = [...prevState.shoppingListItems]
			const newShoppingList = oldShoppingList.concat(item)
			return {
				shoppingListItems: newShoppingList
			}
		})
	}

	emptyCart() {
		this.setState({
			shoppingListItems: []
		})
	}

	render() {
		return (
			<div className="Container">
				<GroceryList
					list={this.state.groceryItems}
					onClick={this.handleClickGroceryItem}
				/>
				<ShoppingCart
					list={this.state.shoppingListItems}
					emptyCart={this.emptyCart} />
			</div>
		);
	}
}


export default Container

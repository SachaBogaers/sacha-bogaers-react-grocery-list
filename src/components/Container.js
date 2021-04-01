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
			],
			groceryListInput: ""
		}
		this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
		this.emptyCart = this.emptyCart.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmitGroceryItem = this.handleSubmitGroceryItem.bind(this)
	}

	handleInputChange(event) {
		this.setState({
			groceryListInput: event.target.value
		})
	}

	handleSubmitGroceryItem() {
		this.setState(prevState => {
			const input = prevState.groceryListInput
			console.log(input)
			const newId = prevState.groceryItems.length + 1
			const newItem = {
				id: newId,
				title: input
			}
			const newGroceryItems = [...prevState.groceryItems, newItem]
			console.log("New grocery items", newGroceryItems)
			return {
				groceryItems: newGroceryItems,
				groceryListInput: ""
			}
		})
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
					input={this.state.groceryListInput}
					list={this.state.groceryItems}
					onClick={this.handleClickGroceryItem}
					handleInputChange={this.handleInputChange}
					handleSubmitGroceryItem={this.handleSubmitGroceryItem}
				/>
				<ShoppingCart
					list={this.state.shoppingListItems}
					emptyCart={this.emptyCart} />
			</div>
		);
	}
}


export default Container

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
		const itemTitle = event.target.title
		this.setState(prevState => {
			console.log("prevstate", prevState)
			const oldGroceryItems = [...prevState.groceryItems]
			const clickedItem = oldGroceryItems.filter(item => {
				return item.title === itemTitle
			})[0]
			const itemId = clickedItem.id
			const newShoppingItem = {
				id: itemId,
				title: itemTitle,
				amount: 1
			}
			const oldShoppingList = [...prevState.shoppingListItems]
			const match = oldShoppingList.find(item => item.id === newShoppingItem.id)
			// Check if item is already in shopping cart, if so, change amount of that item
			if (match) {
				const newAmount = match.amount + 1
				console.log("Match amount", match.amount, match)
				newShoppingItem.amount = newAmount
				const newShoppingList = oldShoppingList.map(item =>
					item.id === match.id ? { ...item, amount: newAmount } : item)
				console.log("New", newShoppingList)
				return {
					shoppingListItems: newShoppingList
				}
				// If not already in cart, add item to cart
			} else {
				const newShoppingList = oldShoppingList.concat(newShoppingItem)
				return {
					shoppingListItems: newShoppingList
				}
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
					isShoppingCart={false}
				/>
				<ShoppingCart
					list={this.state.shoppingListItems}
					emptyCart={this.emptyCart}
					isShoppingCart={true}
				/>
			</div>
		);
	}
}


export default Container

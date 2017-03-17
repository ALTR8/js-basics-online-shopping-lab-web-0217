var cart;

function setCart(newCart) {
  cart = newCart;
}
const getCart = () => cart

const viewCart = () => {
	if(!cart[0]){
		console.log("Your shopping cart is empty.")
		return	
	}

	let itemsSummary = cart.map((item) => {
		let itemName = Object.keys(item)[0]
		let itemPrice = item[itemName]
		return `${itemName} at $${itemPrice}`
	})
	console.log(`In your cart, you have ${itemsSummary.join(", ")}.`)
}

function total() {
  let t = 0

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}





const addToCart = (item) => {
	const price = Math.floor(Math.random() * 100)
	cart.push({[item]: price})
	console.log(`${item} has been added to your cart.`)
	return cart
}




const removeFromCart = (item) =>{
	let filteredCart = cart.filter((storedItem) => {
		storedItem[item]
	})

	if(filteredCart.length === cart.length) {
		console.log("That item is not in your cart.")
	} else {
		cart = filteredCart
	}
}

const placeOrder = (creditCard) => {
	if (!creditCard) {
		console.log(`We don't have a credit card on file for you to place your order.`)
	} 	else {
	console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
	}
	cart.length = 0
}










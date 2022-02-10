class Product {
	constructor(name, price) {
		this.name = name
		this.price = price
	}
}

const priceProductList = [
	new Product(""),
	new Product("Milk", 1.99),
	new Product("Bread", 2),
	new Product("Egg", 0.33),
	new Product("Butter", 3),
	new Product("Water", 1.15),
	new Product("Avokado", 2),
	new Product("Cream", 2),
	new Product("Ham", 4),
	new Product("Cheese", 3.59),
	new Product("Juice", 2),
	new Product("Melon", 2),
	new Product("Vodka", 19.99),
	new Product("Lemon", 1),
	new Product("Coconut", 3),
	new Product("Carrot", 1),
	new Product("Papaya", 5.22),
	new Product("Garlic", 1),
	new Product("Honey", 8),
	new Product("Whisky", 399.99),
	new Product("Beer", 2),
	new Product("Cucumber", 1),
	new Product("Onion", 1),
	new Product("Steak", 39.99),
	new Product("Sushi", 39),
]

function generateProduct() {
	const productDropdown = document.getElementById("productName")
	productDropdown.innerHTML = ""
	for (let i = 0; i < priceProductList.length; i++) {
		const productDropdownValue = document.createElement("option")
		productDropdownValue.innerText = `${priceProductList[i].name}`
		productDropdown.appendChild(productDropdownValue)
	}
}

generateProduct()

const orderList = []

function renderPriceList() {
	const priceListElement = document.getElementById("priceList")
	priceListElement.innerHTML = ""
	for (let i = 1; i < priceProductList.length; i++) {
		const productElement = document.createElement("li")
		productElement.innerText = `${priceProductList[i].name} ${priceProductList[i].price}$`
		priceListElement.appendChild(productElement)
	}
}

function renderOrderList() {
	const orderListElement = document.getElementById("productList")
	orderListElement.innerHTML = ""
	for (let i = 0; i < orderList.length; i++) {
		if (orderList[i].amount > orderList[i].budget) {
			const productElement = document.createElement("li")
			const breakElement = document.createElement("br")
			productElement.innerText = `${orderList[i].name} ${orderList[i].amount}$`
			orderListElement.appendChild(productElement).className = "incorrectItem"
			orderListElement.appendChild(breakElement)
		} else {
			const productElement = document.createElement("li")
			const breakElement = document.createElement("br")
			productElement.innerText = `${orderList[i].name} ${orderList[i].amount}$`
			orderListElement.appendChild(productElement).className = "correctItem"
			orderListElement.appendChild(breakElement)
		}
		const productNameElement = document.getElementById("productName")
		const productAmountElement = document.getElementById("productAmount")
		const productMaxPriceElement = document.getElementById("productMaxPrice")
		productNameElement.value = ""
		productAmountElement.value = ""
		productMaxPriceElement.value = ""
	}
}

function addToCart() {
	const addToCartBttn = document.getElementById("addToCartBttn")
	addToCartBttn.addEventListener("click", (event) => {
		event.preventDefault()

		const productName = document.querySelector('[name="productName"]').value
		const productAmount = parseFloat(
			document.querySelector('[name="productAmount"]').value
		)
		const productMaxPrice = parseFloat(
			document.querySelector('[name="productMaxPrice"]').value
		)
		const order = {
			name: productName,
			amount: productAmount,
			budget: productMaxPrice,
		}

		if (!productName) {
			alert("Provide product name!")
			return
		} else if (!productAmount || productAmount <= 0) {
			alert("Amount can not be empty, must be a number and bigger than 0!")
			return
		} else if (!productMaxPrice || productMaxPrice <= 0) {
			alert("Budget can not be empty, must be a number and bigger than 0!")
			return
		} else {
			orderList.push(order)
			renderOrderList()
		}
	})
}

addToCart()

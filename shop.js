function Product(name, price) {
	return {
		name,
		price,
	}
}

const priceProductList = [
	Product("Milk", 1.99),
	Product("Bread", 2),
	Product("Egg", 0.33),
	Product("Butter", 3),
	Product("Water", 1.15),
	Product("Avokado", 2),
	Product("Cream", 2),
	Product("Ham", 4),
	Product("Cheese", 3.59),
	Product("Juice", 2),
	Product("Melon", 2),
	Product("Vodka", 19.99),
	Product("Lemon", 1),
	Product("Coconut", 3),
	Product("Blue cheese", 5),
	Product("Papaya", 5.22),
	Product("Garlic", 1),
	Product("Honey", 8),
	Product("Blue Label Whisky", 399.99),
	Product("Beer", 2),
	Product("Cucumber", 1),
	Product("Onion", 1),
	Product("Steak", 39.99),
	Product("Shrimps", 18.79),
	Product("Sushi", 39),
]

const orderList = []

function renderPriceList() {
	const priceListElement = document.getElementById("priceList")
	priceListElement.innerHTML = ""
	for (let i = 0; i < priceProductList.length; i++) {
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

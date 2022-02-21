const lsProductList = localStorage.getItem("products")

function generateProduct() {
	const productDropdown = document.getElementById("productName")
	productDropdown.innerHTML = ""
	objProducts = JSON.parse(lsProductList)
	for (let i = 0; i < objProducts.length; i++) {
		const productDropdownValue = document.createElement("option")
		productDropdownValue.innerText = objProducts[i].name
		productDropdown.appendChild(productDropdownValue)
	}
}

generateProduct()

const orderList = []

function clearInputs() {
	const productNameElement = document.getElementById("productName")
	const productAmountElement = document.getElementById("productAmount")
	const productMaxPriceElement = document.getElementById("productMaxPrice")
	productNameElement.value = ""
	productAmountElement.value = ""
	productMaxPriceElement.value = ""
}

function renderOrderList() {
	const orderListElement = document.getElementById("productList")
	orderListElement.innerHTML = ""
	for (let i = 0; i < orderList.length; i++) {
		const productElement = document.createElement("li")
		const breakElement = document.createElement("br")
		const deleteButton = document.createElement("button")

		if (orderList[i].amount > orderList[i].budget) {
			productElement.innerText = `${orderList[i].name} ${orderList[i].amount}$`
			deleteButton.innerText = "x"
			productElement.appendChild(deleteButton).className = "removeButton"
			deleteButton.addEventListener("click", () => {
				orderList.splice(i, 1)
				localStorage.removeItem("order")
				const objStr = JSON.stringify(orderList)
				localStorage.setItem("order", objStr)
				renderOrderList()
			})

			orderListElement.appendChild(productElement).className = "incorrectItem"
			orderListElement.appendChild(breakElement)
		} else {
			productElement.innerText = `${orderList[i].name} ${orderList[i].amount}$`
			deleteButton.innerText = "x"
			productElement.appendChild(deleteButton).className = "removeButton"
			deleteButton.addEventListener("click", () => {
				orderList.splice(i, 1)
				localStorage.removeItem("order")
				const objStr = JSON.stringify(orderList)
				localStorage.setItem("order", objStr)
				renderOrderList()
			})

			orderListElement.appendChild(productElement).className = "correctItem"
			orderListElement.appendChild(breakElement)
		}
		clearInputs()
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
			clearInputs()
			return
		} else if (!productAmount || productAmount <= 0) {
			alert("Amount can not be empty, must be a number and bigger than 0!")
			clearInputs()
			return
		} else if (!productMaxPrice || productMaxPrice <= 0) {
			alert("Budget can not be empty, must be a number and bigger than 0!")
			clearInputs()
			return
		} else {
			orderList.push(order)
			const objStr = JSON.stringify(orderList)
			localStorage.setItem("order", objStr)
			renderOrderList()
		}
	})
}

addToCart()

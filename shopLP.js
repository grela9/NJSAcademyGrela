class Product {
	constructor(name, price) {
		this.name = name
		this.price = price
	}
}

const productList = [
	new Product(""),
	new Product("Milk", 1.99),
	new Product("Bread", 2),
	new Product("Egg", 0.33),
]

function clearInputs() {
	const productNameElement = document.getElementById("productName")
	const productPriceElement = document.getElementById("productPrice")
	productNameElement.value = ""
	productPriceElement.value = ""
}

function addToList() {
	const addToProductListBttn = document.getElementById("addToProductListBttn")
	addToProductListBttn.addEventListener("click", (event) => {
		event.preventDefault()

		const productName = document.querySelector('[name="productName"]').value
		const productPrice = parseFloat(
			document.querySelector('[name="productPrice"]').value
		)

		if (!productName) {
			alert("Provide product name!")
			clearInputs()
			return
		} else if (!productPrice || productPrice <= 0) {
			alert("Price can not be empty, must be a number and bigger than 0!")
			clearInputs()
			return
		} else {
			productList.push(new Product(productName, productPrice))
			const objStr = JSON.stringify(productList)
			localStorage.setItem("products", objStr)
			clearInputs()
		}
	})
}

function showProductList() {
	const productListElement = document.getElementById("productList")
	productListElement.innerHTML = ""
	const objStr = JSON.stringify(productList)
	for (let i = 1; i < productList.length; i++) {
		const productElement = document.createElement("li")
		productElement.innerText = `${productList[i].name} ${productList[i].price}$`
		productListElement.appendChild(productElement)
		localStorage.setItem("products", objStr)
	}
}

addToList()

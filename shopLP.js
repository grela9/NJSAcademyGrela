class Product {
	constructor(name, price) {
		this.name = name
		this.price = price
	}
}

let productsStr = localStorage.getItem("products")

if (productsStr == null) {
	productsStr = "[]"
}

const productList = JSON.parse(productsStr)

function clearInputs() {
	const productNameElement = document.getElementById("productName")
	const productPriceElement = document.getElementById("productPrice")
	productNameElement.value = ""
	productPriceElement.value = ""
}

function renderList() {
	const productListElement = document.getElementById("productList")
	productListElement.innerHTML = ""
	for (let i = 0; i < productList.length; i++) {
		const productElement = document.createElement("li")
		productElement.innerText = `${productList[i].name} ${productList[i].price}$`
		productListElement.appendChild(productElement)
	}
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
			localStorage.setItem("products", JSON.stringify(productList))
			renderList()
			clearInputs()
		}
	})
}

addToList()
renderList()

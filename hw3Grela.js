const listOfPerson = []

function Person(name, lastname, age, city) {
	return {
		name: name,
		lastname: lastname,
		age: age,
		city: city,
	}
}

/*Add to list*/
function getAddToList() {
	const name = document.querySelector('[name="name"]').value
	const lastname = document.querySelector('[name="lastname"]').value
	const age = parseInt(document.querySelector('[name="age"]').value)
	const city = document.querySelector('[name="city"]').value

	// check required

	if (!name) {
		alert("Name is required!")
		return
	} else if (!lastname) {
		alert("Surname is required!")
		return
	} else if (!age || age <= 0) {
		alert("Age is required!")
		return
	} else if (!city) {
		alert("City is required!")
		return
	}

	let person = Person(name, lastname, age, city)
	listOfPerson.push(person)
	console.log(listOfPerson)

	// clear
	document.querySelector('[name="name"]').value = ""
	document.querySelector('[name="lastname"]').value = ""
	document.querySelector('[name="age"]').value = ""
	document.querySelector('[name="city"]').value = ""
}

/*Oldest person*/
function getOldestPerson() {
	let maxAge = 0
	let nameOfOldestAge = ""
	let lastnameOfOldestAge = ""

	if (!listOfPerson.length) {
		alert("You haven't added any person!")
		return
	}

	for (let i = 0; i < listOfPerson.length; i++) {
		if (listOfPerson[i].age > maxAge) {
			maxAge = listOfPerson[i].age
			nameOfOldestAge = listOfPerson[i].name
			lastnameOfOldestAge = listOfPerson[i].lastname
		}
	}
	const addField1 = document.getElementById("additionalField1")
	addField1.innerText =
		"The oldest person is: " +
		nameOfOldestAge +
		" " +
		lastnameOfOldestAge +
		" with age: " +
		maxAge
}

/*Cracow People*/
function getCracowPeople() {
	const cracowPeopleResult = []

	if (!listOfPerson.length) {
		alert("You haven't added any person!")
		return
	}

	for (let i = 0; i < listOfPerson.length; i++) {
		if (listOfPerson[i].city == "Cracow" || listOfPerson[i].city == "Krakow") {
			cracowPeopleResult.push(
				listOfPerson[i].name + " " + listOfPerson[i].lastname + " "
			)
		}
	}
	const addField2 = document.getElementById("additionalField2")
	addField2.innerText = cracowPeopleResult
}

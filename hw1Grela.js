/*
TASK 1 - Checking if string includes substring
*/
function isSubstring(string, substring) {
	const string_length = string.length
	const substring_lenght = substring.length
	for (let i = 0; i < string_length; i++) {
		if (string[i] == substring[0]) {
			let check = 0
			for (let j = 0; j < substring_lenght; j++) {
				if (string[i + j] == substring[0 + j]) {
					check++
					if (check == substring_lenght) {
						return true
					}
				}
			}
		}
	}
	return false
}

const str1 = "Lorem ipsum"
const substr1 = "Hello"
console.log(isSubstring(str1, substr1))
const str2 = "chce kupic nowa koszulke"
const substr2 = "pic"
console.log(isSubstring(str2, substr2))

// includes() method
function isSubstring2(string, substring) {
	if (string.includes(substring)) {
		return true
	} else {
		return false
	}
}

// indexOf() method
function isSubstring3(string, substring) {
	if (string.indexOf(substring) != -1) {
		return true
	} else {
		return false
	}
}

/*
TASK 2 - return final array with min/max and values between these min/max numbers
*/
function elementsInRange(arr, min, max) {
	const newArr = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= min && arr[i] <= max) {
			newArr.push(arr[i])
		}
	}
	return newArr
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(elementsInRange(arr1, 5, 8))
const arr2 = [1, 2, 2, 3, 3, 8, 8, 3, 3, 1, 1, 4, 3, 2, 10, 2]
console.log(elementsInRange(arr2, 2, 3))
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(elementsInRange(arr3, 100, 120))

/*
TASK 1 - Checking if string includes substring
*/
function isSubstring(string, substring) {
	const string_length = string.length
	const substring_length = substring.length
	for (let i = 0; i < string_length; i++) {
		if (string[i] == substring[0]) {
			let check = 0
			for (let j = 0; j < substring_length; j++) {
				if (string[i + j] == substring[0 + j]) {
					check++
					if (check == substring_length) {
						return true
					}
				}
			}
		}
	}
	return false
}

const str = "chce kupic nowa koszulke"
const substr = "pic"
console.log(isSubstring(str, substr))

// includes() method
function isSubstring2(string, substring) {
	return string.includes(substring)
}

const str2 = "Lorem ipsum"
const substr2 = "m i"
console.log(isSubstring2(str2, substr2))

// indexOf() method
function isSubstring3(string, substring) {
	return string.indexOf(substring) !== -1
}

const str3 = "Lorem ipsum"
const substr3 = "ipsummmmmm"
console.log(isSubstring3(str3, substr3))

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

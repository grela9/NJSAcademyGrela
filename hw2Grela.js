/*
TASK 1 - return index of min element (considering absolute value)
*/
function solution1(arr) {
	let indexMinElement = 0
	let minElement = Math.abs(arr[0])
	for (let i = 1; i < arr.length; i++) {
		if (Math.abs(arr[i]) < minElement) {
			minElement = Math.abs(arr[i])
			indexMinElement = i
		}
	}
	return indexMinElement
}

arr1 = [6, 2, 10, 4, 2, -1, 3, 5]
console.log(solution1(arr1))

/*
TASK 2 - return number of +,-,0 elements
*/
function solution2(arr) {
	const arrPositive = []
	const arrNegative = []
	const arrZero = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			arrPositive.push(arr[i])
		} else if (arr[i] < 0) {
			arrNegative.push(arr[i])
		} else {
			arrZero.push(arr[i])
		}
	}
	return [arrPositive.length, arrNegative.length, arrZero.length]
}

arr2 = [6, 2, 10, 4, 2, -1, 3, 5]
console.log(solution2(arr2))

/*
TASK 3 - return elements bigger than arithmetic mean
*/
function solution3(arr) {
	const arrResult = []
	let sum = 0

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}

	let aritmeticMean = sum / arr.length
	console.log("Aritmetic mean for " + `[${arr}]` + " is " + aritmeticMean)

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > aritmeticMean) {
			arrResult.push(arr[i])
		}
	}
	return arrResult
}

arr3 = [6, 2, 10, 4, 2, -1, 3, 5]
console.log(solution3(arr3))

/*
TASK 4 - return the longest sentence
*/
function solution4(text) {
	arrText = text.split(". ")
	let maxLongestSentence = arrText[0]
	for (let i = 0; i < arrText.length; i++) {
		if (arrText[i].length > maxLongestSentence.length) {
			maxLongestSentence = arrText[i]
		}
	}
	return maxLongestSentence
}

text4 =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

console.log(solution4(text4))

/*
TASK 5 - return the longest word
*/

function solution5(text) {
	signs_ = [",", ".", ":", ";", "!", "?"]
	arrText = text.split(" ")
	let maxLongestWord = arrText[0]
	for (let i = 0; i < arrText.length; i++) {
		for (let j = 0; j < arrText[i].length; j++) {
			for (let k = 0; k < signs_.length; k++) {
				if (arrText[i].includes(signs_[k])) {
					arrText[i] = arrText[i].replace(signs_[k], "")
				}
			}
		}
		if (arrText[i].length > maxLongestWord.length) {
			maxLongestWord = arrText[i]
		}
	}
	return maxLongestWord
}

text5 =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
console.log(solution5(text5))

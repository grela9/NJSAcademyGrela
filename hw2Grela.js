/*
TASK 1 - return index of min element (considering absolute value)
*/
function solution1(arr) {
	arrElementAbs = []
	for (let i = 0; i < arr.length; i++) {
		arrElementAbs.push(Math.abs(arr[i]))
	}

	let minElement = arrElementAbs[0]
	for (let i = 0; i < arrElementAbs.length - 1; i++) {
		if (arrElementAbs[i + 1] < minElement) {
			minElement = arrElementAbs[i + 1]
		}
	}
	return arrElementAbs.indexOf(minElement)
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
	arrCharNumber = []
	for (let i = 0; i < arrText.length; i++) {
		arrCharNumber.push(arrText[i].length)
	}
	arrMaxCharNumber = Math.max(...arrCharNumber)
	arrLongestSentence = []
	for (let i = 0; i < arrText.length; i++) {
		if (arrMaxCharNumber == arrText[i].length) {
			arrLongestSentence.push(arrText[i])
		}
	}
	return arrLongestSentence
}

text4 =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

console.log(solution4(text4))

/*
TASK 5 - return the longest word
*/

function solution5(text) {
	arrText_ = text.replaceAll(/[^a-zA-Z 0-9]+/g, "")
	arrText = arrText_.split(" ")
	arrCharNumber = []
	for (let i = 0; i < arrText.length; i++) {
		arrCharNumber.push(arrText[i].length)
	}
	arrMaxCharNumber = Math.max(...arrCharNumber)
	arrLongestWord = []
	for (let i = 0; i < arrText.length; i++) {
		if (arrMaxCharNumber == arrText[i].length) {
			arrLongestWord.push(arrText[i])
		}
	}
	return arrLongestWord
}

text5 =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
console.log(solution5(text5))

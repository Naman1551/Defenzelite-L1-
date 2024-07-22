// EASY TASK

// ques1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ques2
for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

// ques3
const number = 7;

for (let i = 1; i <= 10; i++) {
  const result = i * number;
  console.log(`${number} * ${i} = ${result}`);
}

// ques4
for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication Table for ${i}`);
  for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log(""); // For a blank line between tables
}

// ques4
for (let i = 1; i <= 10; i++) {
  console.log(`Table for ${i}`);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("");
}

// ques5
const number = 10;

let sum = 0,
  i = 1;

while (i <= number) {
  sum += i;
  i++;
}
console.log("The sum of natural numbers:", sum);

// ques6
let n = 10;

function factorial(n) {
  let ans = 1;

  if (n === 0) return 1;
  for (let i = 2; i <= n; i++) ans = ans * i;
  return ans;
}
console.log(factorial(n));

// LEVEL 2: BASIC ALGORITHMS

// QUES7
const array = [5, 12, 18, 25, 32, 7, 14, 28];
let sum = 0;
for (let i = 0; i <= array.length; i++) {
  if (array[i] > 10 && array[i] < 30 && array[i] % 2 === 0) {
    sum += array[i];
  }
}
console.log(sum);

// //qUES 8
let c = 50;
let f = 0;

f = c * (9 / 5) + 32;
console.log("The value of the temperature in Fahrenheit is " + f);

//ques 9
let fahrenheit = prompt("Enter temperature in Fahrenheit: ");
let celsius = ((fahrenheit - 32) * 5) / 9;
console.log(`The temperature in Celsius is ${celsius.toFixed(2)}`);

//ques10
const array = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

//ques11
const array = [10, 20, 30];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
const average = sum / array.length;
console.log(average);

// LEVEL 3 Array Manipulation

//ques 12

function getPositiveNumbers(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      result.push(array[i]);
    }
  }
  return result;
}

const inputArray = [-1, 2, -3, 4, -5];
const outputArray = getPositiveNumbers(inputArray);
console.log(outputArray);

//ques13

function findMaxNumber(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

const inputArray = [5, 8, 2, 10];
const maxNumber = findMaxNumber(inputArray);
console.log(maxNumber);

//ques 14
function rotateLeft(array) {
  if (array.length === 0) return array;
  let firstElement = array.shift();
  array.push(firstElement);
  return array;
}

//ques15

function reverseArray(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--;
  }
  return array;
}

const inputArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(inputArray);
console.log(reversedArray);

// ques 16
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = array1.concat(array2);

console.log(mergedArray);

// ques 17

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i++) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
function sumPrimes(limit) {
  let sum = 0;
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
const limit = 100;
console.log(sumPrimes(limit));

// ques18

function countWords(text) {
  const words = text.trim().split(/\s+/);
  return words.length;
}

console.log(countWords("Hello world, how are you?"));

// ques19

function capitalizeFirstLetter(text) {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const text = "hello world";
const capitalizedText = capitalizeFirstLetter(text);
console.log(capitalizedText);

// ques20

function sumOfNumbers(input) {
  return input
    .split(",")
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
}

const numbers = "1,2,3,4,5";
const newNumber = sumOfNumbers(numbers);
console.log(newNumber);

// ques 21

function getWords(text) {
  return text.match(/\b\w+\b/g) || [];
}

const text = "This is a sample text with several words.";
const words = getWords(text);
console.log(words);

// ques 22
function reverseString(str) {
  return str.split("").reverse().join("");
}

const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "olleh"

// ques 23

function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const onlyInFirst = [...set1].filter((item) => !set2.has(item));
  const onlyInSecond = [...set2].filter((item) => !set1.has(item));

  return [...onlyInFirst, ...onlyInSecond];
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const result = symmetricDifference(array1, array2);
console.log(result);

// ques24

function difference(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter((item) => !set2.has(item));
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const result = difference(array1, array2);
console.log(result);

// ques25

function getDistinctElements(arr) {
  return [...new Set(arr)];
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
const distinctNumbers = getDistinctElements(numbers);
console.log(distinctNumbers);

// ques 29

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return arr;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers);

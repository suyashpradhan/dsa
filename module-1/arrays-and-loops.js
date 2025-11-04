// Write a function to search an element in an array using a loop and return its index. If the element is not found, return -1.
function searchElementIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const sampleArray = [10, 20, 30, 40, 50];
console.log(searchElementIndex(sampleArray, 30)); // 2
console.log(searchElementIndex(sampleArray, 60)); // -1

// Write a function to return negative values from an array.
const arr = [1, 4, -2, -12, -0, -9, 9];
const tempArr = [];
function getNegativeValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
}

console.log(getNegativeValues(arr));

// Write a function to calculate the sum of all numbers in an array.
const numberArr = [1, 7, 12, 19, 25, -12];
let sum = 0;
function sumOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfArray(numberArr));

// Write a function to calculate the average of numbers in an array.
const nums = [10, 20, 30, 40, 50];
let average = 0;

function calculateAverage(arr) {
  for (let i = 0; i < arr.length; i++) {
    average += arr[i];
  }
  return average / arr.length;
}

console.log(calculateAverage(nums));

// Write a function to find the largest number in an array.
const arr1 = [1, 4, 5, 9, 17, 22, 98];
let largest = -Infinity;

function largestNumberInArray(arr) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestNumberInArray(arr1));

// Write a function to find the smallest number in an array.
const arr2 = [2, 4, 5, 9, 17, 22, 98, -12];
let smallest = Infinity;

function smallestNumberInArray(arr) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(smallestNumberInArray(arr2));

// Write a function to find the second largest number in an array
const arr3 = [1, 2, 3, 4, 15, 20, 23, 25];
let firstLargest = -Infinity;
let secondLargest = -Infinity;

function findSecondLargestNumberInArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (a[i] > secondLargest) {
      secondLargest = a[i];
    }
  }
  return secondLargest;
}

console.log(findSecondLargestNumberInArray(arr3));

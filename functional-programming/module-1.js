//Double each number in an array
const numbers = [5, 18, 29, 35, 46, 55]
const double =  numbers.map( number => number * 2 )
console.log(double)

// Convert array of strings to uppercase
const fruits = ['apple', 'banana', 'cherry'];
const upperCaseList = fruits.map(fruit=>fruit.toUpperCase())
console.log(upperCaseList)

// Filter out odd numbers
const nums = [1, 2, 3, 4, 5];
const filterOddNumbers = nums.filter(number => number % 2 === 0);
console.log(filterOddNumbers)

// Get names of users from array of objects
const users = [{name: 'A', age: 28}, {name: 'B', age: 46}];
const renderNames = users.map(user => user.age);
console.log(renderNames)

// Find users older than 30
const usersList = [{name: 'A', age: 20}, {name: 'B', age: 35}];
const usersAgeListMoreThan30 = usersList.filter(user => user.age > 30);
console.log(usersAgeListMoreThan30);

// Check if any number is greater than 10
const numbersList = [1, 5, 12, 8];
const numberGreaterThan10 = numbersList.filter(number => number > 10);
console.log(numberGreaterThan10)

// Check if all users are adults
const usersList2 = [{age: 18}, {age: 21}, {age: 17}];
const adultUsers = usersList2.every(data => data.age >= 18);
console.log(adultUsers);

// Find first even number
const numberList2 = [1, 3, 4, 6];
const firstEvenNumber  = numberList2.find(num => num % 2 === 0);
console.log(firstEvenNumber);
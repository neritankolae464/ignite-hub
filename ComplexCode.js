/*
Filename: ComplexCode.js
Content: Complex JavaScript code example
*/

// Define a class called Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Method to say hello
  sayHello() {
    console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
  }
  
  // Method to check if the person is an adult
  isAdult() {
    return this.age >= 18;
  }
}

// Create an instance of the Person class
const john = new Person("John", 25);

// Call the sayHello method
john.sayHello();

// Check if John is an adult
console.log(`Is John an adult? ${john.isAdult()}`);

// Define an array of numbers
const numbers = [5, 10, 15, 20];

// Use array methods to compute the sum and average of the numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const average = sum / numbers.length;

console.log(`Sum: ${sum}`);
console.log(`Average: ${average}`);

// Define a function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

const reversed = reverseString("Hello, world!");

console.log(`Reversed string: ${reversed}`);

// Define a recursive function to calculate factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

const fact5 = factorial(5);

console.log(`Factorial of 5: ${fact5}`);

// Define a promise that resolves after a certain time
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
  console.log("Fetching data...");

  await delay(2000);
  
  console.log("Data fetched!");
}

fetchData();

// Define a generator function to generate random numbers
function* randomGenerator() {
  while (true) {
    yield Math.random();
  }
}

const generator = randomGenerator();

console.log(`Random number 1: ${generator.next().value}`);
console.log(`Random number 2: ${generator.next().value}`);
console.log(`Random number 3: ${generator.next().value}`);

// Define a class to represent a circle
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  // Method to calculate the circumference
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
  
  // Method to calculate the area
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const circle = new Circle(5);

console.log(`Circumference: ${circle.getCircumference()}`);
console.log(`Area: ${circle.getArea()}`);

// Define an arrow function with default parameters
const greet = (name = "Anonymous") => {
  console.log(`Hello, ${name}!`);
};

greet();
greet("Alice");
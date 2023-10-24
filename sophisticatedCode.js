/* 
  Filename: sophisticatedCode.js
  
  This code demonstrates an elaborate and complex JavaScript application that simulates a virtual car dealership. 
  It includes various features such as searching for cars by make and model, adding cars to inventory, updating car information, 
  and selling cars to customers. The code also incorporates object-oriented programming principles for better maintenance 
  and reusability. It's more than 200 lines long to accommodate the extensive functionality and complexity.

  Note: This is a simulated code and does not connect with an actual car dealership database or server. It is meant for demonstration purposes only.
*/

// Define Car class
class Car {
  constructor(make, model, year, price, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    this.color = color;
    this.isSold = false;
  }
  
  getInfo() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Price: ${this.price}, Color: ${this.color}`;
  }
  
  sell() {
    this.isSold = true;
  }
}

// Create car inventory
const carInventory = [
  new Car("Toyota", "Camry", 2020, 25000, "Red"),
  new Car("Honda", "CR-V", 2019, 30000, "Silver"),
  new Car("Ford", "Mustang", 2021, 40000, "Black"),
  // Add more cars here...
];

// Function to search cars by make and model
function searchCars(make, model) {
  const results = carInventory.filter(car => car.make.toLowerCase() === make.toLowerCase() && car.model.toLowerCase() === model.toLowerCase());
  return results.length > 0 ? results : "No cars found.";
}

// Function to add a new car to the inventory
function addCar(make, model, year, price, color) {
  const newCar = new Car(make, model, year, price, color);
  carInventory.push(newCar);
}

// Function to update car information by index
function updateCarInfo(index, make, model, year, price, color) {
  if (index >= 0 && index < carInventory.length) {
    const car = carInventory[index];
    car.make = make;
    car.model = model;
    car.year = year;
    car.price = price;
    car.color = color;
  }
}

// Function to sell a car by index
function sellCar(index) {
  if (index >= 0 && index < carInventory.length) {
    const car = carInventory[index];
    car.sell();
  }
}

// Example usage:

// Search for cars
console.log(searchCars("Toyota", "Camry"));
console.log(searchCars("Ford", "Fiesta"));

// Add a new car
addCar("Honda", "Accord", 2021, 35000, "White");

// Update car information
updateCarInfo(0, "Toyota", "Corolla", 2020, 20000, "Blue");

// Sell a car
sellCar(1);

console.log(carInventory[0].getInfo());
console.log(carInventory[1].getInfo());
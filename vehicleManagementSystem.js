Sure! Here's an example of a JavaScript code that uses Object-Oriented Programming (OOP) principles to create a complex vehicle management system. The code implements various classes, inheritance, encapsulation, and other advanced concepts:

```javascript
// filename: vehicleManagementSystem.js

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `${this.make} ${this.model} (${this.year})`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, fuelType) {
    super(make, model, year);
    this.fuelType = fuelType;
  }

  startEngine() {
    return `Starting ${this.make} ${this.model}'s engine...`;
  }
}

class Truck extends Vehicle {
  constructor(make, model, year, maxPayload) {
    super(make, model, year);
    this.maxPayload = maxPayload;
  }

  loadCargo() {
    return `${this.make} ${this.model} is loading cargo...`;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, engineDisplacement) {
    super(make, model, year);
    this.engineDisplacement = engineDisplacement;
  }

  wheelie() {
    return `Doing a wheelie with ${this.make} ${this.model}!`;
  }
}

// Example usage

const car = new Car('Toyota', 'Camry', 2020, 'Petrol');
console.log(car.getDetails()); // Output: Toyota Camry (2020)
console.log(car.startEngine()); // Output: Starting Toyota Camry's engine...

const truck = new Truck('Ford', 'F-150', 2018, 5000);
console.log(truck.getDetails()); // Output: Ford F-150 (2018)
console.log(truck.loadCargo()); // Output: Ford F-150 is loading cargo...

const motorcycle = new Motorcycle('Harley-Davidson', 'Street 750', 2019, '750cc');
console.log(motorcycle.getDetails()); // Output: Harley-Davidson Street 750 (2019)
console.log(motorcycle.wheelie()); // Output: Doing a wheelie with Harley-Davidson Street 750!
```

In this example, we define a `Vehicle` class as a base class, and then we create subclasses `Car`, `Truck`, and `Motorcycle` that inherit from the `Vehicle` class. Each subclass has its own unique properties and methods.

The usage section demonstrates how to create instances of each class and invoke their methods to perform vehicle-specific actions.

Please note that the code provided above is just an example and may not be suitable for a production-level application. The complexity and sophistication can vary based on specific requirements.
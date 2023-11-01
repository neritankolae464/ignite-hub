// Filename: complexCode.js
// Content: Complex code demonstrating a shopping cart functionality

// Utility function to format price with currency symbol
function formatPrice(price) {
  return "$" + price.toFixed(2);
}

// Class representing a product
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  toString() {
    return this.name;
  }
}

// Class representing a shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    let item = this.items.find((item) => item.product.id === product.id);
    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeItem(product, quantity) {
    let item = this.items.find((item) => item.product.id === product.id);
    if (!item) {
      console.log("Item not found in cart.");
      return;
    }
    if (item.quantity <= quantity) {
      this.items.splice(this.items.indexOf(item), 1);
    } else {
      item.quantity -= quantity;
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let item of this.items) {
      totalPrice += (item.product.price * item.quantity);
    }
    return totalPrice;
  }

  checkout() {
    console.log("Order Summary:");
    for (let item of this.items) {
      console.log(item.product + " x" + item.quantity + " - " + formatPrice(item.product.price * item.quantity));
    }
    console.log("Total: " + formatPrice(this.getTotalPrice()));
    this.items = [];
  }
}

// Create some products
let iPhone = new Product("p001", "iPhone 12", 999);
let macbook = new Product("p002", "MacBook Pro", 1999);
let airpods = new Product("p003", "AirPods Pro", 249);

// Create a shopping cart
let cart = new ShoppingCart();

// Add products to the cart
cart.addItem(iPhone, 2);
cart.addItem(macbook, 1);
cart.addItem(airpods, 3);

// Remove some products from the cart
cart.removeItem(iPhone, 1);
cart.removeItem(macbook, 1);

// Checkout and display order summary
cart.checkout();
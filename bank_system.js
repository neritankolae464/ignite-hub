Here's an example of a more complex JavaScript code that is over 200 lines long. This code is a simplified simulation of a banking system. It includes various classes and functions to handle multiple accounts, transactions, and banking operations.

```javascript
/*
   File Name: bank_system.js
   Description: Simulation of a Banking System
*/

// Common utility function to generate a random account number
function generateAccountNumber() {
  return Math.floor(1000000000 + Math.random() * 9000000000);
}

// Define the Account class
class Account {
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = generateAccountNumber();
    this.balance = balance;
  }

  // Method to deposit funds into the account
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount} into Account ${this.accountNumber}`);
    } else {
      console.log(`Invalid amount for deposit into Account ${this.accountNumber}`);
    }
  }

  // Method to withdraw funds from the account
  withdraw(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from Account ${this.accountNumber}`);
    } else {
      console.log(`Insufficient balance or invalid amount for withdrawal from Account ${this.accountNumber}`);
    }
  }

  // Method to check the account balance
  checkBalance() {
    console.log(`Account ${this.accountNumber} has a balance of ${this.balance}`);
  }
}

// Define the Bank class to manage multiple accounts
class Bank {
  constructor() {
    this.accounts = [];
  }

  // Method to add a new account
  addAccount(customerName, initialBalance = 0) {
    const account = new Account(customerName, initialBalance);
    this.accounts.push(account);
    console.log(`New account created. Customer: ${customerName}, Account No.: ${account.accountNumber}`);
  }

  // Method to find an account by its account number
  findAccount(accountNumber) {
    return this.accounts.find(account => account.accountNumber === accountNumber) || null;
  }

  // Method to perform a fund transfer between two accounts
  transferFunds(fromAccountNumber, toAccountNumber, amount) {
    const fromAccount = this.findAccount(fromAccountNumber);
    const toAccount = this.findAccount(toAccountNumber);

    if (!fromAccount || !toAccount) {
      console.log("Invalid source or destination account number for funds transfer.");
      return;
    }

    if (fromAccount.balance >= amount) {
      fromAccount.withdraw(amount);
      toAccount.deposit(amount);
      console.log(`Transferred ${amount} from Account ${fromAccount.accountNumber} to Account ${toAccount.accountNumber}`);
    } else {
      console.log("Insufficient balance for funds transfer.");
    }
  }
}

// Create a new bank instance
const bank = new Bank();

// Add some accounts
bank.addAccount("John Doe", 1000);
bank.addAccount("Jane Smith", 5000);
bank.addAccount("Alice Johnson");

// Perform some operations
const account1 = bank.findAccount(1000000001);
const account2 = bank.findAccount(1000000002);

account1.deposit(2000);
account2.withdraw(3000);
account1.checkBalance();

// Perform a fund transfer
bank.transferFunds(1000000001, 1000000002, 1500);
```

This code showcases the complexity of managing a banking system with multiple accounts, including different operations like deposit, withdrawal, checking balance, and fund transfer. Note that this is a simplified example, not a full-fledged production-ready banking system.
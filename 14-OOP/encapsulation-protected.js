'use strict';

// Encapsulation: Protected Properties and Methods
const Account = function (owner, currency, pin) {
  this.owner = owner;
  this.currency = currency;
  this._pin = pin;
  // Protected property
  this._movements = [];
  this.locale = navigator.language;

  console.log(`Thanks for opening an account, ${owner}`);
};

Account.prototype.deposit = function (amount) {
  this._movements.push(amount);
};

Account.prototype.withdraw = function (amount) {
  this.deposit(-amount);
};

Account.prototype.approveLoan = function (loan) {
  return true;
};

Account.prototype.requestLoan = function (amount) {
  if (this.approveLoan(amount)) {
    this.deposit(amount);
    console.log(`Loan approved`);
  }
};

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
// console.log(acc1.pin);
// console.log(acc1.movements);
console.log(acc1._movements);
console.log(acc1.locale);

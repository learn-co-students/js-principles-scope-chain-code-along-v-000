// Declare a variable in global scope called customerName using the "var"
// keyword.
var customerName = 'bob';
// Write a function that accesses that global customerName variable and
// uppercases it.
function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}
// Write a function that when called declares a variable called "bestCustomer"
// in global scope and assigns it to be "not bob".
function setBestCustomer(){
  bestCustomer = 'not bob';
}
// See the consequences of declaring a variable in global scope, by writing a
// new function called overWriteBestCustomer that changes the "bestCustomer"
// variable.
function overWriteBestCustomer(newBest){
  bestCustomer = newBest;
}
// Declare a constant in global scope called "leastFavoriteCustomer".
const leastFavoriteCustomer = 'sour fred';
// Write a function called changeLeastFavoriteCustomer that attempts to change
// that constant - notice what JavaScript does when you try to change the
// constant.
function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'sour fred';
}
// Write another function that will break down.
function attemptTwoFavoriteCustomers(){
  // Try declaring a variable called "favoriteCustomer"
  let favoriteCustomer = 'bar';
  // and redeclaring that same variable such that an error is thrown.
  let favoriteCustomer = 'not bar';
}
// This function was called for in a variant of this lab.
// function congratulateCustomer(){
//   return `congrats ${favoriteCustomer}`;
// }

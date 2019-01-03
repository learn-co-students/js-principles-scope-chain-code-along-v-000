/* Your code goes here */
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'customer';

function upperCaseCustomerName() {
  customerName =  customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'bob';
  let favoriteCustomer = 'logan';
}
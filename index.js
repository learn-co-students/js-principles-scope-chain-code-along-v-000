/* Your code goes here */
var customerName = 'bob';
const leastFavoriteCustomer = 'customer';
let favoriteCustomer = 'customer';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'anotherCustomer';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'anotherCustomer';

  let favoriteCustomer = 'thirdCustomer';
}
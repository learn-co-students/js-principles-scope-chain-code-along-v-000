var customerName = 'bob'; // global scope
const leastFavoriteCustomer = 'some initial value';

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
  leastFavoriteCustomer = 'blah';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'alice';
  // let favoriteCustomer = 'not alice';
}
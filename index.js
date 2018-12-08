var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'david';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'eddie';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'chris';
  let favoriteCustomer = 'david';
}

var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'bill';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'billy bob';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'jim';
  let favoriteCustomer = 'bill';
}

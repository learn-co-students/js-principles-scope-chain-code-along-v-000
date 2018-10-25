/* Your code goes here */

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

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'billy';

  leastFavoriteCustomer = 'billy-bob';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'josh';
  let favoriteCustomer = 'michael';
}

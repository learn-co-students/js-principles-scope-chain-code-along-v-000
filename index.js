var customerName = 'bob';
const leastFavoriteCustomer = 'bob';

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
  leastFavoriteCustomer = 'bub';
}

// not allowed to declare favoriteCustomer twice with let
function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'jack';
  let favoriteCustomer = 'jill';
}

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

const leastFavoriteCustomer = 'bob\'s best friend';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob\'s boss';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'poor bob';
  let favoriteCustomer = 'definitely not bob';
}

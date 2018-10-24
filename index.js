/* Your code goes here */
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'definitely not bob';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'it was bob all along'
}


function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'bob';
  let favoriteCustomer = 'joey';
}

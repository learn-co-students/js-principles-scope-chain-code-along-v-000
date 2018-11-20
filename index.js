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

const leastFavoriteCustomer = 'bobbers';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bobberzzz';
}

function reassignLeastFavorite() {
    changeLeastFavoriteCustomer = 'someone other then bob';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "not bob";
  let favoriteCustomer = 'def not bob';
}

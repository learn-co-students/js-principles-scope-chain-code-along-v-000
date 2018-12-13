
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overWriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "bad customer";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "bob";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "bob";
  let favoriteCustomer = "bob";
}
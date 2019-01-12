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

const leastFavoriteCustomer = "bob";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "tim";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "bob";
  let favoriteCustomer = "tim";
}

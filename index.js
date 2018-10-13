var customerName = "bob";

function upperCaseCustomerName() {
  return (customerName = customerName.toUpperCase());
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overWriteBestCustomer() {
  bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "johnny";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "ben";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "bob";
  let favoriteCustomer = "johnny"
}

var customerName = "bob";

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  return bestCustomer = "not bob";
}

function overWriteBestCustomer() {
  return bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "bruce";
  leastFavoriteCustomer = "bob";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "bruce";
  let favoriteCustomer = "bob";
}

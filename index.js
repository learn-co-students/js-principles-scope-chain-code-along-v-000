var customerName = "bob";

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  return bestCustomer = "not bob";
}

function overWriteBestCustomer(customer) {
  return bestCustomer = customer;
}

const leastFavoriteCustomer = "def not bob";

function changeLeastFavoriteCustomer() {
  return leastFavoriteCustomer = "okay it's bob";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "bob";
  let favoriteCustomer = "not bob";
}

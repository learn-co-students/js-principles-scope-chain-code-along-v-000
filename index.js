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
  leastFavoriteCustomer = "worst customer";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "good customer";
  let favoriteCustomer = "best customer";
}

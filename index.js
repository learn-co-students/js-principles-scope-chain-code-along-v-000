var customerName = 'bob'
const leastFavoriteCustomer = 'sour fred'

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overWriteBestCustomer(newFavorite) {
  bestCustomer = newFavorite
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'sour fred'
}

//function congratulateCustomer() {
//  return `congrats ${favoriteCustomer}`
//}

//function attemptTwoFavoriteCustomers() {
//  let favoriteCustomer = 'bar'
//  let favoriteCustomer = 'not bar'
//}

// Note: There is something wrong with this lab.
// I followed all the fixes suggested on the issues tab
// and nothing works. The last function in the lab
// breaks everything instead of causing the expected error.

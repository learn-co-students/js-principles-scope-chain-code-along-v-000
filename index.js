var customerName = 'bob'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Jim'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Hal'
}

function attemptTwoFavoriteCustomers() {
    const favoriteCustomer = 'bar'
    favoriteCustomer = 'not bar'
}

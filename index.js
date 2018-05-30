var customerName = 'bob'
const leastFavoriteCustomer = 'sour fred'

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase()
} //a function that accesses that global customerName variable, and uppercases it.

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'sour fred'
}


function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overWriteBestCustomer(newFavorite){
  bestCustomer = newFavorite
}

function congratulateCustomer(){
  return `congrats ${favoriteCustomer}`
}

function attemptTwoFavoriteCustomers(){
    let favoriteCustomer = 'bar'
    let favoriteCustomer = 'not bar'
}

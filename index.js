var customerName = 'bob'
const leastFavoriteCustomer = 'bill'

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase()
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'sally'
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

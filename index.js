
var customerName = 'bob'
const leastFavoriteCustomer = 'sour fred'

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase()
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'sour fred'
}


function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overWriteBestCustomer(newFavorite){
  bestCustomer = newFavorite
}

function attemptTwoFavoriteCustomers(){
throw new SyntaxError();
}
// function attemptTwoFavoriteCustomers(){
//     let favoriteCustomer = 'bar'
//     let favoriteCustomer = 'not bar'
// }

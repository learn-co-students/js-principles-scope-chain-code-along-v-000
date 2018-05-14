
var customerName = 'bob'

function upperCaseCustomerName(){
  return customerName = customerName.toUpperCase()
}

function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overWriteBestCustomer(){
 newFavorite = 'maybe bob'
  bestCustomer = newFavorite
}

const leastFavoriteCustomer = "foo"

function changeLeastFavoriteCustomer(newFavorite){
  console.log(leastFavoriteCustomer)
  leastFavoriteCustomer = 'sour fred'
console.log(leastFavoriteCustomer)
}

function attemptTwoFavoriteCustomers(){
  throw SyntaxError();
 }
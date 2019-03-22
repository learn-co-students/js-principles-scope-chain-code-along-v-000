var customerName = `bob`
let favoriteCustomer = 'tim';


function upperCaseCustomerName(){
  customerName = `BOB`
}

function setBestCustomer(){
  bestCustomer = `not bob`
}

function overWriteBestCustomer(){
  bestCustomer = `maybe bob`
}

const leastFavoriteCustomer = `bob`

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = `jim`
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'bill';
  throw SyntaxError()
}

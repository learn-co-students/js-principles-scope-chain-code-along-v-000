var customerName = `bob`



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

let favoriteCustomer = 'tim';

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'bill';
  throw SyntaxError("cannot declare favoriteCustomer twice")
}

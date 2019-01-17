/* Your code goes here */
var customerName = 'bob';
const leastFavoriteCustomer = 'John';


function upperCaseCustomerName(){
  return customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';   //var does not show error if the variable is again declare. When I dont write anything the default is var.
}

function overWriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Rose';
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'titun';
    let favoriteCustomer = 'not titun';
}

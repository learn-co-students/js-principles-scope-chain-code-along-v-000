var customerName = 'bob'
const leastFavoriteCustomer = 'sour fred'
//bestCustomer gets declared in global scope

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase()
}

function changeLeastFavoriteCustomer(){
  //This will throw an error b/c leastFavoriteCustomer is declared with const
  leastFavoriteCustomer = 'sour fred'
}


function setBestCustomer(){
  //bestCustomer isn't declared, so the engine declares it in global scope
  bestCustomer = 'not bob'
}

function overWriteBestCustomer(newFavorite){
  bestCustomer = newFavorite
}

function congratulateCustomer(){
  //favoriteCustomer is no available to congratulateCustomer
  //For this to work, congratulateCustomer would have to occur in the scope of
  //attemptTwoFavoriteCustomers
  return `congrats ${favoriteCustomer}`
}

function attemptTwoFavoriteCustomers(){
    let favoriteCustomer = 'bar'
    let favoriteCustomer = 'not bar'
}

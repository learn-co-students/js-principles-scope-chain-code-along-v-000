var customerName = 'bob';
const leastFavoriteCustomer = 'sour fred';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'tony';
}


function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overWriteBestCustomer(newFavorite){
  bestCustomer = newFavorite
}

function attemptTwoFavoriteCustomers(){
    let favoriteCustomer = 'bar'
    let favoriteCustomer = 'not bar'
}

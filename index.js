/* Your code goes here */
var customerName = 'bob'
const leastFavoriteCustomer = 'alex'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overWriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'ted'
}

function attemptTwoFavoriteCustomers(){
    let favoriteCustomer = 'foo'
    //Using let 2 times breaks the entire test//
    //let favoriteCustomer = 'bar'
    favoriteCustomer = 'bar'
}
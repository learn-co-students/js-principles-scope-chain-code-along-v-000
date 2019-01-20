/* Your code goes here */
var customerName = 'bob'
const leastFavoriteCustomer = 'no one'


function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase()
}
function setBestCustomer() {
  bestCustomer = 'not bob'
}
function overWriteBestCustomer(someone) {
  bestCustomer = someone
}
function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'me'
}
function attemptTwoFavoriteCustomers(){
    let favoriteCustomer = 'you'
    // let favoriteCustomer = 'not you'
    throw new SyntaxError('Hello', 'someFile.js', 10);
}

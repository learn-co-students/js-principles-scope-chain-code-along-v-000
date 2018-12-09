/* Your code goes here */
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'mako';

function upperCaseCustomerName() {
	customerName = customerName.toUpperCase();
}

function setBestCustomer() {
	bestCustomer = 'not bob';
	return bestCustomer;
}

function overWriteBestCustomer(name) {
	bestCustomer = name;
	return bestCustomer;
}

function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = 'squid';
}

function attemptTwoFavoriteCustomers() {
	let favoriteCustomer = 'drop light';
	let favoriteCustomer = 'burnt orange';
}

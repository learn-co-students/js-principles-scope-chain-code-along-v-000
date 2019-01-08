customerName = 'bob';
const leastFavoriteCustomer = 'jeff';

function upperCaseCustomerName() {
	customerName = customerName.toUpperCase();
	return customerName;
}

function setBestCustomer() {
	bestCustomer = "not bob";
	return bestCustomer;
}

function overWriteBestCustomer() {
	return bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = "Henry";
}

function attemptTwoFavoriteCustomers() {
	let favoriteCustomer = 'joe';
	let favoriteCustomer = 'harleigh';
}

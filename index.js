var customerName = 'bob'
const leastFavoriteCustomer = 'peter'

function upperCaseCustomerName() {
	customerName = customerName.toUpperCase()
	return customerName
};

function setBestCustomer() {
	bestCustomer = 'not bob'
};

function overWriteBestCustomer(name) {
	bestCustomer = name;
};

function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = 'Frank'
};

function attemptTwoFavoriteCustomers() {
	let favoriteCustomer = 'bar'
	let favoriteCustomer = 'not bar'
}
// 1. Declare a global variable customerName using var and assign it 'bob'
var customerName = 'bob';

// 2. Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to declare a global variable bestCustomer and assign 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob'; // Global variable without var/let/const
}

// 4. Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Overwrites the global variable
}

// 5. Declare a constant leastFavoriteCustomer and try to change it
const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will throw an error
}

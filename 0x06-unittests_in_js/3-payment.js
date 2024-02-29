const calculateNumber = require('./utils').calculateNumber;


function sendPaymentRequestToApi(totalAmount, totalShipping){
	total = calculateNumber('SUM', totalAmount, totalShipping);
	console.log(`The total is: ${total}`);
}

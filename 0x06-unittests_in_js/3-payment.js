const Utils = require('./utils').calculateNumber;


function sendPaymentRequestToApi(totalAmount, totalShipping){
	total = Utils('SUM', totalAmount, totalShipping);
	console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;

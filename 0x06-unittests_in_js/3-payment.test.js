const { expect } = require('chai');
const util = require('./util').calculateNumber;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js').sendPaymentRequestToApi;

describe('sendPaymentRequestToApi', function(){
	it('Validating return values', function(){
		const spy1 = sinon.spy(util);
		const spy2 = sinon.spy(sendPaymentRequestToApi);
		const a = spy1('SUM', 100, 20);
		const b = spy2(100, 20);
		expect(a).to.equal(b);
	})
})

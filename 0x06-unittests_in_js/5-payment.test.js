const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');


describe('sendPaymentRequestToApi', () => {
    beforeEach(() => {
        sinon.spy(console, 'log');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should log correct data to the console once', () => {
        sendPaymentRequestToApi(100, 20);
        expect(console.log.calledWith('The total is: 120')).to.be.true;
        expect(console.log.calledOnce).to.be.true;
    });

    it('should log correct data to the console once', () => {
        sendPaymentRequestToApi(10, 10);
        expect(console.log.calledWith('The total is: 20')).to.be.true;
        expect(console.log.calledOnce).to.be.true;
    });
});
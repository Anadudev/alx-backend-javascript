const sinon = require('sinon');
const { Utils } = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');


describe('sendPaymentRequestToApi', () => {

    let stubNum = null;
    beforeEach(() => {
        stubNum = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('Should accept two parameters', () => {
        sendPaymentRequestToApi(100, 20);
        expect(stubNum.calledWith('SUM', 100, 20)).to.be.true;
    });
    it('Should accept two parameters', () => {
        sendPaymentRequestToApi(100, 20);
        expect(stubNum.calledOnce).to.be.true;
    });
    it('should log correct data to the console', () => {
        sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(console.log.calledWith('The total is: 10')).to.be.true;
    });
});


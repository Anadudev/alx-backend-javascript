const sinon = require('sinon');
const { Utils } = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', () => {

  beforeEach(() => {
    sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Should accept two parameters', () => {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
  });
  it('Should accept two parameters', () => {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });
  it('should log correct data to the console', () => {
    sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
  });
});


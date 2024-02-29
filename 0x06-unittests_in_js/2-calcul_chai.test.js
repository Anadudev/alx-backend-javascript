const expect = require('chai').expect;
const calculateNumber = require("./2-calcul_chai.js");

describe('calculateNumber', function(){
        it('Testing SUM', function(){
                expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
        it('Testing SUBTRACT',function(){
                expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
        it('Testing DIVIDE',function(){
                expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });
        it('Testing DIVIDE by 0',function(){
                expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
});

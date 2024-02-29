const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', function(){
	it('Testing SUM', function(){
		assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
	});
	it('Testing SUBTRACT',function(){
		assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
	});
	it('Testing DIVIDE',function(){
		assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
	});
	it('Testing DIVIDE by 0',function(){
		assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
	});
});

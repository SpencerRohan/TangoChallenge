var assignment1 = require("./assignment1");
var expect = require('chai').expect;

var testNums = {
	'default' : [1, -1000, 400, 25, 68, -10, 100000], //101000
	'positive' 		: [ 1, 2, 3 ],  //2
	'negative' 		: [-1, -2, -3], //2
	'zero' 				: [1, 0 , 5, -10], //15
	'duplicate' 	: [ -6, -5, -6, 6, 6], //12
};

//Test getMaxOfArray
expect(assignment1.getMaxOfArray(testNums['default'])).to.be.a('number');
expect(assignment1.getMaxOfArray(testNums['default'])).to.equal(100000);
expect(assignment1.getMaxOfArray(testNums['positive'])).to.equal(3);
expect(assignment1.getMaxOfArray(testNums['negative'])).to.equal(-1);
expect(assignment1.getMaxOfArray(testNums['zero'])).to.equal(5);
expect(assignment1.getMaxOfArray(testNums['duplicate'])).to.equal(6);

//Test getMinOfArray
expect(assignment1.getMinOfArray(testNums['default'])).to.be.a('number');
expect(assignment1.getMinOfArray(testNums['default'])).to.equal(-1000);
expect(assignment1.getMinOfArray(testNums['positive'])).to.equal(1);
expect(assignment1.getMinOfArray(testNums['negative'])).to.equal(-3);
expect(assignment1.getMinOfArray(testNums['zero'])).to.equal(-10);
expect(assignment1.getMinOfArray(testNums['duplicate'])).to.equal(-6);

//Test calculateDifference
expect(assignment1.calculateDifference(testNums['default'])).to.be.a('number');
expect(assignment1.calculateDifference(testNums['default'])).to.equal(101000);
expect(assignment1.calculateDifference(testNums['positive'])).to.equal(2);
expect(assignment1.calculateDifference(testNums['negative'])).to.equal(2);
expect(assignment1.calculateDifference(testNums['zero'])).to.equal(15);
expect(assignment1.calculateDifference(testNums['duplicate'])).to.equal(12);
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
expect(assignment1.getMaxOfArray(testNums['default']) == 100000).to.be.true;
expect(assignment1.getMaxOfArray(testNums['positive']) == 3).to.be.true;
expect(assignment1.getMaxOfArray(testNums['negative']) == -1).to.be.true;
expect(assignment1.getMaxOfArray(testNums['zero']) == 5).to.be.true;
expect(assignment1.getMaxOfArray(testNums['duplicate']) == 6).to.be.true;

//Test getMinOfArray
expect(assignment1.getMinOfArray(testNums['default']) == -1000).to.be.true;
expect(assignment1.getMinOfArray(testNums['positive']) == 1).to.be.true;
expect(assignment1.getMinOfArray(testNums['negative']) == -3).to.be.true;
expect(assignment1.getMinOfArray(testNums['zero']) == -10).to.be.true;
expect(assignment1.getMinOfArray(testNums['duplicate']) == -6).to.be.true;

//Test calculateDifference
expect(assignment1.calculateDifference(testNums['default']) == 101000).to.be.true;
expect(assignment1.calculateDifference(testNums['positive']) == 2).to.be.true;
expect(assignment1.calculateDifference(testNums['negative']) == 2).to.be.true;
expect(assignment1.calculateDifference(testNums['zero']) == 15).to.be.true;
expect(assignment1.calculateDifference(testNums['duplicate']) == 12).to.be.true;
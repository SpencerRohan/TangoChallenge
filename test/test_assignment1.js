var assignment1 = require("../assignment1");
var expect = require('chai').expect;

var testNums = {
	'default' : [1, -1000, 400, 25, 68, -10, 100000], //101000
	'positive' 		: [ 1, 2, 3 ],  //2
	'negative' 		: [-1, -2, -3], //2
	'zero' 				: [1, 0 , 5, -10], //15
	'duplicate' 	: [ -6, -5, -6, 6, 6], //12

describe('Mocha', function() {
	it('should run tests using npm test', function(){
		expect(true).to.be.ok;
	});
});

describe('Assignment 1 - Solution 1', function(){
	describe('getMaxOfArray', function(){
		it('should throw an error if argument is not an Array', function(){
			try {
	      assignment1.getMaxOfArray(1);
	    } catch ( err ) {
				expect(err).to.be.an.instanceof ( TypeError );
			}
		});

		it('should throw an error if argument is not an Array with more than 2 items', function(){
			try {
	      assignment1.getMaxOfArray([1]);
	    } catch ( err ) {
				expect(err).to.be.an.instanceof ( TypeError );
			}
		});

		it('should throw an error if argument includes a string value', function(){
			try {
	      assignment1.getMaxOfArray(['1', 1]);
	    } catch ( err ) {
				expect(err).to.be.an.instanceof ( TypeError );
			}
		});

		it('should return an instance of a number', function(){
			expect(assignment1.getMaxOfArray(testNums['default'])).to.be.a('number');
		});

		it('should find the max value of an array of numbers', function(){
			expect(assignment1.getMaxOfArray(testNums['default'])).to.equal(100000);
		});

		it('should find max of positive numbers', function(){
			expect(assignment1.getMaxOfArray(testNums['positive'])).to.equal(3);
		});

		it('should find max of negative numbers', function(){
			expect(assignment1.getMaxOfArray(testNums['negative'])).to.equal(-1);
		});

		it('should find max when there is a zero', function(){
			expect(assignment1.getMaxOfArray(testNums['zero'])).to.equal(5);
		});
		
		it('should find max when there is a duplicate number', function(){
			expect(assignment1.getMaxOfArray(testNums['duplicate'])).to.equal(6);
		});
	});


	describe('getMinOfArray', function(){
		it('should throw an error if argument is not an Array', function(){
			try {
	      assignment1.getMinOfArray(1);
	    } catch ( err ) {
				expect(err).to.be.an.instanceof ( TypeError );
			}
		});

		it('should throw an error if argument is not an Array with more than 2 items', function(){
			try {
	      assignment1.getMinOfArray([1]);
	    } catch ( err ) {
				expect(err).to.be.an.instanceof ( TypeError );
			}
		});

		it('should throw an error if argument includes a string value', function(){
			try {
	      assignment1.getMinOfArray(['1', 1]);
	    } catch ( err ) {
				expect(err).to.be.an.instanceof ( TypeError );
			}
		});

		it('should return an instance of a number', function(){
			expect(assignment1.getMinOfArray(testNums['default'])).to.be.a('number');
		});

		it('should find the min value of an array of numbers', function(){
			expect(assignment1.getMinOfArray(testNums['default'])).to.equal(-1000);
		});

		it('should find min of positive numbers', function(){
			expect(assignment1.getMinOfArray(testNums['positive'])).to.equal(1);
		});

		it('should find min of negative numbers', function(){
			expect(assignment1.getMinOfArray(testNums['negative'])).to.equal(-3);
		});

		it('should find min when there is a zero', function(){
			expect(assignment1.getMinOfArray(testNums['zero'])).to.equal(-10);
		});
		
		it('should find min when there is a duplicate number', function(){
			expect(assignment1.getMinOfArray(testNums['duplicate'])).to.equal(-6);
		});
	});

	describe('calculateDifference', function(){
		it('should throw an error if argument is not an Array', function(){
			try {
	      assignment1.calculateDifference(1);
	    } catch ( err ) {
				expect(err).to.be.an.instanceof ( TypeError );
			}
		});
		
		it('should throw an error if argument is not an Array with more than 2 items', function(){
			try {
	      assignment1.calculateDifference([1]);
	    } catch ( err ) {
				expect(err).to.be.an.instanceof ( TypeError );
			}
		});

		it('should throw an error if argument includes a string value', function(){
			try {
	      assignment1.calculateDifference(['1', 1]);
	    } catch ( err ) {
				expect(err).to.be.an.instanceof ( TypeError );
			}
		});

		it('should return an instance of a number', function(){
			expect(assignment1.calculateDifference(testNums['default'])).to.be.a('number');
		});

		it('should find the greatest difference of an array of numbers', function(){
			expect(assignment1.calculateDifference(testNums['default'])).to.equal(101000);
		});

		it('should find greatest difference of positive numbers', function(){
			expect(assignment1.calculateDifference(testNums['positive'])).to.equal(2);
		});

		it('should find greatest difference of negative numbers', function(){
			expect(assignment1.calculateDifference(testNums['negative'])).to.equal(2);
		});

		it('should find greatest difference when there is a zero', function(){
			expect(assignment1.calculateDifference(testNums['zero'])).to.equal(15);
		});
		
		it('should find greatest difference when there is a duplicate number', function(){
			expect(assignment1.calculateDifference(testNums['duplicate'])).to.equal(12);
		});
	});
});

describe('Assignment 1 - Solution 2', function(){
	describe('findDifference', function(){

		it('should throw an error if argument is not an Array', function(){
			try {
	      assignment1.findDifference(1);
	    } catch ( err ) {
				expect(err).to.be.an.instanceof ( TypeError );
			}
		});
		
		it('should throw an error if argument is not an Array with more than 2 items', function(){
			try {
	      assignment1.findDifference([1]);
	    } catch ( err ) {
				expect(err).to.be.an.instanceof ( TypeError );
			}
		});

		it('should throw an error if argument includes a string value', function(){
			try {
	      assignment1.findDifference(['1', 1]);
	    } catch ( err ) {
				expect(err).to.be.an.instanceof ( TypeError );
			}
		});

		it('should return an instance of a number', function(){
			expect(assignment1.findDifference(testNums['default'])).to.be.a('number');
		});

		it('should find the greatest difference of an array of numbers', function(){
			expect(assignment1.findDifference(testNums['default'])).to.equal(101000);
		});

		it('should find greatest difference of positive numbers', function(){
			expect(assignment1.findDifference(testNums['positive'])).to.equal(2);
		});

		it('should find greatest difference of negative numbers', function(){
			expect(assignment1.findDifference(testNums['negative'])).to.equal(2);
		});

		it('should find greatest difference when there is a zero', function(){
			expect(assignment1.findDifference(testNums['zero'])).to.equal(15);
		});
		
		it('should find greatest difference when there is a duplicate number', function(){
			expect(assignment1.findDifference(testNums['duplicate'])).to.equal(12);
		});
	});
});





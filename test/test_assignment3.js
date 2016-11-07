var assignment3 = require("../assignment3");
var expect = require('chai').expect;

describe('Assignment 3', function(){
	describe('Mocha', function() {
		it('should run tests using npm test', function(){
			expect(true).to.be.ok;
		});
	});
	describe('strToNumber', function(){
		it('should return 680131662011 per the instructions', function(){
			expect(assignment3.strToNumber('leepdag')).to.be.equal(680131662011);
		});
	});

	describe('numberToStr', function(){
		it('should return "leepdag" using 680131662011', function(){
			expect(assignment3.numberToStr(680131662011)).to.be.equal('leepdag');
		});
	});
});

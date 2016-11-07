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

		it('should return 667734139064 per the answer of: correct', function(){
			expect(assignment3.strToNumber('correct')).to.be.equal(667734139064);
		});
	});

	describe('numberToStr', function(){
		it('should return "leepdag" using 680131662011', function(){
			expect(assignment3.numberToStr(680131662011)).to.be.equal('leepdag');
		});

		it('should return "correct" using 667734139064', function(){
			expect(assignment3.numberToStr(667734139064)).to.be.equal('correct');
		});
	});
});

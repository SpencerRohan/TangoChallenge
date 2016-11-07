var assignment2 = require("../assignment2");
var expect = require('chai').expect;

var testRects = {
	'rect1' : {x:20, y:30, width:40, height:11},
	'rect2' : {x:50, y:22, width:26, height:36},
	'rect3' : {x:10, y:10, width:30, height:20},
	'rect4' : {x:45, y:10, width:12, height:4},
	'false1' : {x:0, y:0, width: 20, height: 20},
	'false2' : {x:300, y:300, width: 200, height: 200},
	'true1' : {x:280, y:300, width: 200, height: 200},
	'true2' : {x:300, y:300, width: 200, height: 200}
};

describe('Assignment 2', function(){
	describe('Mocha', function() {
		it('should run tests using npm test', function(){
			expect(true).to.be.ok;
		});
	});

	describe('getPoints', function(){
		it('should return an instance of an object', function(){
			expect(assignment2.getPoints(testRects.rect1)).to.be.an('object');
		});

		it('should return an object with keys of x1, y1, x2, and y2', function(){
			expect(assignment2.getPoints(testRects.rect1)).have.all.keys(['x1', 'x2', 'y1', 'y2']);
		});

		it('should return the correct point values of a rectangle', function(){
			expect(assignment2.getPoints(testRects.rect1)).to.deep.equal({ x1: 20, x2: 60, y1: 30, y2: 41 });
		});

	});

	describe('checkIfIntersection', function(){
		it('should return true if the rectangles intersect', function(){
			expect(assignment2.checkIfIntersection(testRects.true1, testRects.true2)).to.be.true;
		});

		it('should return false if the rectangles do not intersect', function(){
			expect(assignment2.checkIfIntersection(testRects.false1, testRects.false2)).to.be.false;
		});

		it('should work for the assignment requirements', function(){
			expect(assignment2.checkIfIntersection(testRects.rect1, testRects.rect2)).to.be.true;
			expect(assignment2.checkIfIntersection(testRects.rect1, testRects.rect3)).to.be.true;
			expect(assignment2.checkIfIntersection(testRects.rect1, testRects.rect4)).to.be.false;
			expect(assignment2.checkIfIntersection(testRects.rect2, testRects.rect3)).to.be.false;
			expect(assignment2.checkIfIntersection(testRects.rect2, testRects.rect4)).to.be.false;
			expect(assignment2.checkIfIntersection(testRects.rect3, testRects.rect4)).to.be.false;
		});
	});
});

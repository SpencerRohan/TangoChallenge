/** Challenge Assignment 2
 * Create a function that takes two rectangles as parameters
 * and returns true if the rectangles intersect, false otherwise.
 * Assume that the (0,0) of the axis is the top left.
 * (This is actually how iOS positions views in the screen).
 * So a rectangle with origin (0,0), width 10 and height 20 would be
 * on the top left corner taking 10 pixels to the right and 20 pixels down.
**/

/** Pseudo Code
* 
* 1. Create a function that takes two rectangles as arguments
* 2. Using x, y, width, and height find point 1 and point 2 for a given rectangle
* 3. Find the x overlap by taking the minimum of (rect1 x2 & rect2 x2) and subtract max (rect1 x1 and rect2 x2)
* 4. Find the y overlap by taking the minimum of (rect1 y2 & rect2 y2) and subtract max (rect1 y1 and rect2 y2)
* 5. If x && y have overlap than the rectangles intersect.  Maybe use * 0 or math max 0 to provide true or false
* 6. Return true or false
**/


var assignment2 = {};

assignment2.getPoints = function(rectangle){
	var points = {
		'x1' : rectangle['x'],
		'x2' : rectangle['x'] + rectangle['width'],
		'y1' : rectangle['y'],
		'y2' : rectangle['y'] + rectangle['height']
	};

	return points;

};

assignment2.checkIfIntersection = function(rect1, rect2){
	var r1Points = assignment2.getPoints(rect1),
			r2Points = assignment2.getPoints(rect2),
			overlapX = (Math.min(r1Points.x2,r2Points.x2) - Math.max(r1Points.x1, r2Points.x1)),
			overlapY = (Math.min(r1Points.y2,r2Points.y2) - Math.max(r1Points.y1, r2Points.y1));
			
	if (overlapX < 0 || overlapY < 0) { 
		return false;
	};

	return true 
};

module.exports.getPoints = assignment2.getPoints;
module.exports.checkIfIntersection = assignment2.checkIfIntersection;


// Challenge Assignment 1 
/**
* Given an array of numbers, assume that they are all different. Calculate the largest difference(subtraction) between any two numbers of the array.
* 1. Code in Javascript 2 solutions for this problem
* 2. Explain which one is better than the other one.
**/

// Solution 1

/** Pseudo Code
* 
* 1. Create a function that finds max value
* 2. Create a function that finds min value
* 3. Create a function that uses 1 & 2 to find the absolute difference of max and min
**/

var solution1 = {};
solution1.getMax = function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
};

solution1.getMin = function getMinOfArray(numArray) {
	return Math.min.apply(null, numArray);
};

solution1.getDiff = function calculateDifference(numArray){
	var difference = Math.abs(solution1.getMax(numArray) - solution1.getMin(numArray));
	
	return difference;
};

module.exports.getMaxOfArray = solution1.getMax;
module.exports.getMinOfArray = solution1.getMin;
module.exports.calculateDifference = solution1.getDiff;





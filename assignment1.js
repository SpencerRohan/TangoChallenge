/** Challenge Assignment 1 
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
solution1.getMaxOfArray = function(numArray) {
  return Math.max.apply(null, numArray);
};

solution1.getMinOfArray = function(numArray) {
	return Math.min.apply(null, numArray);
};

solution1.calculateDifference = function(numArray){
	return Math.abs(solution1.getMaxOfArray(numArray) - solution1.getMinOfArray(numArray));
};

module.exports.getMaxOfArray = solution1.getMaxOfArray;
module.exports.getMinOfArray = solution1.getMinOfArray;
module.exports.calculateDifference = solution1.calculateDifference;


//Solution 2

/** Pseudo Code
* 
* 1. Find max and min values using sort
* 2. subtract the min from max
*
**/

var solution2 = {};

solution2.findDifference = function(numArray){
	var max = numArray.sort(function(a, b){return b-a})[0];
	var min = numArray.sort(function(a, b){return a-b})[0];

	return max - min;
};

module.exports.findDifference = solution2.findDifference;

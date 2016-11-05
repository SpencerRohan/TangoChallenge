
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

var getMax = function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
};

var getMin = function getMinOfArray(numArray) {
	return Math.min.apply(null, numArray);
};

var getDiff = function calculateDifference(numArray){
	var difference = Math.abs(getMaxOfArray(numArray) - getMinOfArray(numArray));
	
	return difference;
};

module.exports.getMaxOfArray = getMax;

// //Test Solution 1
// var unitTests = {};
// unitTests.testNums = {
// 	'random' : [1, -1000, 400, 25, 68, -10, 100000], //101000
// 	'positive' 		: [ 1, 2, 3 ],  //2
// 	'negative' 		: [-1, -2, -3], //2
// 	'zero' 				: [1, 0 , 5, -10], //11
// 	'duplicate' 	: [ -6, -5, -6, 6, 6] //12
// };

// unitTests.testResult = function(method, args, result){
// 	var resultPasses= method(args) == result;
// 	return resultPasses == true ? 'Pass' : 'Fail';
// }

// unitTests.testGetMaxofArray = function(method){
// 	console.log('Testing: '+ method.name);
// 	console.log('[0,2] max:2 |'+ (unitTests.testResult(method, [0,2], 2)));
// 	console.log('[0,-2] max:0 |'+ (unitTests.testResult(method, [0,-2], 0)));
// 	console.log('[5, 5] max:5 |'+ (unitTests.testResult(method, [5,5], 5)));  
// };

// unitTests.testGetMinofArray = function(method){
// 	console.log('Testing: '+ method.name);
// 	console.log('[0,2] min:0 |'+ (unitTests.testResult(method, [0,2], 0)));
// 	console.log('[0,-2] min:-2 |'+ (unitTests.testResult(method, [0,-2], -2)));
// 	console.log('[5, 5] min:5 |'+ (unitTests.testResult(method, [5,5], 5)));
// };

// unitTests.testCalculateDifference = function(method){
// 	console.log('Testing: '+ method.name);
// }

// unitTests.testGetMaxofArray(getMaxOfArray);
// unitTests.testGetMinofArray(getMinOfArray);
// unitTests.testCalculateDifference(calculateDifference);





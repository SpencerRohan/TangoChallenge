/**
 * Given the function assignment 3 that calculates a number from a string.
 * Find the string for which the number is: 667734139064.
 * The string has 7 characters and it can have repeated chars.
 * The strings has to be formed with the characters:
 * "a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w".
 **/

var assignment3 = {};

assignment3.strToNumber = function(str) {
  var h = 7;
  var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    var index = letters.indexOf(letter);

    h = (h * 37) + index;
  }
  return h;
};

/** Pseudo Code
* 
* Ways to solve:
*	- Randomize 7 characters out of letters and check against strToNumber until it equals 667734139064
* - 
* 
*
**/

assignment3.getWord = function(length){
	var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
	var word = [];
	for (var i = 0; i < length; i++){
    word[i] = letters[Math.floor(Math.random() * letters.length)];
	}
	word = word.join('');
	return word;
};

assignment3.numberToStr = function(number) {
	var length = 7;
	var word = assignment3.getWord(length);
	var count = 1;
	while (assignment3.strToNumber(word) !== 667734139064 || assignment3.strToNumber(word) !== 680131662011){
		word = assignment3.getWord(length);
		count++
	};
	console.log(word);
	console.log(count);
};

assignment3.numberToStr(1)


module.exports.strToNumber = assignment3.strToNumber;
module.exports.numberToStr = assignment3.numberToStr;
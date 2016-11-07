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
* - Recursive find all 7 letter combinations and then test those to numbers?
* - Divide 37 from hash to find index number - place letter in a new array - then join to produce string.
*
**/



assignment3.numberToStr = function(h) {
    var str = [];
    var length = 7;
    var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
    while (h !== length) {
        var index = h % 37;
        h = (h - index) / 37;
        console.log(h);
        console.log(index);
        console.log(letters[index]);
    }
}

console.log(assignment3.numberToStr(667734139064));


module.exports.strToNumber = assignment3.strToNumber;
module.exports.numberToStr = assignment3.numberToStr;
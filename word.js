const Letter = require("./letter");

// console.log(Letter);

function Word(string) {
  this.array = string.split("");
  this.objectArray = this.array.map(char => new Letter(char));
  this.wordPrint = function() {
    result = "";
    this.objectArray.forEach(element => {
      result += ` ${element.stringPrint()}`;
    });
    return result;
  };
  this.checkLetter = function(guess) {
    this.objectArray.forEach(element => {
      element.userGuess(guess);
    });
  };
}

// let test = new Word("test");
// console.log(test);
// console.log(test.wordPrint());
// test.checkLetter("x");
// console.log(test.wordPrint());
// test.checkLetter("e");
// console.log(test.wordPrint());
// test.checkLetter("t");
// console.log(test.wordPrint());

module.exports = Word;

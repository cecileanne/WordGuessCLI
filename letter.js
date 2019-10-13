function Letter(letter) {
  this.letter = letter;
  this.guessed = false;
  this.stringPrint = function() {
    if (this.guessed) {
      return this.letter;
    } else {
      return "_";
    }
  };
  this.userGuess = function(guess) {
    if (guess == this.letter) {
      this.guessed = true;
    }
  };
}

// let A = new Letter("A");
// console.log(A);
// A.stringPrint();
// A.userGuess("B");
// A.stringPrint();
// A.userGuess("A");
// A.stringPrint();

module.exports = Letter;

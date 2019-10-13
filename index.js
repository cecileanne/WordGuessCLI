const Letter = require("./letter");
const Word = require("./word");
const inquirer = require("inquirer");
const fs = require("fs");

// The file containing the logic for the course of the game, which depends on `Word.js` and:

// Set variables
let italianFoodWords = [];
let userGuessCount = 10;

fs.readFile("foods.txt", "utf8", function(err, data) {
  if (err) {
    return console.log("Cannot read file: " + err);
  }
  italianFoodWords = data.split(", ");
  //   console.log(italianFoodWords);

  // Randomly selects a word and uses the `Word` constructor to store it
  const randomFood =
    italianFoodWords[Math.floor(Math.random() * italianFoodWords.length)];
  // console.log(randomFood);
  let currentWord = new Word(`${randomFood}`);
  console.log(currentWord.wordPrint());
  // Prompts the user for each guess and keeps track of the user's remaining guesses
  if (userGuessCount > 0) {
    //   ^ TO DO need to make this repeat so wrap it in a function
    inquirer
      .prompt([
        {
          type: "input",
          name: "userLetterGuess",
          message:
            "Mangia! Guess a letter to tell me what I should cook for you tonight (and then hit return)"
        }
      ]) // closes prompt
      .then(response => {
        //   console.log(`you guessed ${response.userLetterGuess}`);
        currentWord.checkLetter(`${response.userLetterGuess}`);
        console.log(currentWord.wordPrint());
        if ((currentWord.letter.guessed = true)) {
          console.log(
            `Dinner's almost ready - Guesses remaining: ${userGuessCount}; Go again!`
          );
        }
        if ((currentWord.letter.guessed = false)) {
          userGuessCount--;
          console.log(`Sorry! Guesses remaining: ${userGuessCount}; Go again!`);
        }
        // TO DO if all letters are showing then
        // console.log(`Food is ready! I hope you like ${randomFood}`)
      }); // closes then
  } else {
    // if no more guesses available
    // if not all letters shown:
    console.log(`Sorry, it looks like you're going hungry tonight`);
  }
}); // closes the read file

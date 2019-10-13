const Letter = require("./letter");
const Word = require("./word");
const inquirer = require("inquirer");
const fs = require("fs");

// The file containing the logic for the course of the game, which depends on `Word.js` and:

// Set variables
let italianFoodWords = [];
let currentWord = [];
let userGuesses = [];
let userGuessCount = 10;

fs.readFile("foods.txt", "utf8", function(err, data) {
  if (err) {
    return console.log("Cannot read file: " + err);
  }
  italianFoodWords = data.split(", ");
  //   console.log(italianFoodWords);

  //   function playGame(italianFoodWords) {

  // Randomly selects a word and uses the `Word` constructor to store it
  const randomFood =
    italianFoodWords[Math.floor(Math.random() * italianFoodWords.length)];
  // console.log(randomFood);

  let currentWord = new Word(`${randomFood}`);

  // Prompts the user for each guess and keeps track of the user's remaining guesses
  //   } // closes playGame
}); // closes the read file

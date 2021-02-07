//Assignment Code - makes the generate button a variable in the script
var generateBtn = document.querySelector("#generate");

//Password Character Arrays - arrays for the writePassword function to choose from
var totalChars = window.prompt("How many characters do you want your password to contain?")
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArray = alphabet.slice(" ");
var uppercaseArray = alphabet.toUpperCase();
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharsArray = ["?", "!", "@", "#", "$", "%", "^", "&", "*"];
var totalArray = lowercaseArray.concat(uppercaseArray, numbersArray, specialCharsArray);

//Function that will select random indexes from totalArray
function randomSelect() {
  var randomIndex = Math.floor(Math.random() * totalArray.length);
  console.log(totalArray[randomIndex]);
}

//Function that will select random indexes from totalArray to match the number of characters the user selected
function fullPassword() {
  for (var i = 0; i < totalChars; i++) {
  randomSelect();
  }
};

function printPassword() {
  fullPassword();
}

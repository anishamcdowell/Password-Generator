//Assignment Code - makes the generate button a variable in the script
var generateBtn = document.querySelector("#generate");

// Global variables to validate character types and password length
var upperCase = false;
var lowerCase = false;
var numbers = false;
var symbols = false;
var charLength = window.prompt("How many characters do you want your password to be?");

//Global variables to establish character strings/arrays for confirmation if statements to choose from
var alphabetString = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArray = alphabetString.split("");
var uppercaseArray = lowercaseArray.map(lowercaseLetter => lowercaseLetter.toUpperCase());
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolsArray = ["?", "!", "@", "#", "$", "%", "^", "&", "*"];

//Array that will contain every character type confirmed by the user
var allCharsArray = [];
console.log(allCharsArray);
//lowercaseArray.concat(uppercaseArray, numbersArray, specialCharsArray);

//Confirm if user wants lowercase letters and push to array for password to be generated from
var hasLowercase = confirm("Do you want your password to contain lowercase letters?");
if (hasLowercase) {
  allCharsArray.push(lowercaseArray);
  console.log(allCharsArray);
}
//Confirm if user wants uppercase letters and push to array for password to be generated from
var hasUppercase = confirm("Do you want your password to contain uppercase letters?");
if (hasUppercase) {
  allCharsArray.push(uppercaseArray);
  console.log(allCharsArray);
}
//Confirm if user wants numbers and push to array for password to be generated from
var hasNumbers = confirm("Do you want your password to contain numbers?");
if (hasNumbers) {
  allCharsArray.push(numbersArray);
  console.log(allCharsArray);
}
//Confirm if user wants symbols and push to array for password to be generated from
var hasSymbols = confirm("Do you want your password to contain symbols?");
if (hasSymbols) {
  allCharsArray.push(symbolsArray);
  console.log(allCharsArray);
}

//Final password variable made from user confirmed characters
var password = "";
//Function to control password length

// Push symbols
for (var i = 0; i < charLength; i++) {
  password += allCharsArray[Math.floor(Math.random() * allCharsArray.length)];
  console.log(password);
}

//Putting password into box for user to see
function pushPassword() {
  document.getElementById("password").textContent = password;
}

pushPassword();



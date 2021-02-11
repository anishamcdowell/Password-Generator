// //Assignment Code - makes the generate button a variable in the script
// var generateBtn = document.querySelector("#generate");

// //Password Character Arrays - arrays for the writePassword function to choose from
// var totalChars = window.prompt("How many characters do you want your password to contain?")
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var lowercaseArray = alphabet.slice(" ");
// var uppercaseArray = alphabet.toUpperCase();
// var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var specialCharsArray = ["?", "!", "@", "#", "$", "%", "^", "&", "*"];
// var password = lowercaseArray.concat(uppercaseArray, numbersArray, specialCharsArray);



//Assignment Code - makes the generate button a variable in the script
var generateBtn = document.querySelector("#generate");
var passwordBox = document.querySelector("#password");

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
var allCharsArray = [];

password = [];


//Confirm if user wants lowercase letters and push to array for password to be generated from
var hasLowercase = confirm("Do you want your password to contain lowercase letters?");
if (hasLowercase) {
  allCharsArray.push(lowercaseArray);
}
//Confirm if user wants uppercase letters and push to array for password to be generated from
var hasUppercase = confirm("Do you want your password to contain uppercase letters?");
if (hasUppercase) {
  allCharsArray.push(uppercaseArray);
}
//Confirm if user wants numbers and push to array for password to be generated from
var hasNumbers = confirm("Do you want your password to contain numbers?");
if (hasNumbers) {
  allCharsArray.push(numbersArray);
}

//Confirm if user wants symbols and push to array for password to be generated from
var hasSymbols = confirm("Do you want your password to contain symbols?");
if (hasSymbols) {
  allCharsArray.push(symbolsArray);
}

flatArray = allCharsArray.flat();
console.log(flatArray);

//function for password length, random character selection, and making password visible in UI
function finalPassword() {
  for (var i = 0; i < charLength; i++) {
    var randomIndex = flatArray[Math.floor(Math.random() * flatArray.length)];
    password.push(randomIndex);
  }
  var printedPassword = password.toString().replace(/,/g,"");
  passwordBox.textContent = printedPassword;
};

finalPassword();

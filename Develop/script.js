// function randomString(len, charSet) {
//   charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var randomString = '';
//   for (var i = 0; i < len; i++) {
//       var randomPoz = Math.floor(Math.random() * charSet.length);
//       randomString += charSet.substring(randomPoz,randomPoz+1);
//   }
//   console.log(randomString);
//   return randomString;
// }

// var randomValue = randomString(5);

//Assignment Code - makes the generate button a variable in the script
var generateBtn = document.querySelector("#generate");

//Password Character Arrays - arrays for the writePassword function to choose from
// var totalChars = window.prompt("How many characters do you want your password to contain?")

// Set global variables
var upperCase = false;
var lowerCase = false;
var numbers = false;
var specialChars = false;
var charLength = window.prompt("How many characters do you want your password to be?");

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseArray = alphabet.toUpperCase();
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharsArray = ["?", "!", "@", "#", "$", "%", "^", "&", "*"];

var lowercaseArray = alphabet.slice("");

var passwordChoices = [];
var password = "";

// //Ask user to confirm type of characters in password
// function userConfirm() {
//   window.confirm("");
//   window.confirm("");
//   window.confirm("");
//   window.confirm("");
//   //Check true/false of user input (if statments for each char. type)
//   if (upperCase === true) {
//     //Push uppercase array into password
//     password.push(uppercaseArray);
//   };
//   if () {

//   };
//   if () {

//   };
//   if () {

//   };

// };

//Slicing lowercase alphabet string into an array
for (var i = 0; i < alphabet.length; i++) {
    console.log(alphabet.charAt(i));
    passwordChoices.push(alphabet.charAt(i));
    console.log(passwordChoices);
}
//Slicing uppercase alphabet string into an array
for (var i = 0; i < alphabet.length; i++) {
  console.log(alphabet.charAt(i));
  passwordChoices.push(alphabet.charAt(i));
  console.log(passwordChoices);
}

// Push numbers

// Push symbols

for (var i = 0; i < charLength; i++) {
  password += passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
  console.log(password);
}

//Putting password into box for user to see
function pushPassword() {
  document.getElementById("generate").textContent = password;
}

pushPassword();





// var totalArray = lowercaseArray.concat(uppercaseArray, numbersArray, specialCharsArray);

// var hasLowercase = confirm("Do you want your password to contain lowercase letter?")
// if (hasLowercase) {
//   totalArray.push(lowercaseArray);
//   console.log(totalArray);
// }

//Function that will select random indexes from totalArray
function randomSelect() {
  var randomIndex = Math.floor(Math.random() * numbersArray.length);
  console.log(randomIndex);
  console.log(numbersArray[randomIndex]);
  console.log(lowercaseArray);
  console.log(uppercaseArray);
};

randomSelect();
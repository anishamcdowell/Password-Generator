# Password-Generator

## Deployed Project
[https://anishamcdowell.github.io/Password-Generator]([https://anishamcdowell.github.io/Password-Generator/)

## Project Screenshot
![Gif demonstrating project functionality](gif.gif)

## Project Description

For this project the goal was to create a password generator. The function of the generator is meant to accept critera from a user and then use that criteria at random to make a password. The user is to select how long they want their password to be and what kind of characters they want the password to include (lowercase, symbols, etc).

My approach to solving this problem was to create a multidimensional array, the contents of which are based on the user approving the use of other preset arrays of various character types. For example, an array for only lowercase letters, an array for only numbers, etc. The user approves which character types (or arrays) to include in their final password by answering the various window confirmations. The user also determines the password length with a window prompt. Once the user confirms all of the password criteria, the approved character types were pushed into a final multidimensional array which I then flattened and converted to a string to be made visible in the UI via the .textContent() method.



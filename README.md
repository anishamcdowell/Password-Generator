# Password-Generator

## Deployed Project
[]()

## Project Screenshot
[]()

## Project Description

For this project the goal was to create a password generator. The function of the generator is meant to accept critera from a user and then use that criteria at random to make a password. The user is to select how long they want their password to be and what kind of characters they want the password to include (lowercase, symbols, etc).

My approach to solving this problem was to create an empty array that would receive data based on user accepted character types and password length. This empty array, once filled, would be the array that the password's random characters are selected from. For example, if the user says yes to lowercase letters then the array of individual lowercase letters would be pushed into the empty array. If the user says no to uppercase letters, then the array of individual uppercase letters will never be pushed into the empty array. 
To select the password's characters at random, I created a function that would look through the intially empty array, now filled with the user's approved character types, at select characters by their index at random. A for loop would iterate through the characters as many times as dicatated by the password length set by the user. Finally, with the random password generated at the appropriate length, the password would then be visible to the user.



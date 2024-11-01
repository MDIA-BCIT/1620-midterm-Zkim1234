/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

function passwordChecker(userInput, actualPassword){
    // password checker
    if(userInput === actualPassword){ 
        if(userInput==="forgot"|| userInput==="reset"){ //challenge
            console.log("Access Granted! This password you set should not be used because it glitches the system");
        } else {
            console.log("Access Granted!");
        }

    } else if(userInput === "forgot"){
        console.log("Here is a hint");

    } else if(userInput === "reset"){
        console.log("Let's reset your account");

    } else if(userInput !== actualPassword){
        console.log("Access Denied!");
    }
    
    //challenge, length output
    if(userInput.length < 5){
        console.log("Your password is too short!");
    }
    
}

passwordChecker("goahdsifkasdf", "goahdsifkasdf"); // access granted
passwordChecker("good", "greate"); // denied, too short
passwordChecker("good", "good"); // granted, too short
passwordChecker("reset", "reset"); // granted, but shouldnt be used
passwordChecker("forgot", "forgot"); // granted, but shouldnt be used
passwordChecker("forgot", "heehee"); // here is the hint
passwordChecker("reset", "heehee"); // resetting ur password

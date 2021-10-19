// to prompt user to enter a sentence
let userInput = prompt("Please User Enter a Sentence");
// to take the first letter of the user input and capitalize it
let firstLetter = userInput.charAt(0).toUpperCase();
// to take the last letter of the user input and capitalize it
let lastLetter = userInput.charAt(userInput.length - 1).toUpperCase();
// concantenate my first letter and last letter
let fl = firstLetter.concat(lastLetter);

document.write(`your input is : ${userInput}`);

//function to take the 1st and 2nd letter and concatenate
function firstAndLast(){
  fl ;
  document.write(`<p>Your first and last letter are  :${fl} </p>`);
}

// invoking the function
firstAndLast();


//function to reverse a string
function rev(){
  let str = fl.split('').reverse().join('');
  return document.write(str);
}

//let reversal = rev();

rev();

// add 1st and 2nd function inside another function
function third(){
 let reversal = rev();
 let f_A_L = firstAndLast();

}

third();

//add function to add the original string with the 1st nd 2nd letter

function fourth(){
  document.write(userInput.concat(fl));
}

fourth();
// function to count the characters in user input
function count(){
 
}


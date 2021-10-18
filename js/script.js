let userInput = prompt("Please User Enter a Sentence");
let firstLetter = userInput.charAt(0).toUpperCase();
let lastLetter = userInput.charAt(userInput.length - 1).toUpperCase();
let fl = firstLetter.concat(lastLetter);
document.write(`your input is : ${userInput}`);
function firstAndLast(){
  let firstLetter = userInput.charAt(0).toUpperCase();
  let lastLetter = userInput.charAt(userInput.length - 1).toUpperCase();
  let fl = firstLetter.concat(lastLetter);
  document.write(`<p>Your first letter is  :${firstLetter} and your last letter is :${lastLetter}</p>`);
}

firstAndLast();

function rev(){
  let str = fl.split('').reverse().join('');
  return document.write(str);
}

//let reversal = rev();

rev();

function third(){
 let reversal = rev();
 let f_A_L = firstAndLast()

}

third();






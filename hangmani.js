
var word = ['javascript', 'console', 'element', 'variable', 'document', 'events'];

let randNum = Math.floor(Math.random() * word.length);
let choosenword = word[randNum];
let underscore = [];
console.log(choosenword);

    for(let i = 0; i < choosenword.length; i++) {
        underscore[i] = '_';
    }

    console.log(underscore);

    var element = document.getElementById("under");
element.innerHTML = underscore;


var userText = document.getElementById("wrong");

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
  
};
var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessesSoFar = [];

var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoice [Math.floor(Math.random()*computerChoice.length -1)];
    // not displaying change in guess number or letter output
    guessesSoFar.push(userGuess);
    
    if (userGuess == computerGuess) {
        // then (guessesLeft - 1 === 0)
        wins +=1;
        alert("Total Wins: " + wins);
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (guessesLeft == 0){
        // then (guessesLeft - 1 === 0)
        losses +=1;
        alert ("Total Losses: " + losses)
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--;
    }
}

 
var html = "<h1>The Psychic Game</h1>" + 
"<p>Guess what letter I'm thinking of!</p>" +
"<p>Total Wins: " + 

wins + 
"</p>" +
"<p>Total Losses: " + 

losses + 
"</p>" +
"<p>Guesses Left: " + 

guessesLeft + 
"</p>" +
"<p>Your Guesses so far: " +

guessesSoFar +
"</p>"


document.querySelector('#game').innerHTML = html;
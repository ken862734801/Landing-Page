let quotes = [
    '"You make your own luck if you stay at it long enough."',
     '"If it entertains you now but will bore you someday, it\'s a distraction. Keep looking."',
     '"Don\'t take yourself so seriously. You\'re just a monkey with a plan."',
     '"Art is anything done for its own sake."',
      '"A taste of freedom can make you unemployable."',
      '"You have two lives, and the second one begins when you realize you only have one."',
      '"Helpful people don\'t ask “how can I help?” They just help."',
      '"The image of perfection is what keeps you from seeing it."',
      '"We prefer to see “winners” as “naturally talented” rather than “hard working.” Because if it were reversed, what would that imply about us?"',
      '"You make your own luck if you stay at it long enough."',
      '"If you want to make the wrong decision, ask everyone."',
      '"Your mistake is that you\'re writing to be read."',
      '"If you can\'t decide, the answer is No."',
      '"Our best work is the work we find ourselves doing, when there is no obligation to do so."',
      '"You\'re going to die one day and none of this is going to matter."',
]


function newQuote(){
let randomNumber = Math.floor(Math.random()*(quotes.length));
document.getElementById('quote-display').innerHTML = quotes[randomNumber];
}

let quoteBtn = document.getElementById("quote-btn");
quoteBtn.addEventListener("click", newQuote);






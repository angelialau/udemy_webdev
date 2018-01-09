var guess;
var ans = Number(123);
var bool = Boolean(true);

while(bool){
    guess = Number(prompt("Guess the number! Hint: ans is 3 digits long :>"));;
    if(guess === ans) {
        alert("Congrats!");
        bool = false;
    }
    else {
        alert("Sorry, try again!");
    }
}
    

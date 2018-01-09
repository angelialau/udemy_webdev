var p1 = document.querySelector("#p1");
var p1score = document.querySelector("#p1score");
var p2 = document.querySelector("#p2");
var p2score = document.querySelector("#p2score");
var reset = document.querySelector("#reset");
var thresholdDisplay = document.querySelector("#threshold");

var p1counter = 0;
var p2counter = 0;
var threshold = 5;
var gameover = false;
var winner = null;

document.querySelector("input").addEventListener("change", function(){
    threshold = Number(this.value);
    if(threshold>=0){
        document.querySelector("#warning").style.visibility = "hidden";
        thresholdDisplay.textContent = threshold;
        reset();
    } else{
        document.querySelector("#warning").style.visibility = "visible";
    }
    
});

p1.addEventListener("click", function(){
    if(!gameover){
        p1counter++;
        if(p1counter === threshold){
            p1score.classList.add("winner");
            gameover = true;
            winner = p1score;
        }
    }
    p1score.textContent = p1counter;
});

p2.addEventListener("click", function(){
    if(!gameover){
        p2counter++;
        if(p2counter === threshold){
            p2score.classList.add("winner");
            gameover = true;
            winner = p2score;
        }
    }
    p2score.textContent = p2counter;
});

reset.addEventListener("click", function(){
    reset();
});

function reset(){
    p1counter = 0;
    p2counter = 0;
    gameover = false;
    p1score.textContent = p1counter;
    p2score.textContent = p2counter;
    winner.classList.remove("winner");
}



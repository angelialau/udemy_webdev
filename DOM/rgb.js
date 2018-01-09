
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var rgbText = document.querySelector("#rgbText");
var message = document.querySelector("#successMessage");
var resetButton = document.querySelector("button");

var numOfColours = 6;
var colours = generateColoursArray(numOfColours);

var colourAnswer= generateAnswer(); //randomly generating ans 
var ans = colours[colourAnswer];
rgbText.textContent = ans; //setting text display to ans

applyColours(colours, ans);


resetButton.addEventListener("click", reset);

for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = coloursArr[i];

    squares[i].addEventListener("click", function(){
        var clickedColour = this.style.backgroundColor;
        console.log(clickedColour, colourAnswer);

        if(clickedColour===colourAnswer){
            message.textContent = "Correct!";
            //changing background colour and correct text
            changeAllColours(clickedColour);
            h1.style.backgroundColor = clickedColour;
        }

        else {
            //box disappears, say try again 
            this.style.backgroundColor = "#232323";
            message.textContent = "Wrong one!";
        };
    })

function changeAllColours(colour){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colour;
    }
}

function generateAnswer(){
    var random = Math.floor(Math.random()* (colours.length));
    return random;
}

function generateColoursArray(number){
    var arr = [];
    for(var i=0; i<number; i++){
        arr[i] = generateColour();
    }
    console.log(arr);
    return arr;
}

function generateColour(){
    var str = "rgb(" + Math.floor(Math.random()*256) + ", " 
        + Math.floor(Math.random()*256) + ", " 
        + Math.floor(Math.random()*256) + ")"; 
    return str;
}

function reset(){
    colours =  generateColoursArray(numOfColours);
    colourAnswer = generateAnswer();
    ans = colours[colourAnswer];
    rgbText.textContent = ans;
    applyColours(colours, ans);

}


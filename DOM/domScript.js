var para = document.querySelector("#para");
var button = document.querySelector("button");
button.addEventListener("click", function(){ //anonymous function, if it is named
// make sure there's no parenthesis
    para.textContent = "someone clicked the buttonnn";
});

document.querySelector("ul").addEventListener("click", function(){
    console.log("you clicked the ul!!");
});

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function(){
        this.style.color = "pink";
    });
};
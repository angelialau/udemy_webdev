// var firstli = document.querySelector("li");
var lis = document.querySelectorAll("li");

// firstli.addEventListener("mouseover", function(){
//     firstli.style.colour = "green";
// });
// firstli.addEventListener("mouseout", function(){
//     firstli.style.colour = "black";
// });

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function(){
        // this.style.color = "green";
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function(){
        // this.style.color = "black";
        this.classList.remove("selected");
    });

    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });    
};


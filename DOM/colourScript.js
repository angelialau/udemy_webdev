var isPurple = false;

// document.querySelector("button").addEventListener("click", function(){
//     if(isPurple) document.body.style.backgroundColor = "white";
//     else{
//         document.querySelector("body").style.backgroundColor = "magenta";
//         //or just document.body...
//         isPurple = !isPurple;
//     }

    
// })

document.querySelector("button").addEventListener("click", function () {
    document.body.classList.toggle("purple");
})
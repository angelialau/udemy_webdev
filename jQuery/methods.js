//note: on() will apply for all relevant elements but click() will only be applied to those on the page

//.text() method, html-safe
$("h1").text(); //"jQuery Methods Demo Page"
$("h1").text("new text"); //changes textContent to "new text"
$("li").text("all 3 lis will change"); //changes textContent to "new text"

//.html() method, allows u to modify html
$("ul").html(); 
    //"
    //   <li>skittles</li>
    //   <li>starburst</li>
    //   <li>twix</li>
    // "
$("ul").html("<li>i hacked ur ul!</li><li>hello world</li>");

//.attr getter and setter for matched elements
    //if only 1 argument: getter
    //if 2 arguments: setter for every selected element 
    //specify with -first-of-type or -last
    //change img1 -> https://i.pinimg.com/originals/8f/dc/a1/8fdca1245dc230da238ce4ca04d96aa2.png

$("img").css("width"); //getter
$("img").css("width", "500px"); //setter

$("img").attr("src");//getter
$("img").attr("src", "https://i.pinimg.com/originals/8f/dc/a1/8fdca1245dc230da238ce4ca04d96aa2.png"); //setter

$("input").attr("type"); //getter;
// $("input").attr("type", "color") //setter

//.val returns user selected value 
    //works for input and select inputs
$("input").val(); //gives user given value
$("input").val("angelia"); //resets text input, usually to clear the user input text

//add/remove/toggleClass
    //addClass() same as .classList.add(), can apply to multiple classes
    //removeClass() same as .classList.remove(), can apply to multiple classes
    //toggleClass() same as .classList.toggle(), can apply to multiple classes

//eventlisteners
    //.click(function(){});
    //.click(function(){});

$("h1").click(function(){
    console.log("h1 clicked");
});

$("button").click(function(){
    console.log("button clicked");
});

$("li").click(function(){
    $(this).css("color", "pink");
});

//keyboard events
    //keypress(): fires in between down and up, most common
    //keyup()
    //keydown()
$("input").keypress(function(event){
    console.log(event);
    if(event.which===13){ //13 is like the ascii for "enter"
        alert("you hit enter!!");
    }
});

//on() is the most used jquery ahah, essentially addEventListener!!
$("#on").on("click", function(){
    $(this).css("color", "purple");
});

$("button").on("mouseenter", function(){
    console.log("mouse enter!");
    $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
    console.log("mouse leave!");
    $(this).css("font-weight", "normal");
});
//displaying 1st item 
$("li")[0]; 

//displaying all items of a selector
$("li").each(function(){
    console.log(this)
});

//applying css style
$("h1")[0].css("color", "yellow"); //document.querySelector("h1").style.color = "yellow";

//applying multiples styles at once
var styles = { //make an object
    color: "red",
    background: "pink",
    border: "2px solid purple"
}

$("h1").css(styles);
$("li").css(styles); //applies to all lis

$("li").css({ //make an object
    fontSize = "10px", //camelCase in jQuery
    color: "red",
    background: "pink",
    border: "2px solid purple"
})



